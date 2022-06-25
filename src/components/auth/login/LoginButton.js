import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getItem, setItem } from './../../../utils/localStorageUtil';
import { Button } from 'antd';

function LoginButton(props) {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  const setToken = async () => {
    const token = await getAccessTokenSilently();
    setItem('token', token);
  };

  if (isAuthenticated) {
    setToken();
  }

  return (
    !isAuthenticated && (
      <Button ghost onClick={loginWithRedirect}>
        Login
      </Button>
    )
  );
}

LoginButton.propTypes = {};

export default LoginButton;
