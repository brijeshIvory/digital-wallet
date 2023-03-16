import React from "react";
import "./index.scss";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

function NewHomePage() {
  const data = [
    {
      to: "Party1",
      amount: "+78",
      Date: "02/03/2023",
    },
    {
      to: "Party2",
      amount: "+89",
      Date: "15/02/2023",
    },
    {
      to: "Party3",
      amount: "+97",
      Date: "25/02/2023",
    },
    {
      to: "Party4",
      amount: "+63",
      Date: "28/01/2023",
    },
  ];
  return (
    <div className="new-home-page">
      <div className="new-home-page-topdiv">
        <div className="new-home-page-header">
          <div>
            <div>Hello,</div>
            <div style={{ marginTop: "0.5rem", fontWeight: 700 }}>
              USER USER
            </div>
          </div>
          <div className="new-home-page-header-avatar">
            <RxAvatar />
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
          <div>Latest Transactions</div>
          <div style={{ color: "#595858" }}>See All</div>
        </div>
        <div className="latest-transaction-data">
          {data.map((ele) => (
            <div className="latest-transaction-single-data">
              <div>
                <div className="latest-transaction-date">{ele.Date}</div>
                <div className="latest-transaction-party">{ele.to}</div>
              </div>
              <div>{ele.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewHomePage;
