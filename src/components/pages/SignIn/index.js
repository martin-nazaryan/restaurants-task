import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Form, Input, Button, Divider,
} from 'antd';

import { fakeAuth, openNotification } from '../../../helpers';
import { setUser } from '../../../store/ducks/users';

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

const SignInPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const onFinish = async (values) => {
    try {
      await fakeAuth.authenticate(values);
      dispatch(setUser(values));
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
          onClick={() => setLoading(true)}
        >
          Sign In
        </Button>

        <Divider />
        Don`t have an account?
        {' '}
        <Link to="/sign-up">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default SignInPage;
