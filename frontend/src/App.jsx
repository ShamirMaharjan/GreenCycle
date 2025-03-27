import React, { useState } from "react";
import Signup from "./Page/Signup";
import Login from "./Page/Login";

function App() {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between Signup and Login

  return (
    <div>
      {/* Conditional Rendering based on isSignup state */}
      {isSignup ? (
        <Signup setIsSignup={setIsSignup} />
      ) : (
        <Login setIsSignup={setIsSignup} />
      )}
    </div>
  );
}

export default App;
