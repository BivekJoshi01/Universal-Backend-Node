const mongoose = require("mongoose");

const productCategorySchema = mongoose.Schema(
  {
    productCategory: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    //grouping
  },
  {
    timestamps: true,
  }
);

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategory;
