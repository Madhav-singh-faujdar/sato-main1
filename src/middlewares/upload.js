const multer = require('multer');
const fetch = require('node-fetch');

let ImageUrl;

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        try {


            // Call cb with null (no error) and the destination folder
            cb(null, 'your_destination_folder');
        } catch (error) {
            // Call cb with the error
            cb(error);
        }
    },
    filename: function (req, file, cb) {
        cb(null, ImageUrl);
    }
});

const upload = multer({ storage: storage }).single('file');

module.exports = upload;
