import { useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Header from './components/Header'

import AboutMe from './pages/About';
import ContactMe from './pages/Contact';
import HomePage from './pages/Home';

function App() {
  const title = 'Emily Flores';



  return (
    <>
    <Header title={title}/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/contact" element={<ContactMe/>}/>
    </Routes>

    {/* <button onClick={handleClick}>See Projects</button> */}
  </>
  )
}

export default App

// const handleClick = (event) => {
//   console.log(event)
//   console.log('event')
// }