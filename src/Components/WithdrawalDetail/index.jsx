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
import PaytmTransfer from './PaytmTransfer'
import GooglePayTransfer from './GooglePayTransfer'
import PhonePayTransfer from './PhonePayTransfer'
import UpiTransfer from './UpiTransfer'
import Hawala from '../../assets/img/hawala.png'
import HawalaTransfer from './HawalaTransfer'
import { useSelector } from 'react-redux'
const WithdrawalDetail = () => {
  const [bankFormOpen, setBankFormOpen] = useState(false)
  const [PaytmFormOpen, setPaytmFormOpen] = useState(false)
  const [GooglePayFormOpen, setGooglePayFormOpen] = useState(false)
  const [PhonePeFormOpen, setPhonePeFormOpen] = useState(false)
  const [UpiFormOpen, setUpiFormOpen] = useState(false)
  const [HawalaiFormOpen, setHawalaiFormOpen] = useState(false)
  const Userdeatil = useSelector((state) => state?.user?.userDetail)
  return (
    <>
      <div className="withdraw_head">
        <div className="withdraw_title">
          <Link to={'/'}>
            <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
          </Link>
          <div className="withdraw_subtitle">Withdrawal Details</div>
        </div>
      </div>
      <div className="withdraw_main">
        <div className="withdraw_body">
          <div className="withdrawal_user_detail">
            <div className="withdrawal_user_info">
              <p className="withdrawal_user_name">{Userdeatil?.name}</p>
              <p className="withdrawal_user_mobile">+ {Userdeatil?.phone}</p>
            </div>
          </div>
          <div className="bank-details-list">
            <div className="bank-detail">
              <Avatar alt="Remy Sharp" src="" sx={{ background: '#FAC000' }}>
                <AccountBalanceIcon />
              </Avatar>
              <p className="bank-detail-title">Bank Details</p>
              <Button
                type="submit"
                className="bank-detail-sum"
                onClick={() => setBankFormOpen(true)}
              >
                Add New
              </Button>
            </div>
            <div className="bank-detail">
              <Avatar src={Paytm} alt="Paytm" />
              <p className="bank-detail-title">Paytm Wallet</p>
              <Button
                type="submit"
                className="bank-detail-sum"
                onClick={() => setPaytmFormOpen(true)}
              >
                Add New
              </Button>
            </div>
            <div className="bank-detail">
              <Avatar src={GooglePay} alt="GooglePay" />
              <p className="bank-detail-title">Googel Pay</p>
              <Button
                type="submit"
                className="bank-detail-sum"
                onClick={() => setGooglePayFormOpen(true)}
              >
                Add New
              </Button>
            </div>
            <div className="bank-detail">
              <Avatar src={phone_pe} alt="phone_pe" />
              <p className="bank-detail-title">Phone Pe</p>
              <Button
                type="submit"
                className="bank-detail-sum"
                onClick={() => setPhonePeFormOpen(true)}
              >
                Add New
              </Button>
            </div>
            <div className="bank-detail">
              <Avatar alt="UPI" src={UPI} />
              <p className="bank-detail-title">UPI</p>
              <Button
                type="submit"
                className="bank-detail-sum"
                onClick={() => setUpiFormOpen(true)}
              >
                Add New
              </Button>
            </div>
            <div className="bank-detail">
              <Avatar alt="Hawala" src={Hawala} />
              <p className="bank-detail-title">Hawala</p>
              <Button
                type="submit"
                className="bank-detail-sum"
                onClick={() => setHawalaiFormOpen(true)}
              >
                Add New
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BankTransfer
        bankFormOpen={bankFormOpen}
        setBankFormOpen={setBankFormOpen}
      />
      <PaytmTransfer
        PaytmFormOpen={PaytmFormOpen}
        setPaytmFormOpen={setPaytmFormOpen}
      />
      <GooglePayTransfer
        GooglePayFormOpen={GooglePayFormOpen}
        setGooglePayFormOpen={setGooglePayFormOpen}
      />
      <PhonePayTransfer
        PhonePeFormOpen={PhonePeFormOpen}
        setPhonePeFormOpen={setPhonePeFormOpen}
      />
      <HawalaTransfer
        HawalaiFormOpen={HawalaiFormOpen}
        setHawalaiFormOpen={setHawalaiFormOpen}
      />
      <UpiTransfer UpiFormOpen={UpiFormOpen} setUpiFormOpen={setUpiFormOpen} />
    </>
  )
}

export default WithdrawalDetail
