"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("OrderDetails", [
      {
        order_id: 1,
        product_id: 1,
        quantity: 1,
        unit_price: 799.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 2,
        quantity: 1,
        unit_price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderDetails", null, {});
  },
};
