import React, { useState } from "react";
import "./index.scss";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Drawer from "@mui/material/Drawer";
import { MuiTelInput } from "mui-tel-input";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import ForgotPassword from "../Forgot password";

function Login({ open, toggleLoginDrawer }) {
  const [value, setValue] = useState("+91");
  const [openForgotPassPopup, setOpenForgotPassPopup] = useState(false);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Drawer anchor={"bottom"} open={open} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div
          className="closing_button"
          onClick={toggleLoginDrawer("bottom", false)}
        >
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="register_form">
        <div className="register_form_title">Login</div>

        <div className="form_container">
          <form>
            <MuiTelInput
              required
              type="text"
              id="standard-required"
              label="Phone Number"
              variant="standard"
              value={value}
              onChange={handleChange}
            />
            {/* <TextField
              required
              type="email"
              id="standard-required"
              label="Email Id"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
            <TextField
              required
              type="name"
              id="standard-required"
              label="Password"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon sx={{ color: "white" }} />
                      ) : (
                        <VisibilityOffIcon sx={{ color: "white" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="forgot_password">
              <p onClick={() => setOpenForgotPassPopup(true)}>
                {" "}
                ForgotPassword?
              </p>
            </div>
            <div className="button_div">
              <button className="loginbutton">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
      <ForgotPassword
        openForgotPassPopup={openForgotPassPopup}
        setOpenForgotPassPopup={setOpenForgotPassPopup}
      />
    </Drawer>
  );
}

export default Login;
