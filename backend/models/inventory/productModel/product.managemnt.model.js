const mongoose = require("mongoose");

const productManagementSchema = mongoose.Schema(
  {
    productName: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    //grouping
  },
  {
    timestamps: true,
  }
);

const ProductManagement = mongoose.model(
  "ProductCategory",
  productManagementSchema
);

module.exports = ProductManagement;
