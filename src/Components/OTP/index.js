import React from "react";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { emptyUser } from "../../App/Redux/Actions/AuthActions";
import { useState } from "react";
import { useEffect } from "react";
import { sendOtp } from "../../App/Redux/Actions/AuthActions";

function Otp() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data?.data?.data);

  useEffect(() => {
    if (user) {
      setOpen(true);
      dispatch(sendOtp(user?.email));
    } else {
      setOpen(false);
    }
  }, [user]);
  return (
    <Dialog open={open} className="forgot-password">
      <div className="close-icon-div-text">
        Enter the OTP sent to your email id..
      </div>
      <input type="number" placeholder="Enter OTP" />
      <button onClick={() => dispatch(emptyUser())}>Confirm OTP</button>
    </Dialog>
  );
}

export default Otp;
