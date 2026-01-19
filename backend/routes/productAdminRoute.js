const express = require("express");
const Product = require("../model/productModel");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * GET /api/admin/products
 * Get all products (Admin)
 */
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * PUT /api/admin/products/:id
 * Update product (Admin)
 */
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name ?? product.name;
    product.description = req.body.description ?? product.description;
    product.price = req.body.price ?? product.price;
    product.countInStock = req.body.countInStock ?? product.countInStock;
    product.sku = req.body.sku ?? product.sku;
    product.category = req.body.category ?? product.category;
    product.brand = req.body.brand ?? product.brand;
    product.sizes = req.body.sizes ?? product.sizes;
    product.colors = req.body.colors ?? product.colors;
    product.collections = req.body.collections ?? product.collections;
    product.materials = req.body.materials ?? product.materials;
    product.gender = req.body.gender ?? product.gender;
    product.images = req.body.images ?? product.images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * DELETE /api/admin/products/:id
 * Delete product (Admin)
 */
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
