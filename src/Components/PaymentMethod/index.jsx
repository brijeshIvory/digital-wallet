import React, { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { experimentalStyled as styled } from '@mui/material/styles'
import { Avatar, Box, Paper, Grid } from '@mui/material'
import Banktransfer from '../../assets/img/bank_transfer.png'
import Paytm from '../../assets/img/paytm.png'
import GooglePay from '../../assets/img/google_pay.png'
import phone_pe from '../../assets/img/phone_pe.png'
import './style.scss'
import PaymentDetail from './PaymentDetail'
import { Link } from 'react-router-dom'
const Item = styled(Paper)(({ theme }) => ({
  padding: '0.5rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const PaymentMethod = () => {
  const [isBackgroundRed, setIsBackgroundRed] = useState('')
  return (
    <div className="Payment_method_main">
      <div className="Payment_method_head">
        <div className="Payment_method_title">
          <Link to={'/'}>
            <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
          </Link>
          <div className="Payment_method_subtitle">Payment Method</div>
        </div>
      </div>
      <div className="Payment_method_body">
        <div className="payment_method_heading">
          <h3> Choose your payment method </h3>
        </div>
        <div className="subtitle">
          Make Payment of 100/- and upload screenshot.
        </div>

        <div className="image_box">
          <Box sx={{ flexGrow: 1, padding: '1rem 0 1rem 0' }}>
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 6, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Item
                  style={{
                    backgroundColor:
                      isBackgroundRed === 'Banktransfer'
                        ? '#fac000'
                        : '#0e0c0d',
                  }}
                  onClick={() => {
                    setIsBackgroundRed('Banktransfer')
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
                      isBackgroundRed === 'Paytm' ? '#fac000' : '#0e0c0d',
                  }}
                  onClick={() => {
                    setIsBackgroundRed('Paytm')
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
                      isBackgroundRed === 'GooglePay' ? '#fac000' : '#0e0c0d',
                  }}
                  onClick={() => {
                    setIsBackgroundRed('GooglePay')
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
                      isBackgroundRed === 'phone_pe' ? '#fac000' : '#0e0c0d',
                  }}
                  onClick={() => {
                    setIsBackgroundRed('phone_pe')
                  }}
                >
                  <div className="card_image">
                    <Avatar src={phone_pe} alt="phone_pe" />
                  </div>
                  <h3 className="card_text">Phone Pay</h3>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
        <PaymentDetail isBackgroundRed={isBackgroundRed} />
      </div>
    </div>
  )
}

export default PaymentMethod
