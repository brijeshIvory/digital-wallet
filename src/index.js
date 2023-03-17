import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./App/Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer 
          autoClose={2000} 
          hideProgressBar 
          position="bottom-center"
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            width: "200px",
            height: "68px",
            borderRadius: "12px",
            boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.08)",
            fontFamily: "Roboto",
            color: "#fff",
            letterSpacing: "normal",
            lineHeight: "1.75",
            fontStyle: "normal",
            fontStretch: "normal",
            fontWeight: "500",
            fontSize : "16px",
            margin: "0px 0px 1rem 5rem",
          }}
        />

    </BrowserRouter>
  </Provider>
);
