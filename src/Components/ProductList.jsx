import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";

function ProductList() {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 text-center mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Our Elegant Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div
                className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm transition-transform duration-200
                hover:-translate-y-1"
                key={id}
              >
                <Link to={`/product/${id}`}>
                  <img
                    src={image}
                    alt=""
                    className="w-full h-64 object-cover rounded-lg transform scale-90 hover:scale-100 transition-transform duration-200"
                  />
                </Link>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h4>
                  <p className="text-gray">{price}</p>
                </div>
                <button
                  onClick={() => addToCart(product, id)}
                  className="w-full py-2 mt-4 text-lg font-medium to-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
