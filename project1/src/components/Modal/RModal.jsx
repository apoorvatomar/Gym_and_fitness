import React, { useState } from "react";
import { Dumbbell, X } from "lucide-react";
import Label from "../../components/Label/Label";
import Input from "../../components/Form/Input";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
import { useAuth } from "../../store/auth";

const RModal = ({ isOpen, onClose, openLoginModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    age: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("Registration successful");
        setUser({ username: "", email: "", phone: "", age: "", password: "" });
        storeTokenInLS(responseData.token);
        onClose();
      } else {
        console.log("Error inside response ", "error");
        alert("Error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Error", error);
    }
  };

  const modalStyles = isOpen
    ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
    : "hidden";

  return (
    <div className={modalStyles}>
      <div className="bg-[#1d1d1d] p-8 rounded-lg lg:w-[70%] md:w-[70%] sm:w-[90%] w-[95%] h-auto relative">
        <h1 className="text-2xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-0 bg-black/20 rounded-t-md">
          <Dumbbell className="w-10 h-10 -rotate-45 text-indigo-600" /> Register
        </h1>
        <button className="absolute top-0 right-1 p-1" onClick={onClose}>
          <X className="text-indigo-600" />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="w-full h-auto flex items-end justify-center bg-black rounded-md lg:gap-x-5 md:gap-x-5 sm:gap-x-3 gap-x-2 lg:py-5 md:py-5 sm:py-10 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap mt-5">
            <div className="w-full h-auto px-5">
              <Label htmlFor="username">Name</Label>
              <Input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Enter your Name"
                className="h-8"
                required
                autoComplete="off"
              />
            </div>
            <div className="w-full h-auto px-5">
              <Label htmlFor="email">Email ID</Label>
              <Input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your Email ID"
                className="h-8"
              />
            </div>
            <div className="w-full h-auto px-5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="number"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Enter your Phone Number"
                className="h-8"
              />
            </div>
            <div className="w-full h-auto px-5">
              <Label htmlFor="age">Age</Label>
              <Input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInput}
                placeholder="Enter your Age"
                className="h-8"
              />
            </div>
            <div className="w-full h-auto px-5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your Password"
                className="h-8"
              />
            </div>

            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
              <SecondaryBtn
                type="submit"
                className="w-full h-11 justify-center"
              >
                Submit
              </SecondaryBtn>
            </div>
            <div className="lg:w-[10%] md:w-[20%] sm:w-[20%] h-auto p-2">
              <SecondaryBtn
                type="button"
                className="w-full h-11 justify-center"
                onClick={() => {
                  onClose();
                  openLoginModal();
                }}
              >
                Login
              </SecondaryBtn>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RModal;
