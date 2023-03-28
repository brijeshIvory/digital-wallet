import React, { useState, useEffect } from "react";
import "./style.scss";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { HawalaTransferValidationSchema } from "../../utills/ValidationSchema";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import {
  GetHawalaList,
  RequestDeposite,
} from "../../App/Redux/Actions/WalletActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { InputLabel } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const DepositHawala = () => {
  const dispatch = useDispatch();
  const [FrontSidefile, setFrontSidefile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageToBeSent, setImageToBeSent] = useState();
  const hawalaList = useSelector((state) => state?.hawala?.hawalalist_data);
  const userId = useSelector((state) => state?.user?.userDetail?.id);
  const amount = window.location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(GetHawalaList());
  }, []);

  function handleImageUpload(event) {
    const fileInput = event.target;
    if (!fileInput.files) {
      toast("No file was chosen", "error");
      return;
    }
    if (!fileInput.files || fileInput.files.length === 0) {
      toast("Files list is empty", "error");
      return;
    }
    const file = fileInput.files[0];
    if (!file.type.startsWith("image")) {
      toast("Please select a valide image", "error");
      return;
    }
    setFrontSidefile(file);

    setPreviewUrl(URL.createObjectURL(file));
    event.currentTarget.type = "text";
    event.currentTarget.type = "file";

    setImageToBeSent(file);
  }

  const formik = useFormik({
    initialValues: {
      hawala_value: "",
      AccountNumber: "",
    },
    validationSchema: HawalaTransferValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append(
        "notes",
        `${"HawalaTransfer"},${values.hawala_value},${values.AccountNumber}`
      );
      formData.append("amount", amount);
      formData.append("user_id", userId);
      formData.append("refer_code", "");
      formData.append("image", imageToBeSent);
      dispatch(RequestDeposite(formData));

      formik.resetForm();
      setPreviewUrl(null);
    },
  });

  return (
    <div className="Payment_detail">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="Payment_detail_title">
          Make your payment on the details below hhh
        </div>
        <div className="deposit_form_container">
          <InputLabel style={{ fontSize: "12px" }}>Select Hawala</InputLabel>
          <TextField
            className="deposit_select"
            select
            variant="standard"
            id="hawala_value"
            name="hawala_value"
            value={formik.values.hawala_value}
            onChange={formik.handleChange}
            onBlur={() => {
              formik.handleBlur({ target: { name: "hawala_value" } });
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
        </div>

        <div className="file_main">
          <div className=" border rounded-lg mt-3">
            {previewUrl ? (
              <>
                <div className="deposit_close_icon">
                  <HighlightOffIcon
                    onClick={() => {
                      setFrontSidefile(null);
                      setPreviewUrl(null);
                    }}
                  />
                </div>
                <img
                  alt="file uploader preview"
                  src={previewUrl}
                  width={441}
                  height={250}
                  layout="responsive"
                  className="Person_preview_img"
                />
                <div className="upload_button_div">
                  <button
                    type="submit"
                    disabled={!formik.isValid}
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
                    onChange={handleImageUpload}
                  />
                </label>
                <p className="clickfile">
                  {" "}
                  Click here to upload payment screenshot.
                </p>
              </>
            )}
          </div>
          {/* <UploadToS3
            bucket="anjanibook-buket"
            awsRegion="us-east-1"
            awsKey="AKIAWWADDZGOORELTA6Q"
            awsSecret="jdGVuREctNKjTF3Y7UpKO9W6Ryso7lzf8zl8VT7b"
            // awsMediaConvertEndPoint="your_endpoint"
            type="image"
            mediaConvertRole="mediaconvert_role"
            // theme={theme}
            showNewUpload={false}
            onResult={(result) => {
              console.log("on Result", result);
            }}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default DepositHawala;
