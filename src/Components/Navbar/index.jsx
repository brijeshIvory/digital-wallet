import Drawer from "@mui/material/Drawer";
import "./index.scss";
// import Navlogo from "../../assets/img/Navlogo.jpg";
import Divider from "@mui/material/Divider";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import OutputIcon from "@mui/icons-material/Output";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArticleIcon from "@mui/icons-material/Article";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Link } from "react-router-dom";

function Navbar({ open, setOpen }) {
  const list1 = [
    {
      name: "Profile",
      link: "profile",
      icon: <PersonOutlineIcon />,
    },
    {
      name: "Withdrawal Details",
      link: "bank-details",
      icon: <OutputIcon />,
    },
    // {
    //   name: "Wallet to Wallet Transfer",
    //   link: "wallet-to-wallet",
    //   icon: <MoveDownIcon />,
    // },
    {
      name: "PassBook",
      link: "tabs/reports",
      icon: <PersonAddAlt1Icon />,
    },
    {
      name: "Notifications",
      link: "notification",
      icon: <NotificationsNoneIcon />,
    },
    {
      name: "Are You Interested to be partner?",
      link: "concern-list",
      icon: <HelpIcon />,
    },
    // {
    //   name: "Refer & Earn",
    //   link: "refer-and-earn",
    //   icon: <AttachMoneyIcon />,
    // },
    // {
    //   name: "Terms",
    //   link: "terms",
    //   icon: <ArticleIcon />,
    // },
  ];

  const list2 = [

    {
      name: "Logout",
      link: "./profile",
      icon: <LogoutIcon />,
    },
  ];
  return (
    <Drawer open={open} className="navbar">
      <div className="navbar_header">
        {/* <img src={Navlogo} alt="navlogo" /> */}
        <div className="navbar_logo">
          <h2>Logo</h2>
          <ArrowCircleLeftOutlinedIcon
            onClick={() => setOpen(false)}
            sx={{ width: "30px", height: "30px" }}
          />
        </div>

        <div className="navbar_monumber">+917867854445</div>
        <Divider />
        <div className="walletBalancetitle">Wallet Balance</div>
        <div className="walletBalance">0</div>
      </div>
      <div className="navbar_body">
        <div>
          {list1.map((obj) => (
            <Link to={obj.link} key={obj.name}>
              <div className="list">
                <div>{obj.icon}</div>
                <p>{obj.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <Divider />
          {list2.map((obj) => (
            <Link to={obj.link} key={obj.name}>
              <div className="list">
                <div>{obj.icon}</div>
                <p>{obj.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default Navbar;
