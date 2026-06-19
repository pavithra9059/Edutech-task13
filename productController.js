const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {

    const page =
      parseInt(req.query.page) || 1;

    const limit =
      parseInt(req.query.limit) || 5;

    const search =
      req.query.search || "";

    const category =
      req.query.category || "";

    const skip =
      (page - 1) * limit;

    let query = {};

    if (search) {
      query.name = {
        $regex: search,
        $options: "i"
      };
    }

    if (category) {
      query.category = category;
    }

    const totalProducts =
      await Product.countDocuments(query);

    const products =
      await Product.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages: Math.ceil(
        totalProducts / limit
      ),
      totalProducts,
      products
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getProducts
};
