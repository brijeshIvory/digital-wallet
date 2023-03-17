import React,{useState} from 'react'
import './style.scss'
import TextField from '@mui/material/TextField'
import Drawer from '@mui/material/Drawer'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'
import { useFormik } from 'formik'
import { BankTransferValidationSchema } from '../../utills/ValidationSchema'
import { useSelector } from 'react-redux'
function BankTransfer({ bankFormOpen, setBankFormOpen }) {
  const userId = useSelector((state) => state?.user?.userDetail?.id)
  const amount = window.location.pathname.split('/')[2]

  const formik = useFormik({
    initialValues: {
      bankname: '',
      accountnumber: '',
      ifsccode: '',
      accountholdername: '',
    },
    validationSchema: BankTransferValidationSchema,
    onSubmit: (values) => {
      const PayloadData = {
        notes: `${'BankTransfer'},${values.bankname},${values.accountnumber},${values.ifsccode},${values.accountholdername}`,
        amount: amount,
        // image: previewUrl,
        user_id: userId
      }
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Drawer anchor={'bottom'} open={bankFormOpen} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div className="closing_button" onClick={() => setBankFormOpen(false)}>
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="withdrawal_form">
        <div className="withdrawal_form_title">
          <h3> Add Your Bank Account </h3>
        </div>
        <p className="withdrawal_subtitle">
          Adding Bank Details is mandatory for processing withdrawals.
        </p>
        <div className="withdrawal_form_container">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              type="name"
              name="bankname"
              id="standard-required"
              label="Bank Name"
              variant="standard"
              value={formik.values.bankname}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.bankname ? (
              <div className="error_text">{formik.errors.bankname}</div>
            ) : null}

            <TextField
              type="name"
              name="accountnumber"
              id="standard-required"
              label="Account Number"
              variant="standard"
              value={formik.values.accountnumber}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.accountnumber ? (
              <div className="error_text">{formik.errors.accountnumber}</div>
            ) : null}
            <TextField
              type="name"
              name="ifsccode"
              id="standard-required"
              label="IFSC"
              variant="standard"
              value={formik.values.ifsccode}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.ifsccode ? (
              <div className="error_text">{formik.errors.ifsccode}</div>
            ) : null}
            <TextField
              type="name"
              name="accountholdername"
              id="standard-required"
              label="Account Holder Name"
              variant="standard"
              value={formik.values.accountholdername}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.accountholdername ? (
              <div className="error_text">
                {formik.errors.accountholdername}
              </div>
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

export default BankTransfer
