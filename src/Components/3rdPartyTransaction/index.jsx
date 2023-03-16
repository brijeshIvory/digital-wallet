import React from "react";
import Dialog from "@mui/material/Dialog";
import "./index.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function ThirdPartyTransaction() {
  return (
    <Dialog onClose={() => {}} open={true} className="third-party-transaction">
      <div className="close-icon-div">
        <HighlightOffIcon onClick={() => {}} />
      </div>
      <div className="close-icon-div-text">Enter Details for transaction</div>
      <input type="text" placeholder="Enter Id" />
      <input type="number" placeholder="Enter Amount" />

      <button>Submit</button>
    </Dialog>
  );
}

export default ThirdPartyTransaction;
