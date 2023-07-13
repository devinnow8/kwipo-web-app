import React, { useState } from "react";
import { sendMessageNotification } from "./API/function"
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { Input } from "antd";
const { TextArea } = Input;

const beamsClient = new PusherPushNotifications.Client({
  instanceId: "e9131849-c6fa-4fba-830d-c3e2fda3598d",
});

beamsClient
  .start()
  .then(() => beamsClient.addDeviceInterest("hello"))
  .then(() => console.log("Successfully registered and subscribed!"))
  .catch(console.error);

const App = () => {
  const [message, setMessage] = useState();

  const handleMessageChange = ({ target: { value } }) => {
    setMessage(value);
  };

  const handleSend = async () => {
    await sendMessageNotification(message);
  };

  return (
    <div className="container">
      <div className="textarea">
        <TextArea
          showCount
          maxLength={100}
          value={message}
          onChange={handleMessageChange}
          style={{
            width: 500,
            height: 120,
            resize: "none",
          }}
        />
      </div>
      <div className="send-container">
        <button onClick={handleSend} className="send-button">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default App;
