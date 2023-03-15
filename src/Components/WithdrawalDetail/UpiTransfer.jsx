import React from 'react'
import './style.scss'
import TextField from '@mui/material/TextField'
import Drawer from '@mui/material/Drawer'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'
import { useFormik } from 'formik'
import { UpiTransferValidationSchema } from '../../utills/ValidationSchema'
function UpiTransfer({ UpiFormOpen, setUpiFormOpen }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      upiId: '',
    },
    validationSchema: UpiTransferValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Drawer anchor={'bottom'} open={UpiFormOpen} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div className="closing_button" onClick={() => setUpiFormOpen(false)}>
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="withdrawal_form">
        <div className="withdrawal_form_title">
          <h3>Add New UPI Id</h3>
        </div>
        <p className="withdrawal_subtitle">
          
        </p>
        <div className="withdrawal_form_container">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              type="name"
              name="name"
              id="standard-required"
              label="Bank Name"
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.name ? (
              <div className="error_text">{formik.errors.name}</div>
            ) : null}

            <TextField
              type="name"
              name="upiId"
              id="standard-required"
              label="Account Number"
              variant="standard"
              value={formik.values.upiId}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.upiId ? (
              <div className="error_text">{formik.errors.upiId}</div>
            ) : null}
            <div className="withdrawal_button_div">
              <button
                type="submit"
                disabled={!formik.isValid}
                className="withdrawal_button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Drawer>
  )
}

export default UpiTransfer
