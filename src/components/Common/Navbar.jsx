import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import CardDrawer from "../Layout/CardDrawer";
import { IoMdClose } from "react-icons/io";
import imgLogo from "../../assets/Vastrado_Logo_1a-01_1.webp";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCardDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav
        className="container mx-auto flex item-center justify-between py-4 px-6  overflow-x-hidden"
        style={{ marginLeft: "61px" }}
      >
        {/* left logo */}

        <div className="hidden md:flex space-x-6">
          <Link
            to="/collection/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* center Navigation */}

        <div className="flex justify-center sm:justify-center  space-x-6 text-center ">
          <Link to="/" className="text-2xl font-medium">
            <img src={imgLogo} className="" />
          </Link>
        </div>

        {/* right section */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-2 flex justify-around items-center md:static md:border-0 md:p-0 md:justify-end md:space-x-4 md:w-auto">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            onClick={toggleCardDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          <div className="overflow-hidden hidden md:block">
            <Searchbar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CardDrawer drawerOpen={drawerOpen} toggleCardDrawer={toggleCardDrawer} />
      {/* Mobile Navigation  */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600 " />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
