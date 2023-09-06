const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    };
  }
}

const ProductSchema = {

  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_code: {
    type: DataTypes.STRING(20)
  },
  product_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  },
  product_price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  product_image: {
    type: DataTypes.TEXT
  },
  product_active: {
    type: DataTypes.INTEGER,
    validate: {
      isIn: [[0, 1]]
    }
    
  },
};

module.exports = { Product, ProductSchema };