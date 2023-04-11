import React from "react";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { emptyUser } from "../../App/Redux/Actions/AuthActions";
import { useState } from "react";
import { useEffect } from "react";
import { sendOtp, verifyOtp } from "../../App/Redux/Actions/AuthActions";
import OtpInput from "react18-input-otp";
import ForgotPassword from "../Forgotpassword";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function VerifyOtp({
  openVerifyOtpPopup,
  setOpenVerifyOtpPopup,
  setOpenVerifyEmailPopup,
}) {
  const [otp, setOtp] = useState("");
  const [openChangePasswordPopup, setOpenChangePasswordPopup] = useState(false);
  const dispatch = useDispatch();
  const sendOtpstate = useSelector((state) => state?.user?.sendOtp);

  const otpVarificationStatus = useSelector(
    (state) => state?.user?.otpVerification?.data?.ok
  );

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  useEffect(() => {
    if (otpVarificationStatus) {
      setOpenChangePasswordPopup(true);
      // setOpenVerifyOtpPopup(false);
    }
  }, [otpVarificationStatus]);

  return (
    <Dialog open={openVerifyOtpPopup} className="otp-input">
      {/* <div className="close-icon-div">
        <HighlightOffIcon onClick={() => setOpenVerifyOtpPopup(false)} />
      </div> */}
      <div className="otp-input-title">
        Enter the OTP sent to your email id..
      </div>

      <OtpInput
        className="otp-input-field"
        value={otp}
        onChange={handleChange}
        numInputs={6}
      />
      <button
        onClick={() => {
          dispatch(
            verifyOtp({
              id: sendOtpstate?.data?.id,
              otp: Number(otp),
            })
          );
        }}
      >
        Confirm OTP
      </button>
      <ForgotPassword
        openForgotPassPopup={openChangePasswordPopup}
        setOpenForgotPassPopup={setOpenChangePasswordPopup}
        setOpenVerifyEmailPopup={setOpenVerifyEmailPopup}
        setOpenVerifyOtpPopup={setOpenVerifyOtpPopup}
      />
    </Dialog>
  );
}

export default VerifyOtp;
