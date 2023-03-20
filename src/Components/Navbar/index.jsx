import Drawer from '@mui/material/Drawer'
import './index.scss'
// import Navlogo from "../../assets/img/Navlogo.jpg";
import Divider from '@mui/material/Divider'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { LoginStatus } from '../../App/Redux/Actions/AuthActions'
import { useEffect } from 'react'
function Navbar({ open, setOpen }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const WalletBalance = useSelector(
    (state) => state?.wallet?.wallet_bal?.balance,
  )
  const token = useSelector(
    (state) => state?.user?.loginData?.data?.data[0]?.token,
  )
  useEffect(() => {
    if (token !== undefined) {
      dispatch(LoginStatus(true))
    } else {
      dispatch(LoginStatus(false))
    }
  }, [open, token])
  const list1 = [
    {
      name: 'Profile',
      link: 'profile',
      icon: <PersonOutlineIcon />,
    },
    {
      name: 'PassBook',
      link: 'tabs/reports',
      icon: <PersonAddAlt1Icon />,
    },
    {
      name: 'Are You Interested to be partner?',
      link: 'concern-list',
      icon: <HelpIcon />,
    },
  ]

  const list2 = [
    {
      name: 'Logout',
      link: './profile',
      icon: <LogoutIcon />,
    },
  ]
  return (
    <Drawer open={open} className="navbar">
      <div className="navbar_header">
        {/* <img src={Navlogo} alt="navlogo" /> */}
        <div className="navbar_logo">
          <h2>Logo</h2>
          <ArrowCircleLeftOutlinedIcon
            onClick={() => setOpen(false)}
            sx={{ width: '30px', height: '30px' }}
          />
        </div>

        <div className="navbar_monumber">+917867854445</div>
        <Divider />
        <div className="walletBalancetitle">Wallet Balance</div>
        <div className="walletBalance">{WalletBalance ? WalletBalance : 0}</div>
      </div>
      <div className="navbar_body">
        <div>
          {list1.map((obj) => (
            <Link to={obj.link} key={obj.name}>
              <div className="list">
                <div>{obj.icon}</div>
                <p>{obj.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <Divider />
          <Link>
            <div
              className="list"
              onClick={() => {
                localStorage.clear()
                navigate('/')
                setOpen(false)
              }}
            >
              <LogoutIcon />
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </Drawer>
  )
}

export default Navbar
