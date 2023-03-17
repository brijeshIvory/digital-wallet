import React, { useState } from 'react'
import './style.scss'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import CoinIcon from '../../assets/img/coins-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { DepositeAmountValidationSchema } from '../../utills/ValidationSchema'
function Deposit() {
  const [coinValues, setCoinValues] = useState(null)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: DepositeAmountValidationSchema,
    onSubmit: (values) => {
      setCoinValues(JSON.stringify(values.amount, null, 2))
    },
  })

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
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <input
              className="deposit-amount-input"
              type="number"
              name="amount"
              id="standard-required"
              label="Coins"
              variant="standard"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            {formik.errors.amount ? (
              <div className="error_text">{formik.errors.amount}</div>
            ) : null}
            <div style={{ marginBottom: '1rem', fontSize: '14px' }}>
              {' '}
              *Minimum deposit amount is 10 coins{' '}
            </div>

            <button
              className="transfer-button"
              type="submit"
              disabled={!formik.isValid}
              onClick={() => {
                if (coinValues !== null) {
                  navigate(`/choose-payment-method/${coinValues}`)
                }
              }}
            >
              Deposit Conis
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Deposit
