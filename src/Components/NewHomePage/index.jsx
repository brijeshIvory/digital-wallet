import React from "react";
import "./index.scss";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

function NewHomePage() {
  return (
    <div className="new-home-page">
      <div className="new-home-page-topdiv">
        <div className="new-home-page-header">
          <div className="new-home-page-header-avatar">
            <RxAvatar />
          </div>
          <div>
            <div>Hello,</div>
            <h3>USER USER</h3>
          </div>
        </div>
        <div className="new-home-page-balance">
          <div className="new-home-page-balance-title">Total Balance</div>
          <div className="new-home-page-balance-money">50000</div>
        </div>
        <div className="new-home-page-buttons">
          <div className="new-home-page-button-main">
            <div className="new-home-page-button">
              <BiMoneyWithdraw />
            </div>
            <div className="new-home-page-button-title">WITHDRAW</div>
          </div>
          <div className="new-home-page-button-main">
            <div className="new-home-page-button">
              <RiLuggageDepositLine />
            </div>
            <div className="new-home-page-button-title">DEPOSIT</div>
          </div>
          <div className="new-home-page-button-main">
            <div className="new-home-page-button">
              <AiOutlineTransaction />
            </div>
            <div className="new-home-page-button-title">THIRD PARTY</div>
          </div>
        </div>
      </div>

      <div className="latest-transaction">
        <div className="latest-transaction-title">
          <div>Latest Transaction</div>
          <div>See All</div>
        </div>
      </div>
    </div>
  );
}

export default NewHomePage;
