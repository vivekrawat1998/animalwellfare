import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from './components/header/Navbar'
import Hompage from './components/homepage/Hompage'
import Layout from './components/Layout/Layout'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hompage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
