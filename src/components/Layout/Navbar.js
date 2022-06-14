import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar(props) {
  return (
    <div className={classes.navbar}>
      <Link to="/">View Albums</Link>
    </div>
  );
}

export default Navbar;
