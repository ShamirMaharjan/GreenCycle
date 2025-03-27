import React from "react";
import logo from '../assets/logo.png';

const Login = ({ setIsSignup }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-green-500">
      {/* White container with green edges */}
      <div className="absolute inset-0 bg-white clip-path-custom"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
        <img src={logo} alt="Green Cycle Tech" style={{ height: '100px', width: 'auto' }} />
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-bold">LOGIN</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          ENTER YOUR CREDENTIALS TO LOGIN
        </p>

        {/* Form Fields */}
        <form className="space-y-4">
          <input type="email" placeholder="EMAIL" className="input-field" />
          <input type="password" placeholder="PASSWORD" className="input-field" />
          
          {/* Forgot Password */}
          <p className="text-blue-600 text-sm text-left cursor-pointer">
            FORGOT PASSWORD?
          </p>

          {/* Login Button */}
          <button className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
            LOGIN
          </button>
        </form>

        {/* Switch to Signup Page */}
        <p className="mt-4 text-center text-sm">
          NOT YET A MEMBER?{" "}
          <span
            onClick={() => setIsSignup(true)}
            className="text-green-600 font-semibold cursor-pointer"
          >
            SIGNUP NOW
          </span>
        </p>
      </div>

      {/* Custom Clip Path for Green Edges */}
      <style>{`
        .clip-path-custom {
          clip-path: polygon(10% 0, 90% 0, 100% 85%, 50% 100%, 0 85%); 
        }
        .input-field {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Login;
