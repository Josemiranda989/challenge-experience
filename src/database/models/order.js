"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Una orden pertenece a un usuario
      Order.belongsTo(models.User, { foreignKey: "user_id" });

      // Una orden tiene muchos detalles
      Order.hasMany(models.OrderDetail, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
