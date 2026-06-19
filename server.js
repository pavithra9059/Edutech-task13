require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
require("./config/db");

const productRoutes =
require("./routes/productRoutes");

const seedProducts =
require("./seed/seedData");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send(
    "Search Filter Pagination API"
  );
});

app.get("/seed", async (req, res) => {

  await seedProducts();

  res.json({
    success: true,
    message: "Database Seeded"
  });
});

app.use(
  "/api/products",
  productRoutes
);

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});
