const multer = require('multer');

// Define the storage for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const extension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  },
});

// Create the multer instance
const upload = multer({ storage });

module.exports = upload;
