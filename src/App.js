import React, { useState,useEffect,useCallback } from "react";
import { sendMessageNotification,getUsers } from "./API/function"
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { Input } from "antd";
import Multiselect from 'multiselect-react-dropdown'
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
  const [message, setMessage] = useState("");
  const [users,setUsers] = useState([]);
  const [selectedUsers,setSelectedUsers] = useState([])


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

 
  useEffect (() =>{
    fetchData()
   

  }, []);



  const handleMessageChange = ({ target: { value } }) => {
    setMessage(value);
  };

  const handleSend = async () => {
    console.log("first", selectedUsers);
    
    await sendMessageNotification(message, selectedUsers );


  };


  console.log("hccc", typeof(selectedUsers))
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
<div>
  <br/>
  
<label htmlFor="myDropdown">Select an option:</label>


<div>


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
    const updatedSelectedUsers = selectedList.map((selectedOption) => selectedOption.value);
    setSelectedUsers(updatedSelectedUsers);
  }}
  displayValue="label"
/>

</div>

</div>
<br/> 


      <div className="send-container">
     

        <button onClick={handleSend} className="send-button">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default App;
