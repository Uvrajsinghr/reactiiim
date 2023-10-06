import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home.js'
import About from './About'
import Contact from './Contact'
export default function Myroute() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route  />



    </Routes>
    </BrowserRouter>
  )
}