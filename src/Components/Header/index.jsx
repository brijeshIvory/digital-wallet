import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Navbar from "../Navbar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.scss";

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="home_header">
      <div className="home_header_menuicon">
        <MenuIcon
          onClick={() => setOpen(true)}
          sx={{ width: "35px", height: "35px" }}
        />
      </div>
      <Navbar open={open} setOpen={setOpen} />
    </div>
  );
}

export default Header;
