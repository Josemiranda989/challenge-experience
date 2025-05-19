const { Product, Category, User, Sequelize } = require("../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      const products = await Product.findAndCountAll({
        attributes: {
          include: [
            [
              Sequelize.literal(
                `CONCAT('${process.env.URL_BASE}:${process.env.NODE_DOCKER_PORT}','/api/products/', Product.id)`
              ),
              "detailUrl",
            ],
          ],
        },

        include: [
          {
            model: Category,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
        ],
      });
      const response = {
        status: "success",
        count: products.count,
        products: products.rows,
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        description: error.message,
      });
    }
  },

  search: async (req, res) => {
    try {
      const products = await Product.findAndCountAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${req.query.name}%`,
          },
        },
        attributes: {
          include: [
            [
              Sequelize.literal(
                `CONCAT('${process.env.URL_BASE}:${process.env.NODE_PORT}','/api/products/', Product.id)`
              ),
              "detailUrl",
            ],
          ],
        },
        include: [
          {
            model: Category,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
        ],
      });

      const response = {
        status: "success",
        count: products.count,
        products: products.rows,
      };
      res.status(200).json(response);
    } catch (error) {
      console.error("Error al buscar productos:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  },
  detail: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [
          {
            model: Category,

            attributes: ["id", "name"],
          },
          {
            model: User,

            attributes: ["id", "name", "email"],
          },
        ],
      });
      const response = {
        status: "success",
        products: product,
      };

      res.status(200).json(response);
    } catch (error) {
      console.error("Error al buscar productos:", error);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  },
};
