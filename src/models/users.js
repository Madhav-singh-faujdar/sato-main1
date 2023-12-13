const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  fullName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    default: "+91"
  },
  isAuth: {
    type: Boolean,
    default: false,

  },
  IsEmailVerified: {
    type: Boolean,
    default: false,

  },
  delearId: {
    type: Schema.Types.ObjectId,
    ref: "authenticUser",

  },

pinCode:String,
address:String



}, { timestamps: true });

module.exports = mongoose.model("users", postSchema);
