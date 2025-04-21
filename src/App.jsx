import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Links } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import NavServices from './components/NavServices'
import Services from './components/Services'
import PropertyPage from './components/PropertyPage'
import Description from './components/Description'
import HouseDescription from "./components/HouseDescription";
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Contact from './components/Contact';
import About from './components/About';
import Blogs from './components/Blogs'
import LanguagesOpt from './components/LanguagesOpt';
import Currency from './components/Currency';
import { HelmetProvider} from 'react-helmet-async'

function App() {

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Nav />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/Services" element={<Services />} />
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
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App
