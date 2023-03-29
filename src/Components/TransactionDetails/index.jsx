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
    <Dialog
      onClose={() => setOpenTransactionDetail(false)}
      open={openTransactionDetail}
      className="transaction-detail-main"
    >
      <div className="transaction-detail-close-div">
        <HighlightOffIcon onClick={() => setOpenTransactionDetail(false)} />
      </div>

      <div className="transaction-details-data">
        <div className="transaction-detail">Note: {details?.Note}</div>
      </div>
      <div className="transaction-details-data">
        <div className="transaction-detail">Remarks: {details?.Remarks}</div>
      </div>
    </Dialog>
  );
}

export default TransactionDetails;
