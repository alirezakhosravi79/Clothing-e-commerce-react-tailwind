import React from "react";
import hero_img from "../assets/fashion1.jpg";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

function Hero() {
  return (
    <div className="h-screen flex flex-col items-center">
      {/* Top Section */}
      <div className="flex justify-between items-center px-24 gap-4 w-full max-w-screen-xl mt-16">
        <div className="max-w-1/2 mt-12">
          <h2 className="text-3xl font-semibold">Elevate Your Wardrobe</h2>
          <h1 className="text-6xl font-bold mt-3 leading-tight">Style That Speaks Fashion That Moves</h1>
          <p className="text-lg text-gray-600 mt-4">
            From everyday essentials to statement pieces, redefine your style
            with fashion that’s as bold and unique as you are.
          </p>
        </div>
        <div className="max-w-1/2">
          <img src={hero_img} alt="" className="w-[1-40px] h-[500px] object-contain"/>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-6 mt-10 w-4/5 max-w-screen-lg">
        {/* Free shipping */}
        <div className="flex gap-6 items-center">
          <FaShippingFast className="text-5xl text-red-500"/>
          <div>
            <h3 className="text-xl font-semibold">Free Shipping</h3>
            <p className="text-gray-600">Free shipping on orders</p>
          </div>
        </div>
        {/* 24/7 support */}
        <div className="flex gap-6 items-center">
          <BiSupport className="text-5xl text-red-500"/>
          <div>
            <h3 className="text-xl font-semibold">24/7 support</h3>
            <p className="text-gray-600">Full support during the process</p>
          </div>
        </div>
        {/* Secure payment */}
        <div className="flex gap-6 items-center">
          <MdPayment className="text-5xl text-red-500"/>
          <div>
            <h3 className="text-xl font-semibold">Secure Payment</h3>
            <p className="text-gray-600">Your payment is secure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
