import React from "react";
import Dialog from "@mui/material/Dialog";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./ReferralPopup.scss";

function ReferralPopup() {
  return (
    <Dialog open={true} className="referral-popup">
      <div className="close-icon-div">
        <HighlightOffIcon />
      </div>
      <div className="close-icon-div"></div>
      <div className="close-icon-div-text">Enter referral code here</div>
      <input type="text" placeholder="Enter Code" />

      <button>Submit</button>
    </Dialog>
  );
}

export default ReferralPopup;
