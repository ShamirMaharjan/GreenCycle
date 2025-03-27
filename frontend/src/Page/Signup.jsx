import React from "react";
import logo from '../assets/logo.png'; // Import the logo image

const Signup = ({ setIsSignup }) => {
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
        <h2 className="text-center text-xl font-bold">SIGN UP</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          PLEASE FILL THE DETAILS TO COMPLETE SIGN UP
        </p>

        {/* Form Fields */}
        <form className="space-y-4">
          <input type="text" placeholder="USER NAME" className="input-field" />
          <input type="text" placeholder="ADDRESS" className="input-field" />
          <input type="text" placeholder="PHONE NUMBER" className="input-field" />
          <input type="email" placeholder="EMAIL" className="input-field" />
          <input type="password" placeholder="PASSWORD" className="input-field" />
          <select className="input-field">
            <option>CHOOSE A ROLE</option>
            <option value="user">User</option>
            <option value="garbage-collector">Garbage Collector</option>
            <option value="admin">Admin</option>
          </select>

          {/* Signup Button */}
          <button className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
            SIGNUP
          </button>
        </form>

        {/* Switch to Login Page */}
        <p className="mt-4 text-center text-sm">
          ALREADY HAVE AN ACCOUNT?{" "}
          <span
            onClick={() => setIsSignup(false)} // Switch to Login
            className="text-green-600 font-semibold cursor-pointer"
          >
            LOGIN NOW
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

export default Signup;
