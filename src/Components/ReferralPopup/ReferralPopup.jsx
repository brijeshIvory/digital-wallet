import React from "react";
import Dialog from "@mui/material/Dialog";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./ReferralPopup.scss";
import { useState } from "react";

function ReferalCodeDialog({ openPopUp, setOpenPopUp, setReferralCode }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <Dialog open={openPopUp} className="referral-popup">
      <div className="close-icon-div"></div>
      <div className="close-icon-div-text">Do You Have Any Referral Code</div>
      <input
        type="text"
        placeholder="Referral Code"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="code_button_div">
        <button
          type="submit"
          className="code_button"
          onClick={() => {
            setOpenPopUp(false);
            setReferralCode(inputValue);
          }}
        >
          Submit
        </button>
        <button
          type="submit"
          className="code_button"
          onClick={() => setOpenPopUp(false)}
        >
          Skip
        </button>
      </div>
    </Dialog>
  );
}

export default ReferalCodeDialog;
