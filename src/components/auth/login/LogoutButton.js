import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

function LogoutButton(props) {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button ghost onClick={() => logout()}>
        Logout
      </Button>
    )
  );
}

LogoutButton.propTypes = {};

export default LogoutButton;
