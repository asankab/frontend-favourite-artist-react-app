import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { setItem } from './../../../utils/localStorageUtil';

function LogoutButton(props) {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogOut = () => {
    logout();
    setItem('token', '');
  };

  return (
    isAuthenticated && (
      <Button ghost onClick={handleLogOut}>
        Logout
      </Button>
    )
  );
}

LogoutButton.propTypes = {};

export default LogoutButton;
