import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OfferPage from '../Components/Offer'
import ReferAndEarn from '../Components/PrivacyAndTearm/ReferAndEarn'
import Profile from '../Components/Profile'
import WithdrawalDetail from '../Components/WithdrawalDetail/index'
import PrivateRoute from './PrivateRoute'
import WalletTransfer from '../Components/WalletTransfer/'
import Deposit from '../Components/Deposit'
import DepositPayment from '../Components/Deposit/DepositPayment'
import NewHomePage from '../Components/NewHomePage'
import Passbook from '../Components/Passbook'
const Router = () => {
  const isLoggedin = true
  return (
    <Routes>
      <Route path="/" element={<NewHomePage isLoggedin={isLoggedin} />} />
      <Route
        path="tabs/offers"
        exact
        element={
          <PrivateRoute>
            <OfferPage />
          </PrivateRoute>
        }
      />
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="bank-details"
        element={
          <PrivateRoute>
            <WithdrawalDetail />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="wallet-to-wallet"
        element={
          <PrivateRoute>
            <WalletTransfer />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="refer-and-earn"
        element={
          <PrivateRoute>
            <ReferAndEarn />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="deposit"
        element={
          <PrivateRoute>
            <Deposit />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="choose-payment-method/:coins"
        element={
          <PrivateRoute>
            <DepositPayment />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="tabs/reports"
        element={
          <PrivateRoute>
            <Passbook />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  )
}

export default Router
