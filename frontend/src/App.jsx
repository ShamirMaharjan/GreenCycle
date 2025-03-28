import React, { useState } from "react";
import Signup from "./Page/Signup";
import Login from "./Page/Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./Page/User/HomePage";
import SchedulePage from "./Page/User/SchedulePage";
import HistoryPage from "./Page/User/HistoryPage";
import RewardPage from "./Page/User/RewardPage";
import ContactPage from "./Page/User/ContactPage";
import ViewPostPage from "./Page/User/ViewPostPage";
import AdminHomePage from "./Page/Admin/AdminHomePage";
import AddPostPage from "./Page/Admin/AddPostPage";
import EditPostPage from "./Page/Admin/EditPostPage";
import NoticePage from "./Page/Admin/NoticePage";
import TrafficePage from "./Page/Admin/TrafficePage";
import UsersPage from "./Page/Admin/UsersPage";
import GCHomePage from "./Page/GC/GCHomePage";
import PickUpPage from "./Page/GC/PickUpPage";
import LandingPage from "./Page/LandingPage";

function App() {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between Signup and Login

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup setIsSignup={setIsSignup} />} />
        <Route path="/login" element={<Login setIsSignup={setIsSignup} />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="/userHome" element={<HomePage />} />
        <Route path="/Schedule" element={<SchedulePage />} />
        <Route path="/userHisotry" element={<HistoryPage />} />
        <Route path="/Reward" element={<RewardPage />} />
        <Route path="/Contactus" element={<ContactPage />} />
        <Route path="/viewPost" element={<ViewPostPage />} />

        <Route path="/AdminHome" element={<AdminHomePage />} />
        <Route path="/addPost" element={<AddPostPage />} />
        <Route path="/editPost" element={<EditPostPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/traffic" element={<TrafficePage />} />
        <Route path="/users" element={<UsersPage />} />

        <Route path="/gcHome" element={<GCHomePage />} />
        <Route path="/pickup" element={<PickUpPage />} />



      </Routes>
    </div>
  );
}

export default App;
