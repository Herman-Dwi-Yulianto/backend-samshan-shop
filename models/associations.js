const { User, Product, CartItem } = require('./index');
import { HasMany, BelongsTo } from 'sequelize';

User.HasMany(CartItem);
CartItem.BelongsTo(User);

Product.HasMany(CartItem);
CartItem.BelongsTo(Product);
