import React from 'react';

const Products:React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300', price: '$20' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300', price: '$30' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300', price: '$40' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300', price: '$50' },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-606268 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4">{product.price}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
