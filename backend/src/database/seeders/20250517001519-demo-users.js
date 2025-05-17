"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Alice Seller",
        email: "alice@example.com",
        password: "password123",
        is_seller: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob Buyer",
        email: "bob@example.com",
        password: "password123",
        is_seller: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
