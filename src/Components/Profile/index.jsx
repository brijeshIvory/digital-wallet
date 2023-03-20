import React from "react";
import "./index.scss";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Profile() {
  const userDetail = useSelector((state)=>state?.user.userDetail)
  console.log(userDetail,"userDetail")
  return (
    <div className="profile_main">
    <div className="profile_head">
      <div className="profile_title">
        <Link to={'/'}>
          <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
        </Link>
        <div className="profile_subtitle">Profile</div>
      </div>
    </div>


    <div className="profile_body">
      <div className="profile_details">
      <div className="profile_bottom">
        <Avatar className="profile_avatar" />
        {/* <button className="logout">
          <div style={{ marginRight: "1rem" }}>Logout</div>
          <LogoutIcon />
        </button> */}
        <div className="profile_name">{userDetail?.name}</div>
        <div className="profile_data">+{userDetail?.phone}</div>
        <button className="changePassword">Change Password</button>

        <div className="profile_data">Member Since 10 March 2023</div>
        {/* <div className="reward_refer">
          <div className="rewards">
            <EmojiEventsIcon sx={{ color: "white", width: '40px', height: '35px' }}/>
            <div className="rewards_title">
              <div>Rewards Earned</div>
              <div className="coin">0</div>
            </div>
          </div>
          <div className="referred">
            <GroupAddOutlinedIcon sx={{ color: "white", width: '40px', height: '35px' }} />
            <div className="rewards_title">
              <div>Users Referred</div>
              <div className="coin">0</div>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  </div>
  );
}

export default Profile;
