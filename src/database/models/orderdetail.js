"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      // Cada detalle pertenece a una orden
      OrderDetail.belongsTo(models.Order, { foreignKey: "order_id" });

      // Cada detalle pertenece a un producto
      OrderDetail.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  OrderDetail.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      unit_price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
