import React from "react";
import "./index.scss";
import loginButton from "../../assets/img/loginButton.png";
import JoinNow from "../../assets/img/joinnow.png";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import Header from "../Header/index";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "../Register";
import Login from "../Login";
import {
  getCountriesData,
  GetWalletBalance,
} from "../../App/Redux/Actions/WalletActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetUserDetails } from "../../App/Redux/Actions/AuthActions";
import logo from "../../assets/img/insite-vision-logo-svg-vector.svg";
import { BsWhatsapp } from "react-icons/bs";
import Whatsapp from "../Whatsapp";
import { getAdvertisment } from "../../App/Redux/Actions/AdvertismentAction";

function NewHomePage() {
  const dispatch = useDispatch();
  const WalletBalance = useSelector(
    (state) => state?.wallet?.wallet_bal?.balance
  );
  const advertisement = useSelector(
    (state) => state?.advertisment?.advertisment
  );
  const loading = useSelector((state) => state?.advertisment?.isLoading);
  const UserToken = localStorage.getItem("UserToken");
  const isAuthenticated =
    UserToken !== "undefined" && UserToken !== null ? true : false;
  const userId =
    UserToken !== "undefined" && UserToken !== null
      ? JSON.parse(UserToken).user_id
      : undefined;

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
  const [openJoinNow, setOpenJoinNow] = useState({ bottom: false });
  const [openLogin, setOpenLogin] = useState({
    bottom: false,
  });
  const toggleJoinNowDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenJoinNow({ ...openJoinNow, [anchor]: open });
  };
  const toggleLoginDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenLogin({ ...openLogin, [anchor]: open });
  };
  useEffect(() => {
    dispatch(getCountriesData());
    dispatch(getAdvertisment());
  }, []);
  console.log(loading, "loading");
  return (
    <div className="new-home-page">
      <div className="new-home-page-topdiv">
        {isAuthenticated ? (
          <Header />
        ) : (
          <div className="loginReg_button">
            <img
              className="Joinnow_button"
              src={JoinNow}
              alt="JoinNow"
              onClick={toggleJoinNowDrawer("bottom", true)}
            />
            <img
              className="login_button"
              src={loginButton}
              alt="loginbutton"
              onClick={toggleLoginDrawer("bottom", true)}
            />
          </div>
        )}

        <Register
          open={openJoinNow["bottom"]}
          setOpenJoinNow={setOpenJoinNow}
        />
        <Login open={openLogin["bottom"]} setOpenLogin={setOpenLogin} />
        <div className="new-home-page-balance">
          {isAuthenticated ? (
            <>
              <div className="new-home-page-balance-title">Total Balance</div>
              <div className="new-home-page-balance-money">
                {WalletBalance ? WalletBalance : 0}
              </div>
            </>
          ) : (
            <>
              <div className="new-home-page-balance-money">
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "150px",
                    height: "90px",
                    borderRadius: "20px",
                    backgroundColor: "#01b0ff",
                  }}
                />
              </div>
            </>
          )}
        </div>
        <div className="new-home-page-buttons">
          <div className="new-home-page-button-main">
            <Link to={"withdrawal"}>
              <div className="new-home-page-button">
                <BiMoneyWithdraw />
              </div>
            </Link>
            <div className="new-home-page-button-title">WITHDRAW</div>
          </div>
          <div className="new-home-page-button-main">
            <Link to={"deposit"}>
              <div className="new-home-page-button">
                <RiLuggageDepositLine />
              </div>
            </Link>
            <div className="new-home-page-button-title">DEPOSIT</div>
          </div>
          <div className="new-home-page-button-main">
            <Link to={"third-party"}>
              <div className="new-home-page-button">
                <AiOutlineTransaction />
              </div>
            </Link>
            <div className="new-home-page-button-title">THIRD PARTY</div>
          </div>
        </div>
      </div>
      <div className="new-home-page-buttom">
        {isAuthenticated && (
          <div className="new-home-page-whatsapp-buttons">
            <a href="https://api.whatsapp.com/send?phone=12244546410">
              <div className="new-home-page-button-main">
                <div className="new-home-page-whatsapp">ID WITHDRAW</div>
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=13043156185">
              <div className="new-home-page-button-main">
                <div className="new-home-page-whatsapp">ID DEPOSIT</div>
              </div>
            </a>
          </div>
        )}
        <div className="new-home-page-advertisment">
          {!loading ? (
            <>
              <div className="new-home-page-advertisment-line">
                USERNAME: {advertisement?.data?.username}
              </div>

              <div className="new-home-page-advertisment-line">
                <a href={"https://" + advertisement?.data?.url}>
                  URL: {advertisement?.data?.url}
                </a>
              </div>
              <div className="new-home-page-advertisment-line">
                PASS: {advertisement?.data?.pass}
              </div>
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
      <Whatsapp />
    </div>
  );
}

export default NewHomePage;
