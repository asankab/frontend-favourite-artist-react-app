import React from 'react';
import PropTypes from 'prop-types';
import { getItem } from './../../../../utils/localStorageUtil';

function ProtectedPage(props) {
  const token = getItem('token');
  console.log(token);

  return (
    <>
      <h3>This is a protected page</h3>
      <pre>is Authenticated: {token.length > 0 ? 'Yes' : 'No'}</pre>
    </>
  );
}

ProtectedPage.propTypes = {};

export default ProtectedPage;
