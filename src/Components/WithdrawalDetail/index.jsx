import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { Avatar, IconButton, Button } from '@mui/material'
import './style.scss'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { Link } from 'react-router-dom'
import Paytm from '../../assets/img/paytm.png'
import GooglePay from '../../assets/img/google_pay.png'
import phone_pe from '../../assets/img/phone_pe.png'
import UPI from '../../assets/img/upi.png'
import BankTransfer from './BankTransfer'
const WithdrawalDetail = () => {
const [bankFormOpen,setBankFormOpen] =useState(false)
  return (
    <>
    <div className="withdrawal">
      <div className="withdrawal_top">
        <Toolbar style={{ marginTop: '1rem', marginLeft: '1rem' }}>
          <Link to={'/'}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
            </IconButton>
          </Link>
          <h1 className="title"> Withdrawal Details </h1>
        </Toolbar>
      </div>
      <div className="withdrawal_bottom">
        <div className="withdrawal_user_detail">
          <div className="withdrawal_user_info">
            <p className="withdrawal_user_name">Kartik</p>
            <p className="withdrawal_user_mobile">+ 9084526396</p>
          </div>
        </div>
        <div className="bank-details-list">
          <div className="bank-detail">
            <Avatar alt="Remy Sharp" src="" sx={{ background: '#FAC000' }}>
              <AccountBalanceIcon/>
            </Avatar>
            <p className="bank-detail-title">Bank Details</p>
            <Button type="submit" className="bank-detail-sum" onClick={()=>setBankFormOpen(true)}>
              Add New
            </Button>
          </div>
          <div className="bank-detail">
          <Avatar src={Paytm} alt="Paytm"/>
            <p className="bank-detail-title">Paytm Wallet</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div className="bank-detail">
          <Avatar src={GooglePay} alt="GooglePay" />
            <p className="bank-detail-title">Googel Pay</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div className="bank-detail">
          <Avatar src={phone_pe} alt="phone_pe" />
            <p className="bank-detail-title">Phone Pay</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div className="bank-detail">
            <Avatar alt="UPI" src={UPI} />
            <p className="bank-detail-title">UPI</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
        </div>
      </div>
    </div>
    <BankTransfer bankFormOpen={bankFormOpen} setBankFormOpen={setBankFormOpen}/>
    </>
  )
}

export default WithdrawalDetail
