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
import logo from "../../assets/img/newlogo.png";
import { BsWhatsapp } from "react-icons/bs";
import Whatsapp from "../Whatsapp";
import { getAdvertisment } from "../../App/Redux/Actions/AdvertismentAction";
import { getContactDetails } from "../../App/Redux/Actions/ContactActions";
import withdrawIcon from "../../assets/img/withdraw (1).png";
import depositIcon from "../../assets/img/deposit (1).png";
import thirdparty from "../../assets/img/third-party.png";
import RefreshIcon from "@mui/icons-material/Refresh";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import { toast } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function NewHomePage() {
  const dispatch = useDispatch();
  const [notation, setNotation] = useState(false);
  const WalletBalance = useSelector(
    (state) => state?.wallet?.wallet_bal?.balance
  );
  const advertisement = useSelector(
    (state) => state?.advertisment?.advertisment
  );
  const details = useSelector((state) => state?.contactDetails?.details?.data);
  const loading = useSelector((state) => state?.advertisment?.isLoading);

  const UserToken = localStorage.getItem("UserToken");
  const isAuthenticated =
    UserToken !== "undefined" && UserToken !== null ? true : false;
  const userId =
    UserToken !== "undefined" && UserToken !== null
      ? JSON.parse(UserToken).user_id
      : undefined;

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
    dispatch(getContactDetails());
    // setTimeout(() => {
    //   setNotation(true);
    // }, 3000);
  }, []);

  const handleRefresh = () => {
    dispatch(GetWalletBalance({ user_id: userId }));
    toast("Balance updated...");
  };

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

              <RefreshIcon onClick={handleRefresh} className="refreshIcon" />
              {/* {notation && (
                <div className="notationIcon">
                  <NorthWestIcon />
                  <div>Click here</div>
                </div>
              )} */}
            </>
          ) : (
            <div className="new-home-page-balance-money">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "100px",

                  borderRadius: "20px",
                  backgroundColor: "#01b0ff",
                }}
              />
            </div>
          )}
        </div>

        <div className="new-home-page-buttons">
          <div className="new-home-page-button-main">
            <Link to={"withdrawal"}>
              <div className="new-home-page-button">
                {/* <BiMoneyWithdraw /> */}
                <img src={withdrawIcon} alt="withdraw" />
              </div>
            </Link>
            <div className="new-home-page-button-title">WITHDRAW</div>
          </div>
          <div className="new-home-page-button-main">
            <Link to={"deposit"}>
              <div className="new-home-page-button">
                {/* <RiLuggageDepositLine /> */}
                <img src={depositIcon} alt="withdraw" />
              </div>
            </Link>
            <div className="new-home-page-button-title">DEPOSIT</div>
          </div>
          <div className="new-home-page-button-main">
            <Link to={"third-party"}>
              <div className="new-home-page-button">
                {/* <AiOutlineTransaction /> */}
                <img src={thirdparty} alt="withdraw" />
              </div>
            </Link>
            <div className="new-home-page-button-title">THIRD PARTY</div>
          </div>
        </div>
      </div>

      <div className="new-home-page-bottom">
        {isAuthenticated && (
          <div className="new-home-page-whatsapp-buttons">
            <div style={{ flex: 1 }}>
              <a
                href={`https://api.whatsapp.com/send?phone=${
                  details !== undefined && details["Withdrawal Number"]
                }`}
              >
                <div className="button-83">ID WITHDRAW</div>
              </a>
            </div>
            <div style={{ flex: 1 }}>
              <a
                href={`https://api.whatsapp.com/send?phone=${
                  details !== undefined && details["Deposit Number"]
                }`}
              >
                <div className="button-83">ID DEPOSIT</div>
              </a>
            </div>
          </div>
        )}
        {/* <div className="new-home-page-advertisment"> */}
        {!loading ? (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            showStatus={false}
            infiniteLoop={true}
            showArrows={false}
          >
            {advertisement &&
              advertisement?.data.map((adv) => {
                return (
                  <div className="new-home-page-advertisment">
                    {adv.id === 1 ? (
                      <div className="new-home-page-advertisment-content">
                        <div className="new-home-page-advertisment-title-main">
                          <div className="new-home-page-advertisment-line">
                            USERNAME:
                          </div>
                          <div className="new-home-page-advertisment-line">
                            LINK:
                          </div>
                          <div className="new-home-page-advertisment-line">
                            PASSWORD:
                          </div>
                        </div>
                        <div>
                          <div className="new-home-page-advertisment-line-value">
                            {adv?.username}
                          </div>
                          <div className="new-home-page-advertisment-line-value">
                            <a href={"https://" + adv?.url}>{adv?.url}</a>
                          </div>
                          <div className="new-home-page-advertisment-line-value">
                            {adv?.pass}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="new-home-page-advertisment-contentx"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 15,
                          backgroundSize: "cover",
                          backgroundImage: `url(${
                            process.env.REACT_APP_UPLOAD_URL_AWS + adv.image
                          })`,
                        }}
                      >
                        {/* <div
                          style={{
                            backgroundColor: "red",
                            display: "flex",
                            flex: 1,
                          }}
                        >
                          <img
                            src={
                              process.env.REACT_APP_UPLOAD_URL_AWS + adv.image
                            }
                            style={{
                              objectFit: "fill",

                              maxWidth: "80%",
                            }}
                            alt="poster"
                          />
                        </div> */}
                      </div>
                    )}
                  </div>
                );
              })}
          </Carousel>
        ) : (
          <div className="homepage-carousel-loading">Loading...</div>
        )}
        {/* </div> */}
      </div>
      <Whatsapp details={details} />
    </div>
  );
}

export default NewHomePage;
