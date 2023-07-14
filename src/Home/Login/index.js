
import React, { useState } from 'react';
import './index.css'; 
import { Form, Input, Button, Checkbox,Image } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { loginUsersDetails } from '../../API/function';
import signInImage from "./sign-signin-ca50f83d2f.png"

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({  email: '', password: '' });

  const handleSubmit = () => {
    navigate('/main');
    
    loginUsersDetails(newUser);
    
  };
console.log("newUser", newUser);

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
       <Image src={signInImage} alt="Sign In" />
      </div>
     
      <div className='login-container'>
      <Form form={form} onFinish={handleSubmit} className="login-form">
    
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            name='email'
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
            name='password'
            value={newUser.password}
            onChange={handleUserData}
           
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
          
          Or <a href="http://localhost:3000/signUp">register now!</a>
        </Form.Item>
      </Form>
      </div>
      
    </div>
  );
};

export default Login;


