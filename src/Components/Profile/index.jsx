import React from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_top_sub">
          <Link to={"/"}>
          <ArrowCircleLeftIcon />
          </Link>
          <div className="profile_title">Profile</div>
        </div>
      </div>
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
        <div className="reward_refer">
          <div className="rewards">
            <EmojiEventsIcon sx={{ color: "white" }} />
            <div className="rewards_title">
              <div>Rewards Earned</div>
              <div>0</div>
            </div>
          </div>
          <div className="referred">
            <GroupAddOutlinedIcon sx={{ color: "white" }} />
            <div className="rewards_title">
              <div>Users Referred</div>
              <div>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
