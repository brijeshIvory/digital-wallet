import React from "react";
import { Routes, Route } from "react-router-dom";
import OfferPage from "../Components/Offer";
import ReferAndEarn from "../Components/PrivacyAndTearm/ReferAndEarn";
import Profile from "../Components/Profile";
import WithdrawalDetail from "../Components/WithdrawalDetail/index";
import PrivateRoute from "./PrivateRoute";
import Withdrawal from "../Components/Withdrawal";
import Deposit from "../Components/Deposit";
import DepositPayment from "../Components/Deposit/DepositPayment";
import NewHomePage from "../Components/NewHomePage";
import Passbook from "../Components/Passbook";
import { useEffect } from "react";
import ThirdPartyTransaction from './../Components/3rdPartyTransaction/index';
const Router = () => {
  const token = localStorage.getItem("token");

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
        path="bank-details/:coins"
        element={
          <PrivateRoute>
            <WithdrawalDetail />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="withdrawal"
        element={
          <PrivateRoute>
            <Withdrawal />
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
        <Route
        path="third-party"
        element={
          <PrivateRoute>
            <ThirdPartyTransaction />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
