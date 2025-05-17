"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      { name: "Raspberry Pi", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mini PC", createdAt: new Date(), updatedAt: new Date() },
      { name: "Proyectores", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Componentes para PC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dispositivos IoT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Impresoras 3D", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Monitores y Pantallas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Periféricos Gaming",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Accesorios para móviles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Almacenamiento y SSD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
