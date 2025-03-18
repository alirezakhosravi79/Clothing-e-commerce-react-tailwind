import React, { useState, useEffect, useContext } from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

function Navbar() {

  const {itemAmount} = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
        } px-24
        flex justify-between items-center`}
      >
        <div className="text-2xl font-bold">Claire Collection</div>
        <ul className="flex space-x-6 text-lg font-semibold uppercase">
          <li className="cursor-pointer hover:text-gray-500 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-500 transition">
            Products
          </li>
          <li className="cursor-pointer hover:text-gray-500 transition">
            Contact
          </li>
          <li className="cursor-pointer hover:text-gray-500 transition">
            Use App
          </li>
        </ul>
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <BiCart className=" text-3xl cursor-pointer" />
            {itemAmount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 to-white text-sm h-5 w-5 flex items-center justify-center rounded-full">{itemAmount}</span>
            )}
          </Link>
          <BiUser className="text-3xl cursor-pointer" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
