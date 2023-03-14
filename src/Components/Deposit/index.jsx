import React, { useState } from 'react'
import './style.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import CoinIcon from '../../assets/img/coins-icon.png'
import { Link } from 'react-router-dom'

function Deposit() {
  const [coinValues, setCoinValues] = useState(null)

  return (
    <div className="deposit_main">
      <div className="deposit_head">
        <div className="deposit_title">
          <Link to={'/'}>
            <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
          </Link>
          <div className="deposit_subtitle">Deposit</div>
        </div>
        <div className="wallet_balance">
          <img src={CoinIcon} alt="coinicon" />
          <div className="wallet_balance-data">
            <div className="wallet_balance-data-title">Wallet Balance</div>
            <div className="wallet_balance-data-amount">0</div>
          </div>
        </div>
      </div>
      <div className="deposit_body">
        <div className="deposit_details">
          <div className="deposit_details-balance">
            Deposit Coins
            <hr />
          </div>
          <input
            className="amount-input"
            type="number"
            placeholder="Coins"
            value={coinValues}
            onChange={(e) => setCoinValues(e.target.value)}
          />
          <Link to={'/choose-payment-method'}>
            <button className="transfer-button">Deposit Conis</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Deposit
