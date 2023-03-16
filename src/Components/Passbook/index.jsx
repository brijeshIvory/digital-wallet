import React, { useState } from "react";
import "./index.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const validationSchema = yup.object().shape({
//   startDate: yup.string().required("Required !"),
//   endDate: yup.string().required("Required !"),
//   transactionType: yup.string().required("Required !"),
//   status: yup.string().required("Required !"),
// });
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
          <Link to={"/"}>
          <ArrowCircleLeftIcon />
          </Link>
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
          <div className="transaction-data">
            {/* <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 300 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Transaction Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Deposit</TableCell>
                    <TableCell>Withdraw</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}
            <table className="transaction-data-table">
              <tr>
                <th className="transaction-data-table-date">Date</th>
                <th className="transaction-data-table-transaction-type">
                  Transaction Type
                </th>
                <th className="transaction-data-table-amount">Amount</th>
                <th className="transaction-data-table-deposit">Deposit</th>
                <th className="transaction-data-table-withdraw">Withdraw</th>
              </tr>
              <tr>
                <td className="transaction-data-table-date">02/23/2022</td>
                <td className="transaction-data-table-transaction-type">
                  Gpay
                </td>
                <td className="transaction-data-table-amount">230</td>
                <td className="transaction-data-table-deposit">yes</td>
                <td className="transaction-data-table-withdraw">-</td>
              </tr>
              <tr>
                <td className="transaction-data-table-date">05/28/2022</td>
                <td className="transaction-data-table-transaction-type">
                  paytm
                </td>
                <td className="transaction-data-table-amount">90</td>
                <td className="transaction-data-table-deposit">-</td>
                <td className="transaction-data-table-withdraw">yes</td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Passbook;
