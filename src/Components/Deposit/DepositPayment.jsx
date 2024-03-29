import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Avatar, Box, Paper, Grid } from "@mui/material";
import Banktransfer from "../../assets/img/bank_transfer.png";
import Paytm from "../../assets/img/paytm.png";
import GooglePay from "../../assets/img/google_pay.png";
import phone_pe from "../../assets/img/phone_pe.png";
import CashDeposit from "../../assets/img/hawala.png";
import UPI from "../../assets/img/upi.png";
import Other from "../../assets/img/payment.png";
import "./style.scss";
import PaymentDetail from "./PaymentDetail";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  padding: "0.5rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DepositPayment = () => {
  const [isBackground, setIsBackground] = useState("");
  const amount = window.location.pathname.split("/")[2];
  const [paymentInfo, setPaymentInfo] = useState("");
  const [paymenyTypeID, setPaymenyTypeID] = useState();

  const depositDetail = useSelector((state) => state?.deposit?.Deposit_detail);

  return (
    <>
      <div className="Payment_method_head">
        <div className="Payment_method_title">
          <Link to={"/"}>
            <ArrowCircleLeftIcon sx={{ width: "40px", height: "35px" }} />
          </Link>
          <div className="Payment_method_subtitle">Payment Method</div>
        </div>
      </div>
      <div className="Payment_method_main">
        <div className="Payment_method_body">
          <div className="payment_method_heading">
            <h3> Choose your payment method </h3>
          </div>
          <div className="subtitle">
            Make Payment of {amount}/- and upload screenshot.
          </div>

          <div className="image_box">
            <Box sx={{ flexGrow: 1, padding: "1rem 0 1rem 0" }}>
              <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 6, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "Banktransfer"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(1);
                      setIsBackground("Banktransfer");
                      setPaymentInfo(
                        `${"Banktransfer"},${depositDetail?.bank_name},${
                          depositDetail?.account_holder_name
                        },${depositDetail?.account_number},${
                          depositDetail?.ifsc_code
                        }`
                      );
                    }}
                  >
                    <div className="card_image">
                      <Avatar src={Banktransfer} alt="bank transfer" />
                    </div>
                    <h3 className="card_text">Bank Transfer</h3>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "Paytm"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(2);

                      setIsBackground("Paytm");
                      setPaymentInfo(
                        `${"Paytm"}, ${depositDetail?.paytm_name},${
                          depositDetail?.paytm_link
                        }`
                      );
                    }}
                  >
                    <div className="card_image">
                      <Avatar src={Paytm} alt="Paytm" />
                    </div>
                    <h3 className="card_text">Paytm Wallet</h3>
                  </Item>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "GooglePay"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(3);

                      setIsBackground("GooglePay");
                      setPaymentInfo(
                        `${"GooglePay"},${depositDetail?.gpay_name},${
                          depositDetail?.gpay_link
                        }`
                      );
                    }}
                  >
                    <div className="card_image">
                      <Avatar src={GooglePay} alt="GooglePay" />
                    </div>
                    <h3 className="card_text">Google Pay</h3>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "phone_pe"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(4);

                      setIsBackground("phone_pe");
                      setPaymentInfo(
                        `${"phone_pe"},${depositDetail?.phonepay_name},${
                          depositDetail?.phonepay_link
                        }`
                      );
                    }}
                  >
                    <div className="card_image">
                      <Avatar src={phone_pe} alt="phone_pe" />
                    </div>
                    <h3 className="card_text">Phone Pe</h3>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "UPI"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(5);

                      setIsBackground("UPI");
                      setPaymentInfo(
                        `${"UPI"},${depositDetail?.bhim_name},${
                          depositDetail?.bhim_link
                        }`
                      );
                    }}
                  >
                    <div className="card_image">
                      <Avatar src={UPI} alt="UPI" />
                    </div>
                    <h3 className="card_text">UPI</h3>
                  </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "CashDeposit"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(6);

                      setIsBackground("CashDeposit");
                    }}
                  >
                    <div className="card_image">
                      <Avatar src={CashDeposit} alt="CashDeposit" />
                    </div>
                    <h3 className="card_text">Cash Deposit</h3>
                  </Item>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                  <Item
                    style={{
                      backgroundColor:
                        isBackground === "Other"
                          ? "rgb(24, 113, 172)"
                          : "#110011",
                    }}
                    onClick={() => {
                      setPaymenyTypeID(7);

                      setIsBackground("Other");
                      setPaymentInfo(
                        `${"Other"},${depositDetail?.other_name},${
                          depositDetail?.other_link
                        }`
                      );
                    }}
                  >
                    <div className="card_image">
                      <Avatar
                        src={Other}
                        alt="Other"
                        style={{ backgroundColor: "#fff" }}
                      />
                    </div>
                    <h3 className="card_text">Other</h3>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </div>
          <PaymentDetail
            isBackground={isBackground}
            paymentInfo={paymentInfo}
            paymenyTypeID={paymenyTypeID}
          />
        </div>
      </div>
    </>
  );
};

export default DepositPayment;
