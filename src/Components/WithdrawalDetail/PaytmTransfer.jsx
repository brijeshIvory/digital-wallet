import React from 'react'
import './style.scss'
import TextField from '@mui/material/TextField'
import Drawer from '@mui/material/Drawer'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'
import { useFormik } from 'formik'
import { PaytmTransferValidationSchema } from '../../utills/ValidationSchema'
import { useSelector } from 'react-redux'
function PaytmTransfer({ PaytmFormOpen, setPaytmFormOpen }) {
  const userId = useSelector((state) => state?.user?.userDetail?.id)
  const amount = window.location.pathname.split('/')[2]
  const formik = useFormik({
    initialValues: {
      name: '',
      paytmnumber: '',
    },
    validationSchema: PaytmTransferValidationSchema,
    onSubmit: (values) => {
      const PayloadData = {
        notes: `${'Paytm'},${values?.name},${values?.paytmnumber}`,
        amount: amount,
        // image: previewUrl,
        user_id: userId
      }
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Drawer anchor={'bottom'} open={PaytmFormOpen} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div className="closing_button" onClick={() => setPaytmFormOpen(false)}>
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="withdrawal_form">
        <div className="withdrawal_form_title">
          <h3>Add New Paytm Wallet Number</h3>
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
              name="paytmnumber"
              id="standard-required"
              label="Account Number"
              variant="standard"
              value={formik.values.paytmnumber}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.paytmnumber ? (
              <div className="error_text">{formik.errors.paytmnumber}</div>
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

export default PaytmTransfer
