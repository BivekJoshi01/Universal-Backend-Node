import React from "react";
import ComLogo from "../../../../../assets/Office/UniversalLogo.jpeg";
import { Input } from "../../../../../components/RenderInput/Fields/input";

const BillLayout = () => {
  // Dummy items
  const items = [
    { id: 1, description: "A4 Paper (Pack of 500 sheets)", qty: 10, unit: 10,rate: 450, total: 4500 },
    { id: 2, description: "Stapler Machine", qty: 2, rate: 350,unit: 10,total: 700 },
    { id: 3, description: "Ballpoint Pens (Box)", qty: 5, rate: 120,unit: 10, total: 600 },
  ];

  const subTotal = items.reduce((acc, item) => acc + item.total, 0);
  const tax = subTotal * 0.13;
  const grandTotal = subTotal + tax;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded-lg text-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        {/* Logo */}
        <div className="w-28 h-28">
          <img
            src={ComLogo}
            alt="Company Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Company Info */}
        <div className="text-right">
          <h1 className="text-2xl font-bold text-gray-800">
            Universal Stationery Suppliers
          </h1>
          <p className="text-gray-600">Balambu 12, Kathmandu, Nepal</p>
          <p className="text-gray-600">Email: universal@stationery.com</p>
          <p className="text-gray-600">Phone: +977-01-5555555</p>
          <p className="text-gray-600">www.universalstationery.com.np</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Bill Info */}
      <div className="flex justify-between gap-4 text-sm mb-6">
        <p className="font-medium">Bill No: Q-2025-001</p>
        <p>Date: 2025-02-02</p>
      </div>

<Input/>
      {/* Table */}
      <table className="w-full text-left border-collapse my-2">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-3 py-2">#</th>
            <th className="border border-gray-300 px-3 py-2">Description</th>
            <th className="border border-gray-300 px-3 py-2 text-right">Unit</th>
            <th className="border border-gray-300 px-3 py-2 text-right">Qty</th>
            <th className="border border-gray-300 px-3 py-2 text-right">Rate (Rs)</th>
            <th className="border border-gray-300 px-3 py-2 text-right">Total (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">{item.id}</td>
              <td className="border border-gray-300 px-3 py-2">{item.description}</td>
              <td className="border border-gray-300 px-3 py-2 text-right">{item.unit}</td>
              <td className="border border-gray-300 px-3 py-2 text-right">{item.qty}</td>
              <td className="border border-gray-300 px-3 py-2 text-right">{item.rate}</td>
              <td className="border border-gray-300 px-3 py-2 text-right">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex mb-8">
        <div className="w-full">
          <div className="flex justify-between py-2 border-b border-gray-300">
            <span>Sub Total</span>
            <span>Rs. {subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-300">
            <span>VAT (13%)</span>
            <span>Rs. {tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-gray-800">
            <span>Grand Total</span>
            <span>Rs. {grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 mt-10">
        <p>By: Sanjeev Shrestha</p>
        <p className="mt-2 italic">Please buy with us again.</p>
      </div>
    </div>
  );
};

export default BillLayout;
