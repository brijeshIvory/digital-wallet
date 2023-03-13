import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { Avatar, IconButton, Button } from '@mui/material'
import './style.scss'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
const WithdrawalDetail = () => {
  return (
    <div className="withdrawal">
      <div className="withdrawal_top">
        <Toolbar style={{ marginTop: '1rem', marginLeft: '1rem' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
          </IconButton>
          <h1 className="title"> Withdrawal Details </h1>
        </Toolbar>
      </div>
      <div className="withdrawal_bottom">
        <div className="withdrawal_user_detail">
          <div class="withdrawal_user_info">
            <p class="withdrawal_user_name">Kartik</p>
            <p class="withdrawal_user_mobile">+ 9084526396</p>
          </div>
        </div>
        <div class="bank-details-list">
          <div class="bank-detail">
            <Avatar alt="Remy Sharp" src="" sx={{ background: '#FAC000' }}>
              <AccountBalanceIcon></AccountBalanceIcon>
            </Avatar>
            <p class="bank-detail-title">Bank Details</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div class="bank-detail">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p class="bank-detail-title">Paytm Wallet</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div class="bank-detail">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p class="bank-detail-title">Googel Pay</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div class="bank-detail">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p class="bank-detail-title">Phone Pay</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
          <div class="bank-detail">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p class="bank-detail-title">UPI</p>
            <Button type="submit" className="bank-detail-sum">
              Add New
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawalDetail
