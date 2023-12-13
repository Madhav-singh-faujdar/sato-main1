const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    file: {
        type: String,
        required: true,
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "users",

    },
    bill: [
        {
            type: Schema.Types.ObjectId,
            ref: "Bill",

        }
    ],
    Dealer: String
}, { timestamps: true });

module.exports = mongoose.model("IDverification", postSchema);
