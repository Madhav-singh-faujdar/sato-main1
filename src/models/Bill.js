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
    }
})

module.exports = mongoose.model("Bill", billData)