const { User, Product } = require("../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      const users = await User.findAndCountAll({
        attributes: ["id", "name", "email", "is_seller"],
        include: [
          {
            model: Product,
            attributes: ["id", "name", "price", "stock"],
          },
        ],
      });

      const response = {
        status: "success",
        count: users.count,
        users: users.rows,
      };

      res.status(200).json(response);
    } catch (error) {
      console.error("Error al listar usuarios:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        description: error.message,
      });
    }
  },
};
