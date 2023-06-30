const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cart = sequelize.define('CartItem', {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

module.exports = Cart;
