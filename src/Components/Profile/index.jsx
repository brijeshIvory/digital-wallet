import React from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
  return (
    <div className="profile">
      <div className="profile_top"></div>
      <div className="profile_bottom">
        <Avatar className="profile_avatar" />
        <button className="logout">
          <div style={{ marginRight: "1rem" }}>Logout</div>
          <LogoutIcon />
        </button>
        <div className="profile_name">Person Name</div>
        <div className="profile_data">+919776656552</div>
        <button className="changePassword">Change Password</button>

        <div className="profile_data">Member Since 10 March 2023</div>
      </div>
    </div>
  );
}

export default Profile;
