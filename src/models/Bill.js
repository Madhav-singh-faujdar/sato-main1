const mongoose = require('mongoose')
const Schema = mongoose.Schema



const billData = new Schema({
    uploadedBill: {
        type: String,
        required: [true, 'Please upload a bill']
    },
    billNumber: {
        type: String,
        required: [true, 'Please fill a bill number']
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    invoiceDate:String,
invoiceAmount:String,
distributor: {
    type: Schema.Types.ObjectId,
    ref: "authenticUser",

  }
})

module.exports = mongoose.model("Bill", billData)