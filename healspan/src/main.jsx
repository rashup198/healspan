import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<App></App>} />
      <Route path='/contact-us' element={<Contact></Contact>} />
      <Route path= "/about-us" element={<About></About>} />
      
    </Routes>
    
    </BrowserRouter>
)
