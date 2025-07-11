import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Links } from 'react-router-dom'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavServices from "./components/NavServices";
import Services from "./components/Services";
import PropertyPage from "./components/PropertyPage";
import Description from "./components/Description";
import HouseDescription from "./components/HouseDescription";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProfileEdit from "./components/ProfileEdit";
import Contact from "./components/Contact";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Agents from "./components/Agents";
import LanguagesOpt from "./components/LanguagesOpt";
import Currency from "./components/Currency";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import PropertyAlerts from "./components/PropertyAlerts";
import { HelmetProvider } from "react-helmet-async";
import LogOut from "./components/LogOut";
import AuthGuard from "./components/AuthGuard"; // This component is a protect route to check users signed in

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Nav />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/footer" element={<Footer />} />
            <Route
              path="/Services"
              element={
                <AuthGuard>
                  <Services />
                </AuthGuard>
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/Description" element={<Description />} />
            <Route path="/HouseDescription" element={<HouseDescription />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/EditProfile" element={<ProfileEdit />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Langs" element={<LanguagesOpt />} />
            <Route path="/Currency" element={<Currency />} />
            <Route path="/Agents" element={<Agents />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Properties" element={<PropertyAlerts />} />
            <Route path="/LogOut" element={<LogOut />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
