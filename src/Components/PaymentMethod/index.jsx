import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { experimentalStyled as styled } from '@mui/material/styles'
import { Avatar, IconButton, Typography, Box, Paper, Grid } from '@mui/material'
import './style.scss'
import PaymentDetail from '../PaymentDetail'
import { Link } from 'react-router-dom'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0e0c0d',
  padding: '0.5rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const data = [
  {
    id: 1,
    text: 'Bank Transfer',
    imageSrc: 'http://i.pravatar.cc/300?img=1',
  },
  {
    id: 2,
    text: 'Paytm Wallet',
    imageSrc: 'http://i.pravatar.cc/300?img=2',
  },
  {
    id: 1,
    text: 'Google Pay',
    imageSrc: 'http://i.pravatar.cc/300?img=1',
  },
  {
    id: 1,
    text: 'Phonepe',
    imageSrc: 'http://i.pravatar.cc/300?img=1',
  },
  {
    id: 1,
    text: 'Hawala',
    imageSrc: 'http://i.pravatar.cc/300?img=1',
  },
]
const PaymentMethod = () => {
  return (
    <div className="Payment_method_main">
      <div className="Payment_method_head">
        <div className="Payment_method_title">
          <Link to={'/'}>
            <ArrowCircleLeftIcon sx={{ width: '40px', height: '35px' }} />
          </Link>
          <div className="Payment_method_subtitle">Payment_method</div>
        </div>
      </div>
      <div className="Payment_method_body">
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
              {data.map((val, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>
                    <div className="card_image">
                      <Avatar src={val.imageSrc} alt={val.text} />
                    </div>
                    <h3 className="card_text">{val.text}</h3>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        <PaymentDetail />
      </div>
    </div>
  )
}

export default PaymentMethod
