import React, { useState } from "react";
import "./index.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as yup from "yup";

// const validationSchema = yup.object().shape({
//   startDate: yup.string().required("Required !"),
//   endDate: yup.string().required("Required !"),
//   transactionType: yup.string().required("Required !"),
//   status: yup.string().required("Required !"),
// });

function Passbook() {
  const [inputValue, setInputValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
    transactionType: "1",
    status: "1",
  });
  const [submitedInput, setSubmitedInput] = useState({});
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const arr = ["1", "2", " 3", "4"];

  // const selectStartDate = (e) => {
  //   setInputValue({ ...inputValue, startDate: e.target.value });
  // };

  // const selectEndDate = (e) => {
  //   setInputValue({ ...inputValue, endDate: e.target.value });
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     transactionType: "2",
  //     status: "2",
  //   },
  //   onSubmit: (values, { resetForm }) => {
  //     console.log(values, "values");
  //     resetForm({ values: null });
  //   },
  //   validationSchema: validationSchema,
  // });
  const dateAfterYear = new Date();
  dateAfterYear.setFullYear(inputValue.startDate.getFullYear() + 1);
  console.log(submitedInput, "submitedInput");
  return (
    <div className="passbook-main">
      <div className="passbook-head">
        <div className="passbook-title">
          <ArrowCircleLeftIcon />
          <div className="passbook_subtitle">Passbook</div>
        </div>
      </div>
      <div className="passbook-body">
        <div className="passbook-body-head">
          <div>Transactions</div>
          <button onClick={() => setIsFilterClicked(!isFilterClicked)}>
            Filter
          </button>
        </div>

        {isFilterClicked ? (
          <div>
            <div className="passbook-body-date">
              <DatePicker
                selectsStart
                label="from"
                selected={inputValue.startDate}
                onChange={(e) => {
                  console.log(e, "e");
                  setInputValue({ ...inputValue, startDate: e });
                }}
              />
              <DatePicker
                selectsEnd
                selected={inputValue.endDate}
                onChange={(e) => setInputValue({ ...inputValue, endDate: e })}
                maxDate={dateAfterYear}
              />
            </div>

            <TextField
              id="transactionType"
              label="Transaction Type"
              select
              helperText="Please select your transaction type"
              variant="standard"
              value={inputValue.transactionType}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  transactionType: e.target.value,
                })
              }
            >
              {arr.map((ele) => (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="status"
              select
              label="Status"
              helperText="Please select status"
              variant="standard"
              value={inputValue.status}
              onChange={(e) =>
                setInputValue({ ...inputValue, status: e.target.value })
              }
            >
              {arr.map((ele) => (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              ))}
            </TextField>

            <div className="passbook-body-button">
              <button>Close</button>
              <button onClick={() => setSubmitedInput(inputValue)}>
                Apply
              </button>
            </div>
          </div>
        ) : (
          <div className="transaction-data">No Data Available</div>
        )}
      </div>
    </div>
  );
}

export default Passbook;
