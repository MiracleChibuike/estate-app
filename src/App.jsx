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
import ProfileEdit from './components/ProfileEdit'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Nav />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Description" element={<Description />} />
          <Route path="/HouseDescription" element={<HouseDescription />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} /> 
          <Route path='/EditProfile' element={<ProfileEdit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
