import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';
const { TextArea } = Input;
import classes from './CustomerForm.module.css';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function CustomerForm(props) {
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');

    // validate input

    const payload = {
      name: name,
      title: title,
      email: email,
      about: about,
    };

    console.log(payload);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleAboutChange = (event) => {
    console.log(event.target.value);
    setAbout(event.target.value);
  };

  const handleCancel = (event) => {
    props.onCancel();

    // setName('');
    // setTitle('');
    // setEmail('');
    // setAbout('');
  };

  return (
    <>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Name *" hasFeedback validateStatus="error">
          <Input
            placeholder="Name"
            id="validating"
            onChange={handleNameChange}
          />
        </Form.Item>

        <Form.Item label="Title *" hasFeedback validateStatus="success">
          <Input
            placeholder="Title"
            id="validating"
            onChange={handleTitleChange}
          />
        </Form.Item>

        <Form.Item label="Email *" hasFeedback validateStatus="success">
          <Input
            placeholder="Email"
            id="validating"
            onChange={handleEmailChange}
          />
        </Form.Item>

        <Form.Item label="About" hasFeedback validateStatus="success">
          <TextArea
            rows={6}
            showCount
            maxLength={100}
            onChange={handleAboutChange}
            placeholder="About"
            id="validating"
          />
        </Form.Item>
        <div className={classes['actionButtonWrapper']}>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
          &nbsp;
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </Form>
    </>
  );
}

CustomerForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default CustomerForm;
