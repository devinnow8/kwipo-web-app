
import React, { useState } from 'react';
import './index.css'; 
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { newUsersDetails } from '../../API/function';
import loginImage from "./sign-signin-ca50f83d2f.png"

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = () => {
    navigate('/main');
    newUsersDetails(newUser);
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="form">
       <div className="login-image">
        <Image src={loginImage} alt="Login" />
      </div>
      <Form form={form} onFinish={handleSubmit} className="login-form">
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            value={newUser.name}
            onChange={handleUserData}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            value={newUser.email}
            onChange={handleUserData}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Password"
            value={newUser.password}
            onChange={handleUserData}
            size='small'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;


