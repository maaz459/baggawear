import React, { Component } from 'react';
import Router from './router/index';
import api from './api/auth';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // Regenerate access token
    const fetchAccessToken = async () => {
      try {
        const refreshToken = localStorage.getItem('baggaWearToken');
        if (!refreshToken) {
          throw new Error('Refresh token not found');
        }
        const response = await api.fetchAccessToken({ refreshToken });
        return response?.data;
      } catch (error) {
        return error;
      }
    };

    // Get user data and set in redux state
    const fetchUserData = async accessToken => {
      try {
        const { data } = await api.getUserData({ accessToken });
        console.log(data);
        return data;
      } catch (error) {
        return null;
      }
    };

    const fetchData = async () => {
      const tokens = await fetchAccessToken();
      if (tokens?.refresh) {
        localStorage.setItem('baggaWearToken', tokens?.refresh?.token);
        localStorage.setItem('baggaWearToken_exp', tokens?.refresh?.expires);
      }

      if (tokens?.access?.token) {
        fetchUserData(tokens.access.token);
      }
      return null;
    };

    fetchData();
  }

  render() {
    return <Router />;
  }
}

export default App;
