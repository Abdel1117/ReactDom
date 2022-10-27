import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Compenents/NavBar'
import Home from './Pages/Home/Home'
import ArrayState from "./Pages/ArrayState/ArrayState"
import User from './Pages/Users/Users'
import LifesCycles from './Pages/LifeCycles/LifesCycles'
import Films from './Pages/Films/Films'
import Converter from './Pages/Converter/Converter'
import Carousel from './Pages/Carousel/Carousel'
import Borne from './Pages/Borne/Borne'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArrayState" element={<ArrayState />} />
        <Route path="/Users" element={<User />} />
        <Route path="/LifesCycles" element={<LifesCycles />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/Converter" element={<Converter />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/Borne" element={<Borne />} />
      </Routes>
    </>
  )
}

export default App
