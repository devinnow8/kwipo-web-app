import axios from "axios";

const makeApiCall = async (method, url, data = {}, additionalHeaders = {}) => {
  const headersWithContentType = {
    "Content-Type": "application/x-www-form-urlencoded",
    ...additionalHeaders,
  };
  const config = {
    method,
    maxBodyLength: Infinity,
    url,
    headers: headersWithContentType,
    data,
  };
  return await axios.request(config);
};

export default makeApiCall;
