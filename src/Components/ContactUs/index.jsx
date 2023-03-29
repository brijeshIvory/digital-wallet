import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactDetails } from "../../App/Redux/Actions/ContactActions";
import { Divider } from "@mui/material";

function ContactUS() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state?.contactDetails?.details?.data);

  useEffect(() => {
    dispatch(getContactDetails());
  }, []);
  return (
    <div className="contactus_main">
      <div className="contactus_head">
        <div className="contactus_title">
          <Link to={"/"}>
            <ArrowCircleLeftIcon sx={{ width: "40px", height: "35px" }} />
          </Link>
          <div className="contactus_subtitle">Contact Us</div>
        </div>
      </div>

      <div className="contactus_body">
        <div className="contactus_details">
          <a href="mailto:test@test.com">
            <EmailOutlinedIcon />
            <div>{details?.email}</div>
          </a>
        </div>
        <div className="contactus_text">
          If you have any query, click on above mail ID to mail us.
        </div>
        <Divider sx={{ backgroundColor: "#fff", margin: "2.5rem" }} />
        <div className="term_title">Term & Condition</div>
        <div className="contactus_text">
          {details !== undefined && details["Term & Condition"]}
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
