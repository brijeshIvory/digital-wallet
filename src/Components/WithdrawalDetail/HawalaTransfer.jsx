import React, { useEffect, useState } from "react";
import "./style.scss";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useFormik } from "formik";
import { CashDepositTransferValidationSchema } from "../../utills/ValidationSchema";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCashDepositList,
  WithDrawRequest,
} from "../../App/Redux/Actions/WalletActions";
function CashDepositTransfer({
  CashDepositiFormOpen,
  setCashDepositiFormOpen,
}) {
  const UserToken = localStorage.getItem("UserToken");
  const userId =
    UserToken !== "undefined" && UserToken !== null
      ? JSON.parse(UserToken).user_id
      : undefined;
  const CashDepositList = useSelector(
    (state) => state?.CashDeposit?.CashDepositlist_data
  );
  const amount = window.location.pathname.split("/")[2];
  const [indication, setIndication] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      CashDeposit_value: "",
      // AccountNumber: "",
      fullName: "",
      phoneNumber: null,
      city: "",
    },
    validationSchema: CashDepositTransferValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const PayloadData = {
        notes: `${"CashDepositTransfer"},${values?.CashDeposit_value},${
          values?.fullName
        },${values?.phoneNumber},${values?.city}`,
        amount: amount,
        user_id: userId,
        type_id: 6,
      };
      dispatch(WithDrawRequest(PayloadData));
      setCashDepositiFormOpen(false);
      setIndication(false);
      resetForm({ values: null });
    },
  });
  useEffect(() => {
    dispatch(GetCashDepositList());
  }, []);

  return (
    <Drawer
      anchor={"bottom"}
      open={CashDepositiFormOpen}
      className="joinNowFrom"
    >
      <div className="yellow_strip"></div>
      <div className="closing">
        <div
          className="closing_button"
          onClick={() => {
            setCashDepositiFormOpen(false);
            setIndication(false);
          }}
        >
          <HighlightOffSharpIcon />
        </div>
      </div>

      <div className="withdrawal_form">
        <div className="withdrawal_form_title">
          <h3>Add New CashDeposit</h3>
        </div>
        <p className="withdrawal_subtitle"></p>
        <div className="withdrawal_form_container">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextField
              className="withdrawal_select"
              select
              variant="standard"
              id="CashDeposit_value"
              name="CashDeposit_value"
              value={formik.values.CashDeposit_value}
              onChange={formik.handleChange}
              label="Select CashDeposit"
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
                    {item.name}
                  </MenuItem>
                ))}
            </TextField>

            {indication && formik.errors.CashDeposit_value ? (
              <div className="error_text">
                {formik.errors.CashDeposit_value}
              </div>
            ) : null}

            <TextField
              type="name"
              name="fullName"
              id="standard-required"
              label="Full Name"
              variant="standard"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {indication && formik.errors.fullName ? (
              <div className="error_text">{formik.errors.fullName}</div>
            ) : null}

            <TextField
              type="number"
              name="phoneNumber"
              id="standard-required"
              label="Phone Number"
              variant="standard"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {indication && formik.errors.phoneNumber ? (
              <div className="error_text">{formik.errors.phoneNumber}</div>
            ) : null}

            <TextField
              type="text"
              name="city"
              id="standard-required"
              label="City"
              variant="standard"
              value={formik.values.city}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {indication && formik.errors.city ? (
              <div className="error_text">{formik.errors.city}</div>
            ) : null}

            <div className="withdrawal_button_div">
              <button
                type="submit"
                disabled={!formik.isValid}
                onClick={() => setIndication(true)}
                className="withdrawal_button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Drawer>
  );
}
export default CashDepositTransfer;
