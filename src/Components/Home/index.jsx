import React from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Navbar from "../Navbar";

function Home() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="home_container">
      <div className="home_header">
        <Avatar onClick={() => setOpen(true)} />
        <Navbar open={open} setOpen={setOpen} />
        <div className="home_headerRight">
          <AccountBalanceIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;
