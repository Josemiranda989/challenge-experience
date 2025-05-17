"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Smartphone",
        description: "Latest model with 5G",
        brand: "TechBrand",
        price: 799.99,
        stock: 10,
        category_id: 1,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Science Fiction Book",
        description: "An interstellar journey",
        brand: "PaperHouse",
        price: 19.99,
        stock: 50,
        category_id: 2,
        seller_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
