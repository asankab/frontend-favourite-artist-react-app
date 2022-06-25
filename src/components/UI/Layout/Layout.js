import React from 'react';

import Header from './../../../components/UI/Layout/Header';
import Navbar from './../../../components/UI/Layout/Navbar';

function Layout(props) {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
