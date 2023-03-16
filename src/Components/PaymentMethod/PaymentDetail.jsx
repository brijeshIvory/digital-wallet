import React, { useState } from 'react'
import './style.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import { HawalaTransferValidationSchema } from '../../utills/ValidationSchema'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useSelector } from 'react-redux'
const PaymentDetail = ({ isBackground }) => {
  const [FrontSidefile, setFrontSidefile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const hawalaList = useSelector(
    (state) => state?.HawalaReducer?.hawalalist_data,
  )

  const onFileUploadChange = async (e) => {
    const fileInput = e.target
    if (!fileInput.files) {
      await alert('No file was chosen', 'error')
      return
    }
    if (!fileInput.files || fileInput.files.length === 0) {
      await alert('Files list is empty', 'error')
      return
    }
    const file = fileInput.files[0]
    if (!file.type.startsWith('image')) {
      await alert('Please select a valide image', 'error')
      return
    }
    setFrontSidefile(file)
    setPreviewUrl(URL.createObjectURL(file))
    e.currentTarget.type = 'text'
    e.currentTarget.type = 'file'
  }
  const formik = useFormik({
    initialValues: {
      hawala_value: '',
      ammount: '',
      screenshot: '',
    },
    validationSchema: HawalaTransferValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      {isBackground === 'Banktransfer' ||
      isBackground === 'Paytm' ||
      isBackground === 'GooglePay' ||
      isBackground === 'phone_pe' ||
      isBackground === 'Hawala' ? (
        <div className="Payment_detail">
          <div className="Payment_detail_title">
            Make your payment on the details below
          </div>

          {isBackground === 'Banktransfer' && (
            <>
              <div className="person_deatils">
                <div className="person_name">Bank Name </div>
                <div className="bank_name_value">IDFC FIRST BANK </div>
              </div>
              <div className="person_deatils">
                <div className="person_name">Account Holder Name </div>
                <div className="account_holder_value">UMIYA TRADERS </div>
              </div>
              <div className="person_deatils">
                <div className="person_name">Account Number</div>
                <div className="person_data">52004200012</div>
              </div>
              <div className="person_deatils">
                <div className="person_name">IFSC</div>
                <div className="person_data">IDFB0040312</div>
              </div>
            </>
          )}
          {isBackground === 'Paytm' && (
            <>
              <div className="person_deatils">
                <div className="person_name">Person Name</div>
                <div className="person_data">Keyur patel</div>
              </div>
              <div className="person_deatils">
                <div className="person_name">Paytm Number</div>
                <div className="person_data">+9054215586</div>
              </div>
            </>
          )}
          {isBackground === 'GooglePay' && (
            <>
              <div className="person_deatils">
                <div className="person_name">Google Pay Name</div>
                <div className="person_data">Umiya Traders</div>
              </div>
              <div className="person_deatils">
                <div className="person_name">Google Pay Number</div>
                <div className="person_data">+9157046576</div>
              </div>
            </>
          )}
          {isBackground === 'phone_pe' && (
            <>
              <div className="person_deatils">
                <div className="person_name">Phone Pay Name</div>
                <div className="person_data">Umiya Traders</div>
              </div>
              <div className="person_deatils">
                <div className="person_name">Phone Pay Number</div>
                <div className="person_data">+9157046576</div>
              </div>
            </>
          )}

          {isBackground === 'Hawala' && (
            <div className="deposit_form_container">
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <TextField
                  className="deposit_select"
                  select
                  variant="standard"
                  labelId="hawala_value"
                  id="hawala_value"
                  name="hawala_value"
                  value={formik.values.hawala_value}
                  onChange={formik.handleChange}
                  label="Select Hawala"
                  onBlur={() => {
                    formik.handleBlur({ target: { name: 'hawala_value' } })
                  }}
                  SelectProps={{
                    IconComponent: () => <KeyboardArrowDownIcon />,
                  }}
                >
                  {hawalaList !== null &&
                    hawalaList.map((item, index) => (
                      <MenuItem value={item.name} key={index}>
                        {item.name}
                      </MenuItem>
                    ))}
                </TextField>

                {formik.errors.hawala_value ? (
                  <div className="error_text">{formik.errors.hawala_value}</div>
                ) : null}

                <TextField
                  type="name"
                  name="ammount"
                  id="standard-required"
                  label="Account Number"
                  variant="standard"
                  value={formik.values.ammount}
                  onChange={formik.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {formik.errors.ammount ? (
                  <div className="error_text">{formik.errors.ammount}</div>
                ) : null}
              </form>
            </div>
          )}
          <div className="file_main">
            <div className=" border rounded-lg mt-3">
              <form onSubmit={(e) => e.preventDefault()}>
                {previewUrl ? (
                  <>
                    <img
                      alt="file uploader preview"
                      objectFit="cover"
                      src={previewUrl}
                      width={441}
                      height={250}
                      layout="responsive"
                      className="Person_preview_img"
                    />
                    <div className="upload_button_div">
                      <button
                        type="submit"
                        // disabled={!formik.isValid}
                        className="deposit_button"
                      >
                        Submit
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <label className="file_label">
                      <span>
                        <ControlPointIcon />
                      </span>
                      <input
                        className="file_input"
                        name="file"
                        type="file"
                        onChange={onFileUploadChange}
                      />
                    </label>
                    <p className="clickfile">
                      {' '}
                      Click here to upload payment screenshot.
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PaymentDetail
