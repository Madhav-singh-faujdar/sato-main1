const mongoose = require('mongoose')
const Schema = mongoose.Schema



const AuthenticUser = new Schema({
    userName: {
        type: String,
        required: [true, 'Please fill a valid Authentic Name']
    },
    Address: {
        type: String,
        required: [true, 'Please fill a valid address']
    },
    createName: String
})

module.exports = mongoose.model("authenticUser", AuthenticUser)