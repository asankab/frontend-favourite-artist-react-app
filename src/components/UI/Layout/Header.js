import React from 'react';
import { PageHeader } from 'antd';
import className from './Header.module.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function Header() {
  return (
    <PageHeader className={className['site-page-header']} title="NatFlix">
      <div className={className.topcorner}>
        <Avatar icon={<UserOutlined />} />
        &nbsp;
        <span>Asanka</span>
      </div>
    </PageHeader>
  );
}

Header.propTypes = {};

export default Header;
