import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar(props) {
  return (
    <div className={classes.header}>
      <NavLink className={classes.active} to="/albums">
        Albums
      </NavLink>
      {/* <NavLink className={classes.active} to="/accounts">
        Transactions
      </NavLink>
      <NavLink className={classes.active} to="/cards">
        Cards
      </NavLink> */}
      &nbsp;
    </div>
  );
}

export default Navbar;
