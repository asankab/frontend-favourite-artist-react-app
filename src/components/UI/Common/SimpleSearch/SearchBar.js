import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './SearchBar.module.css';
import { Input } from 'antd';
const { Search } = Input;
import messages from '../../../../assests/localized-content/en-US.json';

function SearchBar(props) {
  const [, setSearchTerm] = useState('');

  const filterChangeHandler = (searchText) => {
    props.onSearch(searchText);
    setSearchTerm(searchText);
  };

  const filterResetHandler = (event) => {
    props.onSearch('');
    setSearchTerm('');
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes['search-bar']}>
      <form onSubmit={submitHandler}>
        <Search
          placeholder={messages.InputSearchTextHere}
          size="large"
          onSearch={filterChangeHandler}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              filterChangeHandler;
            }
          }}
          autoFocus
          enterButton
        />

        {/* <Button onClick={filterResetHandler}>Reset</Button> */}
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
