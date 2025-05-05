const mongoose = require("mongoose");

const productCompanySchema = mongoose.Schema(
  {
    companyName: { type: String, require: true, unique: true },
    street: { type: String, require: true },
    city: { type: String, require: true },
    country: { type: String, require: true },
    contactPerson: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const ProductCompany = mongoose.model("ProductCompany", productCompanySchema);

module.exports = ProductCompany;
