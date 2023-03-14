import React, { useState } from "react";
import "./index.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";

function Passbook() {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [valueFromDate, setValueFromDate] = useState(null);
  const [valueToDate, setValueToDate] = useState(null);
  const [valueTransactionType, setValueTransactionType] = useState();
  const arr = [1, 2, 3, 4];

  function getdaysdifference(date1, date2) {
    var time_difference = date2?.getTime() - date1?.getTime();
    var days_difference = time_difference / (1000 * 60 * 60 * 24);
    return days_difference;
  }

  console.log(getdaysdifference(valueFromDate?.$d, valueToDate?.$d));

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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From"
                  value={valueFromDate}
                  onChange={(newValue) => {
                    setValueFromDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="To"
                  value={valueToDate}
                  onChange={(newValue) => {
                    setValueToDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>

            <TextField
              id="standard-select-transactiontype"
              select
              label="Transaction Type"
              helperText="Please select your transaction type"
              variant="standard"
              defaultValue={1}
              value={valueTransactionType}
              onSelect={(val) => setValueTransactionType(val)}
            >
              {arr.map((ele) => (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="standard-select-currency"
              select
              label="Status"
              helperText="Please select your currency"
              variant="standard"
              defaultValue={1}
              value={valueTransactionType}
              onSelect={(val) => setValueTransactionType(val)}
            >
              {arr.map((ele) => (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              ))}
            </TextField>

            <div className="passbook-body-button">
              <button>Close</button>
              <button>Apply</button>
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
