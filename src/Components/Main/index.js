import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Button, Image } from "antd";
import { sendMessageNotification, getUsers } from "../../API/function";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import Multiselect from "multiselect-react-dropdown";
import Message from "./download.jpeg";
import "./index.css";
const { TextArea } = Input;

const beamsClient = new PusherPushNotifications.Client({
  instanceId: "e9131849-c6fa-4fba-830d-c3e2fda3598d",
});

beamsClient
  .start()
  .then(() => beamsClient.addDeviceInterest("hello"))
  .then(() => console.log("Successfully registered and subscribed!"))
  .catch(console.error);

const Main = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await getUsers();
      if (res.data) {
        setUsers(res.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSend = async () => {
    try {
      const values = await form.validateFields();
      await sendMessageNotification(values.message, values.selectedUsers);
    } catch (error) {
      console.log("Validation error", error);
    }
  };

  return (
    <div className="container">
      <div className="signup-image">
        <Image src={Message} alt="Sign Up" />
      </div>
      <Form form={form} onFinish={handleSend}>
        <Form.Item name="message">
          <TextArea
            showCount
            maxLength={100}
            style={{ width: 500, height: 120, resize: "none" }}
          />
        </Form.Item>

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

        <Form.Item>
          <Button type="primary" htmlType="submit" className="send-button">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Main;
