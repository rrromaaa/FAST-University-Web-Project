const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productController");

router.get("/", getProducts); //FOR GETTING SIMPLE ALL PRODUCTS
router.get("/:id", getProductById);  //TO GET A SPECIFIC PRODUCT BY AN ID



module.exports = router;