"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Migue Granados",
        email: "miguegranados@example.com",
        password: "password123",
        is_seller: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Santi Maratea",
        email: "santimaratea@example.com",
        password: "password123",
        is_seller: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luli González",
        email: "luligonzalez@example.com",
        password: "password123",
        is_seller: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Coscu",
        email: "coscu@example.com",
        password: "password123",
        is_seller: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Momo Benavides",
        email: "momobenavides@example.com",
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
