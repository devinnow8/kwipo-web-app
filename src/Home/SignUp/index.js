import React from 'react';
import { Form, Input, Button, Image } from 'antd';
import signUpImage from "./signUpImage.png"
import "./index.css"

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <Image src={signUpImage} alt="Sign Up" />
      </div>
      <div className="signup-form">
        <Form
          name="signup-form"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
