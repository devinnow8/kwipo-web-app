import React, { useState } from "react";
import { Form, Input, Button, Image, Row, Col } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { loginUsersDetails } from "../../API/function";
import loginImg from "../../Images/login-img.png";
import kwipologo from "../../Images/kwipologo.png";

import "./index.css";
import Loader from "../Loader";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await loginUsersDetails(newUser);
      navigate("/main");
    } catch (err) {}
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Row justify="space-between" align="middle" className="login-form">
      {isLoading && <Loader />}
      <Col span={12} className="login-img">
        <Image src={loginImg} alt="Sign In" width={500} preview={false} />
      </Col>
      <Col span={12}>
        <div className="login-form-content">
          <div justify="center" align="middle">
            <Image
              src={kwipologo}
              alt="logo"
              width={150}
              className="logo"
              preview={false}
            />
          </div>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Email"
                name="email"
                value={newUser.email}
                onChange={handleUserData}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Password"
                name="password"
                value={newUser.password}
                onChange={handleUserData}
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
