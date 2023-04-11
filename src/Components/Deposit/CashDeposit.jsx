import React, { useState, useEffect } from "react";
import "./style.scss";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { CashDepositTransferValidationSchema } from "../../utills/ValidationSchema";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector } from "react-redux";
import {
  GetCashDepositList,
  RequestDeposite,
  EmptyStateRequestDeposite,
} from "../../App/Redux/Actions/WalletActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { InputLabel } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
const DepositCashDeposit = ({ ReferralCode, paymenyTypeID }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [FrontSidefile, setFrontSidefile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageToBeSent, setImageToBeSent] = useState();
  const CashDepositList = useSelector(
    (state) => state?.CashDeposit?.CashDepositlist_data
  );
  const userId = useSelector((state) => state?.user?.userDetail?.id);
  const loading = useSelector((state) => state?.deposit?.reqLoading);
  const depositRequest = useSelector(
    (state) => state?.deposit?.requestDeposite
  );

  const amount = window.location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(GetCashDepositList());
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
      CashDeposit_value: "",
    },
    validationSchema: CashDepositTransferValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append(
        "notes",
        `${"CashDepositTransfer"},${values.CashDeposit_value}`
      );
      formData.append("amount", amount);
      formData.append("user_id", userId);
      formData.append("refer_code", ReferralCode);
      formData.append("image", imageToBeSent);
      formData.append("type_id", paymenyTypeID);

      dispatch(RequestDeposite(formData));

      formik.resetForm();
      setPreviewUrl(null);
    },
  });

  useEffect(() => {
    if (depositRequest?.ok) {
      navigate("/");
      dispatch(EmptyStateRequestDeposite());
    }
  }, [depositRequest]);

  return (
    <div className="Payment_detail">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="Payment_detail_title">
          Make your payment on the details below
        </div>
        <div className="deposit_form_container">
          <InputLabel style={{ fontSize: "12px" }}>
            Select CashDeposit
          </InputLabel>
          <TextField
            className="deposit_select"
            select
            variant="standard"
            id="CashDeposit_value"
            name="CashDeposit_value"
            value={formik.values.CashDeposit_value}
            onChange={formik.handleChange}
            onBlur={() => {
              formik.handleBlur({ target: { name: "CashDeposit_value" } });
            }}
            SelectProps={{
              IconComponent: () => <KeyboardArrowDownIcon />,
            }}
          >
            {CashDepositList !== null &&
              CashDepositList.map((item, index) => (
                <MenuItem value={item.name} key={index}>
                  <Grid container sx={{ fontSize: "15px" }}>
                    <Grid item xs={12}>
                      Name: {item.name}
                    </Grid>
                    <Grid item xs={12}>
                      Area: {item.area}
                    </Grid>
                    <Grid item xs={12}>
                      Book Name: {item.book_name}
                    </Grid>
                    <Grid item xs={12}>
                      Mobile: {item.mobile}
                    </Grid>
                  </Grid>
                </MenuItem>
              ))}
          </TextField>

          {formik.errors.CashDeposit_value ? (
            <div className="error_text">{formik.errors.CashDeposit_value}</div>
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
                  <div className="loader">
                    {loading && <CircularProgress sx={{ color: "#01b0ff" }} />}
                  </div>
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DepositCashDeposit;
