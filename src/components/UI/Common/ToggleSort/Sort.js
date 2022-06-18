import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Sort.module.css';
import { Button } from 'antd';
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from '@ant-design/icons';
import messages from '../../../../assests/localized-content/en-US.json';

function Sort(props) {
  const [sortDirection, setSortDirection] = useState('asc');

  const sortDirectionHandler = (event) => {
    if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else if (sortDirection === 'desc') {
      setSortDirection('asc');
    }

    props.onSortToggled(sortDirection);
  };

  return (
    <div className={classes['sort-bar-container']}>
      <div>
        <Button onClick={sortDirectionHandler}>
          {messages.SortTextLabel} &nbsp;{' '}
          {sortDirection === 'asc' ? (
            <SortDescendingOutlined />
          ) : (
            <SortAscendingOutlined />
          )}
        </Button>
      </div>
    </div>
  );
}

Sort.propTypes = {
  onSortToggled: PropTypes.func.isRequired,
};

export default Sort;
