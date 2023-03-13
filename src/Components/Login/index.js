import React, { useState } from "react";
import "./index.scss";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { MuiTelInput } from "mui-tel-input";

function Login() {
  const [value, setValue] = useState("+91");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
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
        <div className="forgot_password">ForgotPassword?</div>
        <div className="button_div">
          <button className="loginbutton">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
