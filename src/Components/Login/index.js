import React, { useState } from 'react'
import './index.scss'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import { IconButton } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Drawer from '@mui/material/Drawer'
import { MuiTelInput } from 'mui-tel-input'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'
import ForgotPassword from '../Forgot password'

import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { loginValidationSchema } from '../../utills/ValidationSchema'
function Login({ open, toggleLoginDrawer }) {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    onSubmit: (values) => {
      setLoading(true)
      const username = values.email
      const password = values.password

      // doSignInWithEmailAndPassword(username, password)
      //   .then(async (userCredential) => doSiginIn(userCredential.user))
      //   .catch((error) => showErrorToast(error.code))
      //   .finally(() => setLoading(false));
    },
    validationSchema: loginValidationSchema,
  })
  const [value, setValue] = useState('+91')
  const [openForgotPassPopup, setOpenForgotPassPopup] = useState(false)
  const handleChange = (newValue) => {
    setValue(newValue)
  }
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  return (
    <Drawer anchor={'bottom'} open={open} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div
          className="closing_button"
          onClick={toggleLoginDrawer('bottom', false)}
        >
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="register_form">
        <div className="register_form_title">Login</div>

        <div className="form_container">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <MuiTelInput
              required
              type="text"
              id="standard-required"
              label="Phone Number"
              variant="standard"
              name="phone"
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
              type="password"
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
                        <VisibilityIcon sx={{ color: 'white' }} />
                      ) : (
                        <VisibilityOffIcon sx={{ color: 'white' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              id="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div className="error_text">{formik.errors.password}</div>
            ) : null}
            <div className="forgot_password">
              <p onClick={() => setOpenForgotPassPopup(true)}>
                {' '}
                ForgotPassword?
              </p>
            </div>
            <div className="button_div">
              <button className="loginbutton" disabled={!formik.isValid}>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
      <ForgotPassword
        openForgotPassPopup={openForgotPassPopup}
        setOpenForgotPassPopup={setOpenForgotPassPopup}
      />
    </Drawer>
  )
}

export default Login
