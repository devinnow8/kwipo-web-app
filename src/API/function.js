import makeApiCall from "./BaseAPI";

const { REACT_APP_BASE_URL } = process.env;

export const sendMessageNotification = async (message) => {
  let data = new FormData();
  data.append("interest", "hello");
  data.append("title", "hello");
  data.append("body", message);
  data.append("my_channel", "my_channel");
  data.append("my_event", "my_event");
  data.append("message", message);

  console.log(data);

  const url = "https://kwipo.onrender.com/notify/";
  return await makeApiCall("post", url, data, {});
};
