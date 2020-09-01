import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Form, Input, Button, Divider,
} from 'antd';

import { registerNewUser } from '../../../store/ducks/users';
import { openNotification } from '../../../helpers';

import './style.scss';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 6,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 6,
  },
};

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(registerNewUser(values));
      history.push('/');
    } catch (e) {
      setLoading(false);
      openNotification('error', e.message);
    }
  };

  const onFinishFailed = (/* errorInfo */) => {
    setLoading(false);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="sign-in-form"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your full name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          onClick={() => setLoading(true)}
        >
          Sign Up
        </Button>

        <Divider />
        Do you have an account?
        {' '}
        <Link to="/sign-in">Sign in</Link>
      </Form.Item>
    </Form>
  );
};

export default SignUpPage;
