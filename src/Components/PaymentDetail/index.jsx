import React, { useState } from 'react'
import './style.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const PaymentDetail = () => {
  const [FrontSidefile, setFrontSidefile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const onFileUploadChange = async (e) => {
    const fileInput = e.target;
    if (!fileInput.files) {
      await alert("No file was chosen", "error");
      return;
    }
    if (!fileInput.files || fileInput.files.length === 0) {
      await alert("Files list is empty", "error");
      return;
    }
    const file = fileInput.files[0];
    if (!file.type.startsWith("image")) {
      await alert("Please select a valide image", "error");
      return;
    }
    setFrontSidefile(file);
    setPreviewUrl(URL.createObjectURL(file));
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  return (
    <>
      <div className="Payment_detail">
        <div className="Payment_detail_title">
          Make your payment on the deatils below
        </div>
        <div className="person_deatils">
          <div className="person_name">Person Name</div>
          <div className="person_data">Keyur patel</div>
        </div>
        <div className="person_deatils">
          <div className="person_name">Paytm Number</div>
          <div className="person_data">+9054215586</div>
        </div>

        <div className='file_main'>
          <div className=" border rounded-lg mt-3">
            <form onSubmit={(e) => e.preventDefault()}>
              {previewUrl ? (
                <img
                  alt="file uploader preview"
                  objectFit="cover"
                  src={previewUrl}
                  width={441}
                  height={250}
                  layout="responsive"
                />
              ) : (
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
              )}
              <p className="clickfile">   Click here
                to upload payment screenshot.</p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDetail
