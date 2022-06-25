import React from 'react';
import { PageHeader } from 'antd';
import className from './Header.module.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './../../auth/login/LoginButton';
import LogoutButton from './../../auth/login/LogoutButton';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  if (isAuthenticated) {
    if (location.pathname === '/') {
      navigate('/albums');
    }
  }

  return (
    <PageHeader className={className['site-page-header']} title="NatFlix">
      <div className={className.topcorner}>
        {user ? (
          <Avatar src={user?.picture} alt={user?.name} />
        ) : (
          <Avatar icon={<UserOutlined />} />
        )}
        &nbsp;
        <span>{user?.name}</span>
        &nbsp; &nbsp;
        <LoginButton />
        <LogoutButton />
      </div>
    </PageHeader>
  );
}

Header.propTypes = {};

export default Header;
