"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Un producto pertenece a un vendedor
      Product.belongsTo(models.User, { foreignKey: "seller_id" });

      // Un producto pertenece a una categoría
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
      });

      // Un producto puede aparecer en muchos detalles de orden
      Product.hasMany(models.OrderDetail, { foreignKey: "product_id" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      brand: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      stock: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
