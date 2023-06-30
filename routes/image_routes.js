const express = require('express');
const Image = require('../controllers/image_controller');

const router = express.Router();

// Route for uploading an image
router.post('/upload', Image.uploadImage, Image.uploadImageController);

// Route for getting an image by ID
router.get('/:id', Image.getImageById);

module.exports = router;
