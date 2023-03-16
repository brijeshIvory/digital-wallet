import React, { useState,useEffect } from "react";
import "./index.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { GetClientList } from "../../App/Redux/Actions/HavalaListAction";
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
const dispatch=useDispatch()
const ClientList = useSelector((state) => state?.HawalaReducer?.client_list)
console.log(ClientList,"ClientList")
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
 useEffect(() => {
  dispatch(GetClientList())
 }, [])
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
            <TableContainer component={Paper} sx={{backgroundColor:"#000",border:"1px solid #fff"}}>
              <Table sx={{ maxWidth: 20 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="tableRow">
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
                      className="tableRow"
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
            </TableContainer>
        
          </div>
        )}
      </div>
    </div>
  );
}

export default Passbook;
