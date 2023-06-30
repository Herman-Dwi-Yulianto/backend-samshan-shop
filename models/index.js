const sequelize = require('../config/database');

// Import models
const Auth = require('./auth');
const Product = require('./product');
const Customer = require('./customer');
const Cart = require('./cart');
const Image = require('./image');
const Form = require('./form');
const Order = require('./order');
const Shipping = require('./shipping');

// Define associations
require('./associations');

// Initialize models
Auth.init(sequelize);
Product.init(sequelize);
Customer.init(sequelize);
Cart.init(sequelize);
Image.init(sequelize);
Form.init(sequelize);
Order.init(sequelize);
Shipping.init(sequelize);

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
  Order,
  Shipping,

  // Export other models you have defined
};
