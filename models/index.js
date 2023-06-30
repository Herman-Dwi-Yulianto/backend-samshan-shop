const sequelize = require('../config/database');

// Import models
const Auth = require('./auth');
const Product = require('./product');
const Customer = require('./curstomer');
const Cart = require('./cart');
const Image = require('./image');
const Form = require('./form');
const Orders = require('./orders');
const Shipping = require('./shipping');

// Define associations
require('./associations');

// Initialize models
Auth.initialize(sequelize);
Product.initialize(sequelize);
Customer.initialize(sequelize);
Cart.initialize(sequelize);
Image.initialize(sequelize);
Form.initialize(sequelize);
Orders.initialize(sequelize);
Shipping.initialize(sequelize);

// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });

module.exports = {
  Auth,
  Product,
  Customer,
  Cart,
  Image,
  Form,
  Orders,
  Shipping,

  // Export other models you have defined
};
