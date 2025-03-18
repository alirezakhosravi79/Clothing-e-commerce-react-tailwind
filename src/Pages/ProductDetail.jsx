import React, { useContext } from 'react'
import { ShopContext } from '../Components/ShopContext'
import { productsData } from '../data';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const {addToCart} = useContext(ShopContext);

  const {id} = useParams();

  const product = productsData.find((product) => product.id === parseInt(id));
  return (
    <div className="mt-20 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
      {/* Left Section - Product Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[460px] rounded-lg shadow-md"
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-3xl font-semibold">{product.title}</h3>
        <p className="text-2xl text-red-500 font-bold">$ {product.price}</p>
        <p className="text-lg text-gray-600">{product.description}</p>
        
        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product, id)}
          className="bg-red-500 text-white text-lg py-3 px-10 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDetail