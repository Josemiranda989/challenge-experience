const { Product, Category, User } = require("../database/models");

module.exports = {
  list: async (req, res) => {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "seller",
          attributes: ["id", "name", "email"],
        },
      ],
    });
    res.status(200).json(products);
  },
  search: (req, res) => {},
  detail: (req, res) => {},
};
