const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  otp: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  createdAt: { type: Date, expires: 600, default: Date.now } // 600 seconds (10 minutes)
});

module.exports = mongoose.model("otpSchema", otpSchema);
