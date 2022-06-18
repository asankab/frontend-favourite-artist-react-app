import React from 'react';
import { Spin } from 'antd';
import classes from './Spinner.module.css';

function Spinner(props) {
  return (
    <div className={classes['spinner-container']}>
      <Spin tip="Loading..."></Spin>
    </div>
  );
}

export default Spinner;
