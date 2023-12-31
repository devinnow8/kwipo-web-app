import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Button, Image, Row, Col } from "antd";
import { sendMessageNotification, getUsers } from "../../API/function";
import Multiselect from "multiselect-react-dropdown";
import kwipologo from "../../Components/Assets/Images/kwipologo.png"
import "./index.css";
import messageImg from "../../Components/Assets/Images/message-img.png"
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
const { TextArea } = Input;

const Main = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getUsers();
      if (res.data) {
        setUsers(res.data);
      }
    } catch (err) {
      console.log("err", err);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSend = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();
      await sendMessageNotification(values.message, selectedUsers);
    } catch (error) {
      console.log("Validation error", error);
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Row justify="space-between" align="middle" className="login-form">
      {isLoading && <Loader />}
      <Col span={12} className="login-img">
        <Image src={messageImg} alt="Sign Up" width={450} />
      </Col>
      <Col span={12}>
        <div className="login-form-content" style={{ width: "unset" }}>
          <div justify="center" align="middle">
            <Image src={kwipologo} alt="logo" width={150} className="logo" />
          </div>
          <Form form={form} onFinish={handleSend}>
            <Form.Item name="selectedUsers">
              <Multiselect
                options={users.map((option) => ({
                  label: option.name,
                  value: option.user_id,
                }))}
                selectedValues={selectedUsers.map((userId) => {
                  const user = users.find((user) => user.user_id === userId);
                  return {
                    label: user ? user.name : "",
                    value: userId,
                  };
                })}
                onSelect={(selectedList) => {
                  const updatedSelectedUsers = selectedList.map(
                    (selectedOption) => selectedOption.value
                  );
                  setSelectedUsers(updatedSelectedUsers);
                }}
                displayValue="label"
              />
            </Form.Item>
            <Form.Item name="message">
              <TextArea
                showCount
                maxLength={100}
                style={{ width: "100%", height: 120, resize: "none" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Send Message
              </Button>
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={handleLogout}
              >
                logout
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Main;
