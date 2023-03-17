import React, { useState } from "react";
import "./index.scss";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";

import { useFormik } from "formik";

import { MuiTelInput } from "mui-tel-input";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { RegistationValidationSchema } from "../../utills/ValidationSchema";

function Register({ open, toggleJoinNowDrawer }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [indication, setIndication] = useState(false);

  const countries = useSelector((state) => state?.country?.countries?.data);
  const [selectCountry, setSelectCountry] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values, "values");
    },
    validationSchema: RegistationValidationSchema,
  });

  function convertstr(str) {
    const length = str?.length;
    const result = ".".repeat(length);
    return result;
  }

  return (
    <Drawer anchor={"bottom"} open={open} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div
          className="closing_button"
          onClick={toggleJoinNowDrawer("bottom", false)}
        >
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="register_form">
        <div className="register_form_title">REGISTER</div>
        <form
          className="form_container"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <TextField
            type="name"
            id="standard-required"
            label="Name"
            name="name"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {indication && formik.errors.name ? (
            <div className="error_text">{formik.errors.name}</div>
          ) : null}
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
          <TextField
            id="country"
            select
            label="Select Country"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {countries?.map((ele) => (
              <MenuItem
                value={ele.name}
                key={ele.id}
                onClick={() =>
                  setSelectCountry({
                    country: ele.id,
                    country_code: ele.phonecode,
                  })
                }
              >
                {ele.name}
              </MenuItem>
            ))}
          </TextField>
          {indication && formik.errors.country ? (
            <div className="error_text">{formik.errors.country}</div>
          ) : null}

          <TextField
            type="text"
            id="standard-required"
            label="Phone Number"
            variant="standard"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {indication && formik.errors.phone ? (
            <div className="error_text">{formik.errors.phone}</div>
          ) : null}

          <TextField
            id="standard-required"
            label="Password"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            name="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={() => setShowPassword(!showPassword)}
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
            value={
              showPassword
                ? formik.values.password
                : convertstr(formik.values.password)
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {indication && formik.errors.password ? (
            <div className="error_text">{formik.errors.password}</div>
          ) : null}
          <TextField
            type="text"
            name="confirmPassword"
            id="standard-required"
            label="Confirm Password"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    onMouseDown={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <VisibilityIcon sx={{ color: "white" }} />
                    ) : (
                      <VisibilityOffIcon sx={{ color: "white" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={
              showConfirmPassword
                ? formik.values.confirmPassword
                : convertstr(formik.values.confirmPassword)
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {indication && formik.errors.confirmPassword ? (
            <div className="error_text">{formik.errors.confirmPassword}</div>
          ) : null}

          <div className="acceptance">
            <input type="checkbox" />
            <div>I've read and accept the </div>
          </div>
          <div className="button_div">
            <button
              className="loginbutton"
              type="submit"
              onClick={() => setIndication(true)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </Drawer>
  );
}

export default Register;
