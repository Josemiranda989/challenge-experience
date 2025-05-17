module.exports = {
  index: (req, res) => {
    res.json({
      status: "success",
      message: "Bienvenido a la API",
      endpoints: {
        products: {
          list: {
            description: "return list of products with associations",
            endpoint: "/api/products",
          },
          detail: {
            description:
              "return product detail with associations, param `id` is required",
            endpoint: "/api/products/:id",
            example: "/api/products/1",
          },
          search: {
            description:
              "return list of search with associations, query `name` is required",
            endpoint: "/api/products/search?name=keyword",
            example: "/api/products/search?name=Phone",
          },
        },
        users: {
          list: {
            description: "return list of users with associations",
            endpoint: "/api/products",
          },
        },
      },
    });
  },
};
