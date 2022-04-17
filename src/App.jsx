import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
