// shipping.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Shipping = sequelize.define('Shipping', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Orders',
      key: 'id'
    }
  },
  // ... other fields
});

module.exports = Shipping;
