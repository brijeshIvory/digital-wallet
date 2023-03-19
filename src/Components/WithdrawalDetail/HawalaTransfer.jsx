import React, { useState } from 'react'
import './style.scss'
import TextField from '@mui/material/TextField'
import Drawer from '@mui/material/Drawer'
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp'
import { useFormik } from 'formik'
import { HawalaTransferValidationSchema } from '../../utills/ValidationSchema'
import MenuItem from '@mui/material/MenuItem'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useSelector } from 'react-redux'
function HawalaTransfer({ HawalaiFormOpen, setHawalaiFormOpen }) {
  const userId = useSelector((state) => state?.user?.userDetail?.id)
  const amount = window.location.pathname.split('/')[2]
  const formik = useFormik({
    initialValues: {
      hawala_value: '',
      AccountNumber: '',
    },
    validationSchema: HawalaTransferValidationSchema,
    onSubmit: (values) => {
      const PayloadData = {
        notes: `${'HawalaTransfer'},${values?.hawala_value},${values?.AccountNumber}`,
        amount: amount,
        // image: previewUrl,
        user_id: userId
      }
      console.log(JSON.stringify(values, null, 2))
    },
  })
  const [FrontSidefile, setFrontSidefile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

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

  return (
    <Drawer anchor={'bottom'} open={HawalaiFormOpen} className="joinNowFrom">
      <div className="yellow_strip"></div>
      <div className="closing">
        <div
          className="closing_button"
          onClick={() => setHawalaiFormOpen(false)}
        >
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="withdrawal_form">
        <div className="withdrawal_form_title">
          <h3>Add New Hawala</h3>
        </div>
        <p className="withdrawal_subtitle"></p>
        <div className="withdrawal_form_container">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              className="withdrawal_select"
              select
              variant="standard"
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            {formik.errors.hawala_value ? (
              <div className="error_text">{formik.errors.hawala_value}</div>
            ) : null}

            <TextField
              type="name"
              name="AccountNumber"
              id="standard-required"
              label="Account Number"
              variant="standard"
              value={formik.values.AccountNumber}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formik.errors.AccountNumber ? (
              <div className="error_text">{formik.errors.AccountNumber}</div>
            ) : null}
            <div className="withdrawal_file_main">
              <div className=" border rounded-lg mt-3">
                <form onSubmit={(e) => e.preventDefault()}>
                  {previewUrl ? (
                    <img
                      alt="file uploader preview"
                      src={previewUrl}
                      width={441}
                      height={250}
                      layout="responsive"
                      className='preview_img'
                    />
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
            <div className="withdrawal_button_div">
              <button
                type="submit"
                // disabled={!formik.isValid}
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
export default HawalaTransfer
