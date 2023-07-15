import makeApiCall from "./BaseAPI";

export const sendMessageNotification = async (message, selectedUserID) => {
  console.log(selectedUserID, "selectedUserID");
  let data = new FormData();

  data.append("interest", "hello");
  data.append("user_ids", JSON.stringify(selectedUserID));
  data.append("title", "hello");
  data.append("body", message);
  data.append("my_channel", "my_channel");
  data.append("my_event", "my_event");
  data.append("message", message);

  const url = "https://kwipo.onrender.com/notify/";
  return await makeApiCall("post", url, data, {});
};

export const getUsers = async () => {
  const url = "https://kwipo.onrender.com/listuser/";
  return await makeApiCall("get", url);
};

export const newUsersDetails = async (User) => {
  let data = new FormData();
  data.append("name", User.name);
  data.append("email", User.email);
  data.append("password", User.password);

  const url = "https://kwipo.onrender.com/createuser/";
  return await makeApiCall("post", url, data, {});
};

export const loginUsersDetails = async (User) => {
  let data = new FormData();
  data.append("email", User.email);
  data.append("password", User.password);
  console.log("user", User);
  console.log("datat", data);

  const url = "https://kwipo.onrender.com/adminlogin/";
  return await makeApiCall("post", url, data, {});
};
