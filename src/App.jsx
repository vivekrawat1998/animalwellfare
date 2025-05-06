import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Navbar from './components/header/Navbar'
import Hompage from './components/homepage/Hompage'
import Layout from './components/Layout/Layout'
import ServiceMainpage from './components/servicepage/ServiceMainpage'
import Gallery from './components/gallery/Gallery'
import Team from './components/team/Team'
import Contactus from './components/contactus/Contactus'
import DonatePopup from './components/ui/Popup'
import DonateNow from './components/Donatepage'
import ScrollToTop from './components/ui/Scrolltotop'
function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hompage />} />
          <Route path='/service' element={<ServiceMainpage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/donate' element={<DonateNow />} />
        </Route>
      </Routes>
      <DonatePopup />
    </>
  )
}

export default App
