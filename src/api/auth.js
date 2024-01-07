import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const api = {
  signup: async data => {
    const response = await axios.post(`${baseUrl}/auth/signup`, data);

    return response;
  },
  login: async data => {
    const response = await axios.post(`${baseUrl}/auth/login`, data);

    return response;
  },

  fetchAccessToken: async data => {
    const response = await axios.post(`${baseUrl}/auth/refresh-token`, data);

    return response;
  },

  forgetPasswrod: async data => {
    return axios.post(`${baseUrl}/auth/reset-password-email`, data);
  },
  resetPassword: async (token, data) => {
    return axios.post(`${baseUrl}/auth/reset-password/?token=${token}`, data);
  },
  getUserData: async data => {
    const response = await axios.post(`${baseUrl}/auth/my-data`, data, {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    });

    return response;
  },
};

export default api;
