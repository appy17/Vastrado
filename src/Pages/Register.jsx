import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
     e.preventDefault();
     console.log(name, email, password);
  }

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 ">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm ">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium ">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 ">Hey there! </h2>
          <p className="text-center mb-6 ">
            Enter your username and password to Login
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="">
              Name
            </label>
            <input
              type="name"
              value={name}
              className="w-full p-2 border rounded"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="">
              Email
            </label>
            <input
              type="email"
              value={email}
              className="w-full p-2 border rounded"
              placeholder="Enter your Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="">
              Password
            </label>
            <input
              type="password"
              value={password}
              className="w-full p-2 border rounded"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 trasnsition"
          >
            SignIn
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt=""
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
