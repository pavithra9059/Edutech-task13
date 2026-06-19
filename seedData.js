const Product =
require("../models/Product");

const seedProducts = async () => {

  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Laptop",
      category: "Electronics",
      price: 50000,
      description: "Dell Laptop"
    },
    {
      name: "Phone",
      category: "Electronics",
      price: 30000,
      description: "Samsung Phone"
    },
    {
      name: "Headphones",
      category: "Electronics",
      price: 2500,
      description: "Wireless Headphones"
    },
    {
      name: "Keyboard",
      category: "Electronics",
      price: 1500,
      description: "Mechanical Keyboard"
    },
    {
      name: "Watch",
      category: "Fashion",
      price: 2000,
      description: "Smart Watch"
    },
    {
      name: "Shoes",
      category: "Fashion",
      price: 3500,
      description: "Sports Shoes"
    },
    {
      name: "T-Shirt",
      category: "Fashion",
      price: 800,
      description: "Cotton T-Shirt"
    },
    {
      name: "Jeans",
      category: "Fashion",
      price: 1800,
      description: "Blue Jeans"
    }
  ]);

  console.log(
    "Sample Products Added"
  );
};

module.exports = seedProducts;
