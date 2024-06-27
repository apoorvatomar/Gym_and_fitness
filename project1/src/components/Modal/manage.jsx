import React, { useState } from "react";
import LModal from "./LModal";
import RModal from "./RModal";
import { useAuth } from "../../store/auth";
import { NavLink } from "react-router-dom";

const ModalManager = () => {
  const { isLoggedIn } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div>
      <div className="w-full h-auto flex items-end justify-center bg-black rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2  lg:py-5 md:py-5 sm:py-10 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap mt-5 ">
        {isLoggedIn ? (
          <div className="lg:w-[50%] md:w-[50%] sm:w-[50%] w-full h-10  text-base text-indigo-600 bg-indigo-600/5 font-medium  rounded flex items-center border border-indigo-600 gap-x-1 hover:border-indigo-600/70 hover:bg-indigo-600/10 ease-out duration-500  text-base fon-medium uppercase justify-center">
            <NavLink
              className="w-full h-11 justify-center text-center m-auto lg:pt-[6%] md:pt-[6%] sm:pt-[2%] pt-[2%]"
              to="/logout"
            >
              Logout
            </NavLink>
          </div>
        ) : (
          <>
            <div className="lg:w-[40%] md:w-[40%] sm:w-[50%] w-full h-10  text-base text-indigo-600 bg-indigo-600/5 font-medium  rounded flex items-center border border-indigo-600 gap-x-1 hover:border-indigo-600/70 hover:bg-indigo-600/10 ease-out duration-500  text-base fon-medium uppercase justify-center">
              <button
                className="w-full h-11 justify-center"
                onClick={openLoginModal}
              >
                Login
              </button>
            </div>
            <div className="lg:w-[40%] md:w-[40%] sm:w-[50%] w-full h-10  text-base text-indigo-600 bg-indigo-600/5 font-medium  rounded flex items-center border border-indigo-600 gap-x-1 hover:border-indigo-600/70 hover:bg-indigo-600/10 ease-out duration-500  text-base fon-medium uppercase justify-center">
              <button
                className="w-full h-11 justify-center"
                onClick={openRegisterModal}
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>

      <LModal
        isOpen={isLoginOpen}
        onClose={closeLoginModal}
        openRegisterModal={() => {
          closeLoginModal();
          openRegisterModal();
        }}
      />
      <RModal
        isOpen={isRegisterOpen}
        onClose={closeRegisterModal}
        openLoginModal={() => {
          closeRegisterModal();
          openLoginModal();
        }}
      />
    </div>
  );
};

export default ModalManager;
