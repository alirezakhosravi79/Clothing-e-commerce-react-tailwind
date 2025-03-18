import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function Cart() {
  const {
    cart,
    clearCart,
    total,
    itemAmount,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
  } = useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-24 flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow">
        {/* Cart Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          <h1 className="text-lg">Items: ({itemAmount})</h1>
          <FiTrash2
            onClick={clearCart}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </div>
        {/* Cart items header */}
        <div className="grid grid-cols-4 text-gray-700 font-semibold mt-6 pb-2 border-b">
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        {/* Cart Items */}
        {cart.length > 0 ? (
          cart.map((item) => {
            const { id, title, price, amount, image } = item;
            return (
              <div
                key={id}
                className="grid grid-cols-4 items-center py-4 border-b to-gray-700"
              >
                {/* Cart item details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={image}
                    alt=""
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h3>{title}</h3>
                    <button
                      onClick={() => removeFromCart(id)}
                      className="text-red-500 text-sm flex items-center gap-1 mt-2"
                    >
                      <FiTrash2 />
                      Remove
                    </button>
                  </div>
                </div>
                {/* Quantity Control */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => decreaseAmount(id)}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl"
                  >
                    <IoMdRemove />
                  </button>
                  <span>{amount}</span>
                  <button
                    onClick={() => increaseAmount(id)}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xl"
                  >
                    <IoMdAdd />
                  </button>
                </div>
                <p className="text-lg font-medium">${price}</p>
                <p className="text-lg font-semibold">${(price * amount).toFixed(2)}</p>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 mt-4">Your Cart Is Empty</p>
        )}
      </div>
      {/* Right Section cart summary */}
      <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold border-b pb-4">Cart Summary</h2>
        <div className="flex justify-between mt-4">
          <span className="text-gray-700"> Items: </span>
          <span className="font-medium">{itemAmount}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-medium">${isNaN(total) ? 0 : total}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Shopping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="mt-4">
          <span className="text-gray-700 block mb-2">Promo Code</span>
          <input type="text" placeholder="Enter Your Code" className="w-full p-2 border rounded "/>
          <button className="w-full bg-blue-500 text-white py-2 mt-2 rounded hover:bg-blue-600">Apply</button>
        </div>
        <div className="flex justify-between mt-4 text-lg font-semibold border-t pt-4">
          <span>Total Cost: </span>
          <span>${isNaN(total) ? 0 : total}</span>
        </div>
        <button className="w-full bg-green-500 to-white py-3 mt-4 rounded text-lg">CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
