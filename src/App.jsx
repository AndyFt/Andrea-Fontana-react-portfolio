import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/NavBar';
import { Contact, Custom404, Home, ProjectGallery } from './components/Pages';
import './App.css'

function App() {

  return (
    <Router basename='/Andrea-Fontana-react-portfolio'> 
      <MyNav />
      <Routes>
        <Route path='/portfolio' element={<ProjectGallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/404' element={<Custom404 />} />
        <Route path='' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
