import React, { useState } from "react";
import "./index.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CoinIcon from "../../assets/img/coins-icon.png";
import { MuiTelInput } from "mui-tel-input";
import { Link } from "react-router-dom";

function WalletTransfer() {
  const [value, setValue] = useState("+91");
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="wallet-transfer-main">
      <div className="wallet-transfer-head">
        <div className="wallet-transfer-title">
          <Link to={"/"}>
          <ArrowCircleLeftIcon />
          </Link>
          <div className="wallet-transfer_subtitle">Wallet Transfer</div>
        </div>
      </div>
      <div className="wallet-transfer-body">
        <div className="wallet-balance">
          <img src={CoinIcon} alt="coinicon" />
          <div className="wallet-balance-data">
            <div className="wallet-balance-data-title">WALLET BALANCE</div>
            <div className="wallet-balance-data-amount">0</div>
          </div>
        </div>
        <div className="wallet-transfer-details">
          <div className="wallet-transfer-details-balance">
            Transferable Balance: 0
            <hr />
          </div>
          <MuiTelInput
            required
            type="text"
            // id="standard-required"
            id="outlined-multiline-static"
            label="Reciever Phone Number"
            variant="standard"
            value={value}
            onChange={handleChange}
          />
          <input className="amount-input" type="number" placeholder="Amount" />
          <button className="transfer-button">Transfer</button>
        </div>
      </div>
    </div>
  );
}

export default WalletTransfer;
