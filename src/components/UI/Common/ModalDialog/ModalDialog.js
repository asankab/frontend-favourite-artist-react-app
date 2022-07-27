import React from 'react';
import { Modal } from 'antd';
// import { useState } from 'react';
import PropTypes from 'prop-types';

const ModalDialog = (props) => {
  // console.log(props.showDialog);

  return (
    <>
      <Modal
        title={props.title}
        visible={props.showDialog}
        // onOk={props.onOk}
        onCancel={props.onCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        {props.children}
      </Modal>
    </>
  );
};

ModalDialog.propTypes = {
  title: PropTypes.string.isRequired,
  showDialog: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  // onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ModalDialog;
