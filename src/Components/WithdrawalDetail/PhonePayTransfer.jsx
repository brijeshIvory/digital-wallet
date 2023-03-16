import React from 'react'
import './style.scss'
import TextField from '@mui/material/TextField'
import Drawer from '@mui/material/Drawer'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'
import { useFormik } from 'formik'
import { PhonePayTransferValidationSchema } from '../../utills/ValidationSchema'
function PhonePayTransfer({ PhonePeFormOpen, setPhonePeFormOpen }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      phonepenumber: '',
    },
    validationSchema: PhonePayTransferValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Drawer anchor={'bottom'} open={PhonePeFormOpen} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div className="closing_button" onClick={() => setPhonePeFormOpen(false)}>
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="withdrawal_form">
        <div className="withdrawal_form_title">
          <h3>Add New Phone Pe Number</h3>
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
              name="phonepenumber"
              id="standard-required"
              label="Account Number"
              variant="standard"
              value={formik.values.phonepenumber}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.phonepenumber ? (
              <div className="error_text">{formik.errors.phonepenumber}</div>
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

export default PhonePayTransfer
