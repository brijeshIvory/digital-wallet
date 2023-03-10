import Drawer from "@mui/material/Drawer";
import "./index.scss";
// import Navlogo from "../../assets/img/Navlogo.jpg";
import Divider from "@mui/material/Divider";

function Navbar({ open, setOpen }) {
  return (
    <div className="navbar">
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="navbar_header">
          {/* <img src={Navlogo} alt="navlogo" /> */}
          <h1>Logo</h1>
          <h4>+91 786785444</h4>
          <Divider />
          <h3>Wallet balance</h3>
          <h3>0 </h3>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
