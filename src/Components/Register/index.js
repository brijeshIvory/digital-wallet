import React, { useState } from "react";
import "./index.scss";
import TextField from "@mui/material/TextField";
// import { useFormik } from "formik";
// import * as yup from "yup";
import { MuiTelInput } from "mui-tel-input";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

// const validationSchema = yup.object().shape({
//   name: yup.string().required("Required !"),

//   phoneNumber: yup.string().required("Required !"),
//   password: yup
//     .string()
//     .required("Required !")
//     .min(8, "Must be 8 characters or more")
//     .matches(/[a-z]+/, "One lowercase character")
//     .matches(/[A-Z]+/, "One uppercase character")
//     .matches(/[@$!%*#?&]+/, "One special character(@$!%*#?&)")
//     .matches(/\d+/, "One number"),

//   confirmPassword: yup.string().when("password", {
//     is: (val) => (val && val.length > 0 ? true : false),
//     then: yup
//       .string()
//       .oneOf([yup.ref("password")], "password need to be the same"),
//   }),

//   referralCode: yup.string(),
// });

function Register() {
  const [value, setValue] = useState("+91");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     phoneNumber: "",
  //     password: "",
  //     confirmPassword: "",
  //     referralCode: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values, "values");
  //   },
  //   validationSchema: validationSchema,
  // });

  return (
    <div className="form_container">
      <form>
        <TextField
          required
          type="name"
          id="standard-required"
          label="Name"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          type="email"
          id="standard-required"
          label="Email Id"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />

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
        />
        <TextField
          required
          type="text"
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
        />

        <div className="acceptance">
          <input type="checkbox" />
          <div>I've read and accept the </div>
          <a>Terms & Conditions</a>
        </div>
        <div className="button_div">
          <button type="submit" className="loginbutton">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
