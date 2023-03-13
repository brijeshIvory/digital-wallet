import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home/index'
import OfferPage from '../Components/Offer'
import Profile from '../Components/Profile'
import WithdrawalDetail from '../Components/WithdrawalDetail/index'
const Router = () => {
  return (
    <Routes>
      <Route path="tabs/home" exact element={<Home />} />
      <Route path="tabs/offers" element={<OfferPage />} />
      <Route path="profile" element={<Profile />} />
      <Route path='bank-details' element={<WithdrawalDetail/>}></Route>
    </Routes>
  )
}

export default Router