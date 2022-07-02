import axios from 'axios';
import { CorrelationId } from './../utils/traceId';

export const fetch = async (url) => {
  try {
    const response = await axios.get(
      `${url}&api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const post = async (url, payload) => {
  try {
    url = `${url}&api_key=${process.env.REACT_APP_API_KEY}`;
    const data = JSON.stringify(payload);
    const token = 'token';
    const headers = {
      TraceId: CorrelationId,
      //"token":token
      Authorization: token,
      Accept: '*/*',
      //"Content-Type": "multipart/form-data"
      'Content-Type': 'application/json',
    };

    const response = await axios.post(url, data, headers);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
