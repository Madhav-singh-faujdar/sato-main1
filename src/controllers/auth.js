const Users = require("../models/users");
const OtpModel = require('../models/otpSchema')
const DEALER_DATA = require('../models/authenticUser')
const ID_VERIFICATION = require("../models/IDverification");


require("dotenv").config();
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const RefreshToken = require('../models/refreshTokens');
const otpSchema = require("../models/otpSchema");

const refreshTokenMaxage = 2 * 24 * 60 * 60 * 1000;
const accessTokenMaxage = 10 * 60 * 100;


const generateRefreshToken = async (user) => {
  const payload = {
    email: user.email,
    userId: user._id.toString(),
  };

  const secret = process.env.JWT_REFRESH_SECRET_KEY;

  const options = {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
    algorithm: "HS256",
  };
  const refreshToken = jwt.sign(payload, secret, options);
  const tokenDoc = new RefreshToken({ userId: user._id, token: refreshToken });
  await tokenDoc.save();
  return refreshToken;
};

const generateAccessToken = async (user) => {
  const payload = {
    email: user.email,
    userId: user._id.toString(),
  };

  const secret = process.env.JWT_ACCESS_SECRET_KEY;

  const options = {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
    algorithm: "HS256",
  };
  const accessToken = jwt.sign(payload, secret, options);

  return accessToken;
};



// -----email otp----------------------------------//

const Sib = require('sib-api-v3-sdk');
const { SendHtml } = require('../templete/templete');
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;
const tranEmailApi = new Sib.TransactionalEmailsApi()

const sender = {
  email: process.env.SENDER,
  name: process.env.SENDER_EMAIL_NAME,
}

// -----email otp----------------------------------//



// --------------Phone OTP-----------------------------//
// const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// const buildMessage = function (OTP) {
//   const message = "Use OTP " + OTP + " to signup into your 1mcv account. Do not share the OTP or your number with anyone including 1mcv personnel. -1mcv.com"
//   return message;
// };
// --------------Phone OTP-----------------------------//




exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed");
      error.statusCode = 400;
      error.data = errors.array();
      throw error;
    }

    const { fullName, email, password, phone, countryCode, delearId , pinCode, address,file} = req.body;
    if (!fullName) {
      const error = new Error("Bad request");
      error.statusCode = 400;
      throw error;
    }
    if (!delearId) {
      const error = new Error("please select a dealer !");
      error.statusCode = 400;
      throw error;
    }
    if (!(pinCode && address)) {
      const error = new Error("please fill all the fields !");
      error.statusCode = 400;
      throw error;
    }
    if (!(file)) {
      const error = new Error("please upload the image !");
      error.statusCode = 400;
      throw error;
    }

    const reg = /^[0-9]{10}$/;
    if (!phone || !reg.test(phone) || typeof phone === 'undefined' || typeof phone === 'string') {
      const error = new Error("Please provide a valid phone number");
      error.statusCode = 400;
      throw error;
    }




    const hashedPassword = await bcrypt.hash(password, 10);
    let user;

    if (countryCode) {
      user = new Users({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        phone: Number(phone),
        countryCode: countryCode,
        delearId,
        pinCode,
        address
      });
    } else {
      user = new Users({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        phone: Number(phone),
        delearId,
        address,
        pinCode
      });
    }

    const savedUser = await user.save();
    if (!savedUser) {
      throw new Error("Something went wrong.");
    }




    const userDetails = await DEALER_DATA.findById(delearId)

    if (!userDetails) {
        throw new Error('something went wrong!')

    }


    const data = await ID_VERIFICATION.create({
        file,
        userID: savedUser._id,
        Dealer: userDetails?.userName
    })


    if (!data) {
        throw new Error('Something went wrong!')
    }

    function generateOTP() {
      let otp = Math.floor(100000 + Math.random() * 900000).toString();
      return otp;
    }

    const OTP = generateOTP();
    console.log(OTP);

    const hashedOtp = await bcrypt.hash(OTP, 10);



    const savedOtp = await OtpModel.create({
      userId: savedUser._id,
      otp: hashedOtp,
      phone: Number(savedUser.phone),
      email: String(email)
    })

    if (!savedOtp) {
      throw new Error("Something went wrong.");
    }


    //-------------------------------- send sms with the generated OTP----------------------------------
    // let numberWIthCode = `${savedUser.countryCode}${savedUser?.phone}`

    // const sendSmsMessage = await client.messages.create({
    //   to: numberWIthCode,
    //   from: process.env.TWILIO_NUMBER,
    //   body: buildMessage(OTP)
    // })
    // if (!sendSmsMessage.body) {
    //   return
    // }


    // --------------------------------send sms with the generated OTP----------------------------------


    // const receivers = [
    //   {
    //     email: email,
    //   },
    // ]

    // const sendEMail = await tranEmailApi.sendTransacEmail
    //   ({
    //     sender,
    //     to: receivers,
    //     subject: 'Otp for verification',
    //     htmlContent: SendHtml(fullName, OTP)

    //   });

    // if (!sendEMail) {
    //   throw new error("Error in mail server");
    // }

    res
      .status(201)
      .json({ error: false, message: "OTP sends successfully.", data: savedUser._id });
  } catch (error) {
    next(error);
  }
};



exports.verifyOtp = async (req, res, next) => {
  try {
    const { userId, otp } = req.body;
    if (!otp || !userId) {
      const error = new Error("Bad request");
      error.statusCode = 400;
      throw error;
    }
    let user = await Users.findById(userId);


    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404;
      throw error;
    }

    const userData = await otpSchema.findOne({ userId })
    if (!userData) {
      const error = new Error('OTP expired!');
      error.statusCode = 400;
      throw error;
    }

    const CompareOtp = await bcrypt.compare(String(otp), userData.otp)

    if (!CompareOtp) {
      const error = new Error('Please provide a valid Otp!');
      error.statusCode = 400;
      throw error;
    }

    await userData.remove();

    let setIsAuth = await Users.findByIdAndUpdate(userId, { IsEmailVerified: true })


    if (!setIsAuth) {
      const error = new Error('Something went wrong!');
      error.statusCode = 400;
      throw error;
    }
    res
      .status(200)
      .json({ error: false, message: "Registered Successfully", data: {} });
  } catch (error) {
    next(error);
  }
};


exports.resendPhoneOtp = async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      const error = new Error("Bad request");
      error.statusCode = 400;
      throw error;
    }

    let user = await Users.findOne({ _id: userId });


    if (!user) {
      throw new Error("User does not exists.");
    }


    function generateOTP() {
      let otp = Math.floor(100000 + Math.random() * 900000).toString();
      return otp;
    }

    const OTP = generateOTP();
    console.log(OTP);

    const hashedOtp = await bcrypt.hash(OTP, 10);

    const isOTPPresent = await OtpModel.findOne({ userId })
    if (isOTPPresent) {
      await OtpModel.findByIdAndDelete(isOTPPresent._id)
    }

    const savedOtp = await OtpModel.create({
      userId: user._id,
      otp: hashedOtp,
      phone: Number(user.phone),
      email: String(user.email),
    })

    if (!savedOtp) {
      throw new Error("Something went wrong.");
    }


    //------------------------------------------ send sms with the generated OTP

    // let numberWIthCode = `${user.countryCode}${user?.phone}`


    // const sendSmsMessage = await client.messages.create({
    //   to: numberWIthCode,
    //   from: process.env.TWILIO_NUMBER,
    //   body: buildMessage(OTP)
    // })
    // if (!sendSmsMessage.body) {
    //   return
    // }
    //------------------------------------------ send sms with the generated OTP

    const receivers = [
      {
        email: user.email,
      },
    ]

    const sendEMail = await tranEmailApi.sendTransacEmail
      ({
        sender,
        to: receivers,
        subject: 'Resend Otp for verification',
        htmlContent: SendHtml(user.fullName, OTP)

      });

    if (!sendEMail) {
      throw new error("Error in mail server");
    }




    res
      .status(201)
      .json({ message: "OTP has been sent to your registered email address." });

  } catch (error) {
    next(error);
  }
}


exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!(email && password)) {
      const error = new Error("Bad request");
      error.statusCode = 400;
      throw error;
    }
    let userData = await Users.findOne({ email });





    if (!userData) {
      const error = new Error("Email does not exists.");
      error.statusCode = 404;
      throw error;
    }
    const passwordCompare = await bcrypt.compare(password, userData.password);
    if (!passwordCompare) {
      const error = new Error("Incorrect Password.");
      error.statusCode = 401;
      throw error;
    }


    if (!userData.IsEmailVerified) {
      return res.status(401).json({ error: true, message: "unauthorize user!", userId: userData._id })
    }

    const accessToken = await generateAccessToken(userData);
    const refreshToken = await generateRefreshToken(userData);
    res.cookie("refreshToken", refreshToken.toString(), {
      httpOnly: true,
      maxAge: refreshTokenMaxage,
    });

    res.status(200).json({
      message: "Success.",
      data:{
      accessToken,
      accessTokenExpiresIn: accessTokenMaxage,
      refreshTokenExpiresIn: refreshTokenMaxage,
      userId: userData._id,
      email,
      name:userData.fullName
    
    }
    });
  } catch (error) {
    next(error);
  }
};







exports.refreshAccessToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    const secret = process.env.JWT_REFRESH_SECRET_KEY;

    const options = {
      algorithms: ["HS256"],
    };
    const decoded = jwt.verify(refreshToken, secret, options);

    const tokenDoc = await RefreshToken.findOne({
      userId: decoded.userId,
      token: refreshToken,
    });

    if (tokenDoc.used) {
      const error = new Error("Refresh token has already been used");
      error.statusCode = 498;
      throw error;
    }

    const user = await Users.findById(decoded.userId);
    const newRefreshToken = await generateRefreshToken(user);

    tokenDoc.used = true;
    await tokenDoc.save();
    const newAccessToken = await generateAccessToken(user);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      maxAge: refreshTokenMaxage,
    });

    res.status(200).json({
      message: 'Successfully created access token and refresh token',
      accessToken: newAccessToken,
      accessTokenExpiresIn: accessTokenMaxage,
      refreshTokenExpiresIn: refreshTokenMaxage,
      userId: user._id,
    });



  } catch (error) {
    next(error);
  }

};


exports.logout = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    const secret = process.env.JWT_REFRESH_SECRET_KEY;

    const options = {
      algorithms: ["HS256"],
    };
    const decoded = jwt.verify(refreshToken, secret, options);
    await RefreshToken.updateMany({ userId: decoded.userId }, { used: true });
    res.status(200).json({ message: 'Successfully logged out.' });
  } catch (error) {
    next(error);
  }

};