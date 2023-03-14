import React from "react";
import Dialog from "@mui/material/Dialog";
import "./index.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function ForgotPassword({ setOpenForgotPassPopup, openForgotPassPopup }) {
  return (
    <Dialog
      onClose={() => setOpenForgotPassPopup(false)}
      open={openForgotPassPopup}
      className="forgot-password"
    >
      <div className="close-icon-div">
        <HighlightOffIcon onClick={() => setOpenForgotPassPopup(false)} />
      </div>
      <div className="close-icon-div-text">
        Enter email address to verify and generate new password...
      </div>
      <input type="email" placeholder="Enter Email" />
      <button>Submit</button>
    </Dialog>
  );
}

export default ForgotPassword;
