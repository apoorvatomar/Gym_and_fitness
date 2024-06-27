import React, { useState } from "react";
import { Dumbbell, Menu, X, CircleUserRound, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ModalManager from "../Modal/manage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Diet",
      link: "/Diet", // Ensure the link is pointing to "/diet"
    },
    {
      name: "Music",
      link: "/Music",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              <Link
                to="/"
                className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative"
              >
                G<span className="text-xl font-bold text-gray-300">Y</span>M
                <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full  flex items-center space-x-2 "
                onClick={openModal}
              >
                <CircleUserRound className="w-7 h-7" />
                <p className="text-gray-0 text-lg font-medium hover:text-indigo-600 ease-out duration-700 pr-5 hover:text-indigo-100">
                  user
                </p>
              </button>

              <User isOpen={isOpen} onClose={closeModal} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const User = ({ isOpen, onClose }) => {
  const modalStyles = isOpen
    ? "fixed top-[15%] right-[6%] lg:w-[25%] md:w-[30%] sm:w-[90%] w-[95%] lg:h-[2vh] md:h-[2vh]  sm:h-[10vh] h-[13vh] bg-black bg-opacity-50 flex justify-center items-center z-50"
    : "hidden";

  return (
    <div className={modalStyles}>
      <div className="bg-[#1d1d1d] p-8 rounded-lg w-full h-auto relative">
        <h1 className=" text-2xl font-bold text-gray-200  flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-0 bg-black/20 rounded-t-md">
          {" "}
          <Dumbbell className="w-10 h-10 -rotate-45 text-indigo-600 " /> User{" "}
          <Target /> 50
        </h1>

        <button className="absolute top-0 right-1 p-1 " onClick={onClose}>
          <X className="text-indigo-600 "></X>
        </button>
        <ModalManager />
      </div>
    </div>
  );
};

export default Navbar;
