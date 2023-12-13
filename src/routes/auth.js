const router = require('express').Router();
const authControllers = require('../controllers/auth');
const { body } = require("express-validator");
const User = require("../models/users");
const ID_VERIFICATION = require("../models/IDverification");
const BILL_UPLOAD = require("../models/Bill");
const AUTHENTIC_USER = require("../models/authenticUser");
const exceljs = require('exceljs');

router.post('/signup', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) {
                    return Promise.reject('E-mail address already exists');
                }

            });
        })
    ,
    body('password').trim().isLength({ min: 5 }),
    body("phone")
        .isNumeric()
        .withMessage("Please provide a valid phone number!")
        .notEmpty()
        .withMessage("Please fill your phone number!")
        .custom(async (value) => {
            const existingForm = await User.findOne({ phone: value });
            if (existingForm) {
                throw new Error("Phone number already exists!");
            }
            return true;
        }),

], authControllers.signup);



router.post('/verifyOtp', authControllers.verifyOtp);
router.post('/resendPhoneOtp', authControllers.resendPhoneOtp);
router.post('/login', authControllers.login);


router.get('/refreshAccessToken', authControllers.refreshAccessToken);


router.delete('/logout', authControllers.logout);




// -----------------------------------------------------
router.post('/addId', async (req, res, next) => {
    try {
        const { file, ID } = req.body
        if (!(file && ID)) {
            throw new Error('Bad Request')
        }

        const userDetails = await User.findById(ID).populate('delearId').exec()

        if (!userDetails) {
            throw new Error('something went wrong!')

        }


        const data = await ID_VERIFICATION.create({
            file,
            userID: ID,
            Dealer: userDetails?.delearId?.userName
        })


        if (!data) {
            throw new Error('Something went wrong!')
        }

        res.status(201).json({
            error: false,
            message: "uploaded successfully!",
            data: data._id
        })

    } catch (error) {
        next(error)
    }
})
router.get('/getFile/:ID', async (req, res, next) => {
    try {
        const { ID } = req.params
        if (!ID) {
            throw new Error('Bad Request')
        }
        const data = await ID_VERIFICATION.findOne({ userID: ID })


        if (!data) {
            throw new Error('Something went wrong!')
        }

        res.status(200).json({
            error: false,
            message: "find successfully!",
            data: data
        })

    } catch (error) {
        next(error)
    }
})

router.get('/sato/find/excel/abc=6561dc01f5217930f66f042b/chck/auth/6561dc01f5217930f66f042b/6561dc01f5217930f66f042b', async (req, res, next) => {
    try {
        // Fetch user data from the database
        const users = await ID_VERIFICATION.find().populate("userID").exec();
        // Create a new Excel workbook
        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet('Sato user details excel');

        // Define column headers
        worksheet.columns = [
            { header: 'Full Name', key: 'fullName', width: 20 },
            { header: 'File Link', key: 'File', width: 30 },
            { header: 'Email', key: 'Email', width: 30 },
            { header: 'Phone', key: 'Phone', width: 30 },
            { header: 'Email Verified', key: 'IsEmailVerified', width: 30 },
            { header: 'User Date', key: 'Date', width: 30 },
            { header: 'Id upload Date', key: 'DateId', width: 30 },
            { header: 'Dealer Id', key: 'Dealer', width: 30 },
            // Add more columns as needed
        ];


        // Add data to the worksheet
        users.forEach(user => {
            worksheet.addRow({
                fullName: user.userID.fullName,
                Email: user.userID.email,
                Phone: user.userID.phone,
                IsEmailVerified: user.userID.IsEmailVerified,
                File: user.file,
                Date: user.userID.createdAt,
                DateId: user.createdAt,
                Dealer: user.Dealer
                // Add more properties as needed
            });
        });

        // Set response headers for Excel file download
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=users.xlsx');

        // Send the Excel file to the client for download
        await workbook.xlsx.write(res);
        res.end();

    } catch (error) {
        next(error);
    }
});


router.post('/addBill', async (req, res, next) => {
    try {
        const { uploadedBill, billNumber, userID } = req.body
        if (!(uploadedBill && billNumber && userID)) {
            throw new Error('Please fill all the fields')
        }
        const idData = await ID_VERIFICATION.findOne({ userID })
        if (!idData) {
            throw new Error('Please verify your account!')

        }
        const data = await BILL_UPLOAD.create({
            uploadedBill,
            billNumber, userID
        })


        if (!data) {
            throw new Error('Something went wrong!')
        }


        let isSave = await ID_VERIFICATION.findByIdAndUpdate(idData._id, { $push: { bill: data._id } })

        if (!isSave) {
            throw new Error('Something went wrong!')
        }
        res.status(201).json({
            error: false,
            message: "uploaded successfully!",
            data: data._id
        })

    } catch (error) {
        next(error)
    }
})
router.get('/getBill', async (req, res, next) => {
    try {

        const data = await BILL_UPLOAD.find().populate('userID').exec()

        if (!data) {
            throw new Error('Something went wrong!')
        }


        res.status(200).json({
            error: false,
            message: "fetch successfully!",
            data
        })

    } catch (error) {
        next(error)
    }
})



router.post('/addAuthenticUser', async (req, res, next) => {
    try {
        const { userName, Address, createName } = req.body
        if (!(userName && Address)) {
            throw new Error('Bad Request || please fill all fields')
        }
        const data = await AUTHENTIC_USER.create({
            userName,
            Address,
            createName
        })


        if (!data) {
            throw new Error('Something went wrong!')
        }


        res.status(201).json({
            error: false,
            message: "saved successfully!",
            data: data
        })

    } catch (error) {
        next(error)
    }
})
router.get('/getAuthenticUser', async (req, res, next) => {
    try {

        const data = await AUTHENTIC_USER.find()

        if (!data) {
            throw new Error('Something went wrong!')
        }


        res.status(200).json({
            error: false,
            message: "fetch successfully!",
            data
        })

    } catch (error) {
        next(error)
    }
})


module.exports = router;