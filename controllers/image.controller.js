const image = require('../models/image');
const upload = require ('../utils/multer')

// Upload image
const uploadImage = upload.single('image'); // Assuming the field name in the form is 'image'

const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { originalname, filename, path } = req.file;

    // Create a new image record in the database
    const image = await image.create({
      originalName: originalname,
      fileName: filename,
      filePath: path,
    });

    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
};

// Get image by ID
const getImageById = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await Image.findByPk(imageId);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.sendFile(path.resolve(image.filePath));
  } catch (error) {
    console.error('Error getting image:', error);
    res.status(500).json({ error: 'Failed to get image' });
  }
};

module.exports = {
  uploadImage,
  uploadImageController,
  getImageById,
};