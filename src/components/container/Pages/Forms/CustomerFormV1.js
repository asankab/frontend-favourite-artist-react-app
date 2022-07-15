import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import classes from './CustomerFormV1.module.css';
import { toast } from 'react-toastify';

function CustomerFormV1(props) {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [title, setTitle] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);

  const [isValidForm, setIsValidForm] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    console.log('page loaded');
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const isValidForm = formValidation();

    const payload = {
      name: name,
    };

    if (isValidForm) {
      toast.success('Saved successfully!', {
        position: 'top-right',
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    let isValid = false;

    if (event.target.value.trim().length > 0) {
      isValid = true;
    }

    setIsNameValid(isValid);
    setIsNameTouched(true);
  };

  const nameBlurHandler = (event) => {
    setIsNameTouched(true);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    let isValid = false;

    if (event.target.value.trim().length > 0) {
      isValid = true;
    }

    setIsTitleValid(isValid);
    setIsTitleTouched(true);
  };

  const titleBlurHandler = (event) => {
    setIsTitleTouched(true);
  };

  const isInvalidName = !isNameValid && isNameTouched;
  const isInvalidTitle = !isTitleValid && isTitleTouched;

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Item
          label="Name *"
          hasFeedback={isNameTouched}
          validateStatus={isInvalidName ? 'error' : 'success'}
          help={isInvalidName ? 'Name is a required field' : ''}
        >
          <Input
            type="text"
            placeholder="Name"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className="form-control"
          />
        </Form.Item>
        <Form.Item
          label="Title *"
          hasFeedback={isTitleTouched}
          validateStatus={isInvalidTitle ? 'error' : 'success'}
          help={isInvalidTitle ? 'Title is a required field' : ''}
        >
          <Input
            type="text"
            placeholder="Title"
            id="title"
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            className="form-control"
          />
        </Form.Item>
        {/* {isInvalid && <span style={{ color: 'red' }}>Invalid Name</span>} */}
        <br />
        <div className={classes['actionButtonWrapper']}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </>
  );
}

export default CustomerFormV1;
