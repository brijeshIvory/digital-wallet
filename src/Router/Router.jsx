import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home/index'
import OfferPage from '../Components/Offer'
import Profile from '../Components/Profile'
const Router = () => {
  return (
    <Routes>
      <Route path="tabs/home" exact element={<Home />} />
      <Route path="tabs/offers" element={<OfferPage />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  )
}

export default Router