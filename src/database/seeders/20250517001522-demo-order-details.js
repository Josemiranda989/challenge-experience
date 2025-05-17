"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("OrderDetails", [
      {
        order_id: 1,
        product_id: 11,
        quantity: 2,
        unit_price: 25.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 5,
        quantity: 2,
        unit_price: 5.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 1,
        product_id: 9,
        quantity: 1,
        unit_price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 2,
        product_id: 2,
        quantity: 1,
        unit_price: 450.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 1,
        quantity: 1,
        unit_price: 75.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 3,
        product_id: 3,
        quantity: 1,
        unit_price: 999.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 9,
        quantity: 3,
        unit_price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 4,
        product_id: 5,
        quantity: 10,
        unit_price: 5.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 4,
        product_id: 9,
        quantity: 2,
        unit_price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 5,
        product_id: 6,
        quantity: 1,
        unit_price: 250.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 5,
        product_id: 9,
        quantity: 1,
        unit_price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 5,
        product_id: 5,
        quantity: 1,
        unit_price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 6,
        product_id: 12,
        quantity: 1,
        unit_price: 210.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 6,
        product_id: 9,
        quantity: 2,
        unit_price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 6,
        product_id: 5,
        quantity: 2,
        unit_price: 12.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 7,
        product_id: 8,
        quantity: 1,
        unit_price: 69.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 8,
        product_id: 13,
        quantity: 1,
        unit_price: 799.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 8,
        product_id: 9,
        quantity: 1,
        unit_price: 20.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 9,
        product_id: 7,
        quantity: 1,
        unit_price: 199.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 9,
        product_id: 9,
        quantity: 1,
        unit_price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        order_id: 10,
        product_id: 14,
        quantity: 1,
        unit_price: 65.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderDetails", null, {});
  },
};
