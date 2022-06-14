import axios from 'axios';

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
