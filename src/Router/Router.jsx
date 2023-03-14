import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeDashboard from "../Components/HomeDashboard";
import OfferPage from "../Components/Offer";
import Profile from "../Components/Profile";
import WithdrawalDetail from "../Components/WithdrawalDetail/index";
import PrivateRoute from "./PrivateRoute";
const Router = () => {
  const isLoggedin = false;
  return (
    <Routes>
      <Route path="/" element={<HomeDashboard isLoggedin={isLoggedin} />} />
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
    </Routes>
  );
};

export default Router;
