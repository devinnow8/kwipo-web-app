import React, { useState } from "react";
import { Form, Input, Button, Image } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import signUpImage from "./signUpImage.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { newUsersDetails } from "../../API/function";

const SignUp = () => {
  const [form] = Form.useForm();

  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
    newUsersDetails(registerUser);
  };

  const handleUser = (e) => {
    const { name, value } = e.target;
    setRegisterUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <Image src={signUpImage} alt="Sign Up" />
      </div>
      <div className="signup-form">
        <Form form={form} onFinish={handleSubmit} className="login-form">
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              value={registerUser.name}
              onChange={handleUser}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              value={registerUser.email}
              onChange={handleUser}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
              value={registerUser.password}
              onChange={handleUser}
              size="small"
            />
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
