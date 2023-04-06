import React, { useState, useEffect } from "react";
import "./index.scss";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { getTransactions } from "../../App/Redux/Actions/WalletActions";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TransactionDetails from "../TransactionDetails";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TablePagination from "@mui/material/TablePagination";

const Data = [
  {
    Balance: "60",
    Date: "2023-03-18",
    Deposit: "30",
    Note: "Commission",
    Remarks: null,
    Withdraw: "0",
  },
  {
    Balance: "1000",
    Date: "2023-03-19",
    Deposit: "0",
    Note: "Commission",
    Remarks: null,
    Withdraw: "50",
  },
  {
    Balance: "300",
    Date: "2023-03-20",
    Deposit: "30",
    Note: "Commission",
    Remarks: null,
    Withdraw: "0",
  },
  {
    Balance: "890",
    Date: "2023-03-21",
    Deposit: "0",
    Note: "Commission",
    Remarks: null,
    Withdraw: "310",
  },
];

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function createTimeStamp(myDate) {
  myDate = myDate.split("-");
  let newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);
  return newDate.getTime();
}

function Passbook() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [page, setPage] = useState(0);

  const [submitedInput, setSubmitedInput] = useState({});
  const [currentSelectedTransaction, setCurrentSelectedTransaction] =
    useState();
  const [openTransactionDetail, setOpenTransactionDetail] = useState(false);

  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [filterMode, setFilterMode] = useState(false);
  const [filteredData, setfilteredData] = useState([]);

  const TransactionList = useSelector(
    (state) => state?.transactionData?.transactions?.data
  );
  const userId = useSelector((state) => state?.user?.userDetail?.id);

  const dateAfterYear = new Date();
  dateAfterYear.setFullYear(inputValue.startDate.getFullYear() + 1);

  useEffect(() => {
    if (userId) {
      dispatch(
        getTransactions({
          start_date: null,
          end_date: null,
          user_id: userId,
        })
      );
    }
  }, [userId]);

  const handleChangePage = (e, newPage) => {
    e.preventDefault();
    setPage(newPage);
  };

  const filterData = (minDate, maxDate, Data) => {
    const arr = minDate.split("-");
    arr[2] = (Number(arr[2]) - 1).toString();
    const newMinDate = arr.join("-");
    const min = Date.parse(newMinDate);
    const max = Date.parse(maxDate);
    const filteredData = Data?.filter(
      (obj) =>
        createTimeStamp(obj.Date) >= min && createTimeStamp(obj.Date) <= max
    );
    return filteredData;
  };

  useEffect(() => {
    if (submitedInput !== {}) {
      const temp = filterData(
        formatDate(submitedInput.startDate),
        formatDate(submitedInput.endDate),
        TransactionList
      );

      setfilteredData(temp);
    }
  }, [submitedInput]);

  const length = filterMode
    ? filteredData?.length
    : TransactionList?.length !== undefined && TransactionList?.length;

  return (
    <div className="passbook-main">
      <div className="passbook-head">
        <div className="passbook-title">
          <Link to={"/"} className="passbook_subtitle">
            <ArrowCircleLeftIcon />
          </Link>
          <div className="passbook_subtitle">Passbook</div>
        </div>
      </div>
      <div className="passbook-body">
        <div className="passbook-body-head">
          <div style={{ fontSize: "18px" }}>Transactions</div>

          {filterMode ? (
            <button
              onClick={() => {
                setFilterMode(false);
                setIsFilterClicked(false);
                setfilteredData([]);
              }}
            >
              <>Filter </> <CloseOutlinedIcon />
            </button>
          ) : (
            <button onClick={() => setIsFilterClicked(true)}>Filter</button>
          )}
        </div>

        <div className="transaction-data">
          {filteredData?.length === 0 && filterMode ? (
            <div className="transaction-no-data-available">
              {"No data available between these dates"}
            </div>
          ) : (
            <>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "#3d4562", border: "1px solid #fff" }}
              >
                <Table sx={{ maxWidth: 20 }} aria-label="simple table">
                  <TableHead>
                    <TableRow className="tableRow">
                      <TableCell>Date</TableCell>
                      <TableCell>Deposit</TableCell>
                      <TableCell>Withdraw</TableCell>
                      <TableCell>Balance</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredData && filteredData?.length !== 0 ? (
                      filteredData
                        ?.slice(page * 5, page * 5 + 5)
                        ?.map((transaction, idx) => (
                          <TableRow
                            key={idx}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                            className="tableRow"
                          >
                            <TableCell component="th" scope="row">
                              {transaction.Date}
                            </TableCell>

                            <TableCell align="right">
                              {transaction.Deposit}
                            </TableCell>
                            <TableCell align="right">
                              {transaction.Withdraw}
                            </TableCell>
                            <TableCell align="right">
                              {transaction.Balance}
                            </TableCell>
                            <TableCell align="right">
                              <button
                                className="detail-button"
                                onClick={() => {
                                  setCurrentSelectedTransaction(transaction);
                                  setOpenTransactionDetail(true);
                                }}
                              >
                                Details
                              </button>
                            </TableCell>
                          </TableRow>
                        ))
                    ) : TransactionList?.length !== 0 ? (
                      TransactionList?.slice(page * 5, page * 5 + 5)?.map(
                        (transaction, idx) => (
                          <TableRow
                            key={idx}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                            className="tableRow"
                          >
                            <TableCell component="th" scope="row">
                              {transaction.Date}
                            </TableCell>
                            <TableCell align="right">
                              {transaction.Deposit}
                            </TableCell>

                            <TableCell align="right">
                              {transaction.Withdraw}
                            </TableCell>
                            <TableCell align="right">
                              {transaction.Balance}
                            </TableCell>
                            <TableCell align="right">
                              <button
                                className="detail-button"
                                onClick={() => {
                                  setCurrentSelectedTransaction(transaction);
                                  setOpenTransactionDetail(true);
                                }}
                              >
                                Details
                              </button>
                            </TableCell>
                          </TableRow>
                        )
                      )
                    ) : (
                      <div className="no-record-found">No Records Found</div>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                component="div"
                count={length}
                rowsPerPage={5}
                page={page}
                onPageChange={handleChangePage}
                labelRowsPerPage={false}
                rowsPerPageOptions={[]}
                sx={{
                  backgroundColor: "#3d4562",
                  color: "#cecaca",
                  border: "1px solid #fff",
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                }}
              />
            </>
          )}
        </div>
        {isFilterClicked && (
          <div>
            <div className="passbook-body-date">
              <DatePicker
                selectsStart
                label="from"
                selected={inputValue.startDate}
                onChange={(e) => {
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

            <div className="passbook-body-button">
              <button
                onClick={() => {
                  setIsFilterClicked(false);
                  setInputValue({
                    startDate: new Date(),
                    endDate: new Date(),
                  });
                }}
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  setSubmitedInput(inputValue);
                  setIsFilterClicked(false);
                  setInputValue({
                    startDate: new Date(),
                    endDate: new Date(),
                  });
                  setFilterMode(true);
                }}
              >
                APPLY
              </button>
            </div>
          </div>
        )}
      </div>
      <TransactionDetails
        openTransactionDetail={openTransactionDetail}
        setOpenTransactionDetail={setOpenTransactionDetail}
        details={currentSelectedTransaction}
      />
    </div>
  );
}

export default Passbook;
