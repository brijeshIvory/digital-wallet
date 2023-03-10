import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Navbar from "../Navbar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./index.scss";

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="home_header">
      <MenuOpenIcon onClick={() => setOpen(true)} />
      <Navbar open={open} setOpen={setOpen} />
      <div className="home_headerRight">
        <AccountBalanceIcon sx={{ marginRight: "0.5rem" }} />
        <NotificationsIcon />
      </div>
    </div>
  );
}

export default Header;
