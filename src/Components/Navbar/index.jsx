import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import React from "react";

function Navbar({ open, setOpen }) {
  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        hjgjjg
      </Drawer>
    </div>
  );
}

export default Navbar;
