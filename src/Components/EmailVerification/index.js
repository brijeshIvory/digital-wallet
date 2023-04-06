import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { EmailVerificationValidationSchema } from "../../utills/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp } from "../../App/Redux/Actions/AuthActions";
import { useEffect } from "react";
import VerifyOtp from "./VerifyOtp";

function EmailVerification({ setOpenVerifyEmailPopup, verifyEmailPopup }) {
  const sendOtpstate = useSelector((state) => state?.user?.sendOtp);
  const dispatch = useDispatch();
  const [indication, setIndication] = useState(false);
  const [openVerifyOtpPopup, setOpenVerifyOtpPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(sendOtp(values));
      resetForm({ values: null });
    },
    validationSchema: EmailVerificationValidationSchema,
  });

  useEffect(() => {
    if (sendOtpstate?.ok === true) {
      setOpenVerifyOtpPopup(true);
    }
  }, [sendOtpstate]);
  return (
    <Dialog open={verifyEmailPopup} className="forgot-password">
      <div className="close-icon-div">
        <HighlightOffIcon
          onClick={() => {
            setOpenVerifyEmailPopup(false);
            formik.resetForm();
          }}
        />
      </div>
      <div className="forgot-password-title">
        Enter your registered email id
      </div>
      <form
        className="forgot-password-form"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <TextField
          type="email"
          id="standard-required"
          label="Email Id"
          variant="standard"
          name="email"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {indication && formik.errors.email ? (
          <div className="error_text">{formik.errors.email}</div>
        ) : null}

        <div className="forgot-password-form-button-div">
          <button type="submit" onClick={() => setIndication(true)}>
            Submit
          </button>
        </div>
      </form>
      <VerifyOtp
        openVerifyOtpPopup={openVerifyOtpPopup}
        setOpenVerifyOtpPopup={setOpenVerifyOtpPopup}
        setOpenVerifyEmailPopup={setOpenVerifyEmailPopup}
      />
    </Dialog>
  );
}

export default EmailVerification;
