import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Button } from 'antd';
const { TextArea } = Input;
import classes from './CustomerForm.module.css';
import { toast } from 'react-toastify';

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
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [nameError, setNameError] = useState({});
  const [titleError, setTitleError] = useState({});

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    setIsInitialLoad(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidForm = formValidation();

    const payload = {
      name: name,
      title: title,
    };

    console.log(payload);

    if (isValidForm) {
      toast.success('Saved successfully!', {
        position: 'top-right',
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  const formValidation = () => {
    const nameError = {};
    const titleError = {};

    let isValid = true;

    if (name.trim().length < 5) {
      nameError.firstNameTooShort = 'name is too short';
      isValid = false;
    }

    if (name.trim().length > 10) {
      nameError.firstNameTooLong = 'name is too long';
      isValid = false;
    }

    if (title.trim().length < 5) {
      titleError.titleTooShort = 'title is too short';
      isValid = false;
    }

    if (title.trim().length > 10) {
      titleError.titleTooLong = 'title is too long';
      isValid = false;
    }

    setNameError(nameError);
    setTitleError(titleError);
    setIsInitialLoad(false);
    setIsValidForm(isValid);

    return isValid;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    formValidation();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    formValidation();
  };

  const handleCancel = (event) => {
    // setName('');
    // setTitle('');
    // setEmail('');
    // setAbout('');

    props.onCancel();
  };

  const nameValidationError =
    nameError['firstNameTooShort'] || nameError['firstNameTooLong'];

  const titleValidationError =
    titleError['titleTooShort'] || titleError['titleTooLong'];

  return (
    <>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item
          label="Name *"
          hasFeedback={!isInitialLoad}
          validateStatus={nameValidationError ? 'error' : 'success'}
          help={nameValidationError}
        >
          <Input
            placeholder="Name"
            id="name"
            onChange={handleNameChange}
            onBlur={handleNameChange}
          />
        </Form.Item>

        <Form.Item
          label="Title *"
          hasFeedback={!isInitialLoad}
          validateStatus={titleValidationError ? 'error' : 'success'}
          help={titleValidationError}
        >
          <Input
            placeholder="Title"
            id="title"
            onChange={handleTitleChange}
            onBlur={handleTitleChange}
          />
        </Form.Item>
        <br />
        <div className={classes['actionButtonWrapper']}>
          <Button type="primary" disabled={!isValidForm} onClick={handleSubmit}>
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
