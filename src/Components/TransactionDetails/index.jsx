import React from "react";
import Dialog from "@mui/material/Dialog";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./index.scss";

function TransactionDetails({
  setOpenTransactionDetail,
  openTransactionDetail,
  details,
}) {
  const detail = details?.Note.split(",");

  return (
    <Dialog className="transaction-detail-main" open={openTransactionDetail}>
      <div className="transaction-detail-close-div">
        <HighlightOffIcon onClick={() => setOpenTransactionDetail(false)} />
      </div>

      <div className="transaction-details-data">
        <div className="transaction-detail">Date: {details?.Date}</div>
        <div className="transaction-detail">Deposit: {details?.Deposit}</div>
        <div className="transaction-detail">WithDraw: {details?.Withdraw}</div>
        <div className="transaction-detail">Balance: {details?.Balance}</div>
        <div className="other-details">
          <div className="transaction-detail">Other Details :</div>
          {detail?.map((ele, idx) => (
            <div key={idx}>{ele}</div>
          ))}
        </div>
      </div>
    </Dialog>
  );
}

export default TransactionDetails;
