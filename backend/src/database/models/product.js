"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Un producto pertenece a un vendedor
      Product.belongsTo(models.User, { as: "seller", foreignKey: "seller_id" });

      // Un producto pertenece a una categoría
      Product.belongsTo(models.Category, {
        as: "category",
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
