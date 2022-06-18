import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar(props) {
  return (
    <div className={classes.header}>
      <NavLink className={classes.active} to="/">
        Albums
      </NavLink>{' '}
      &nbsp;
    </div>
  );
}

export default Navbar;
