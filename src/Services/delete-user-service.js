import axios from 'axios';

const BASE_URL = 'http://localhost:9090'; // Replace with your API's base URL

const deleteUserByUsername = async (username) => {
  try {
    const token = localStorage.getItem("loginResponse");
    const authToken = JSON.parse(token);
    const accessToken = authToken.access_token;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.delete(`${BASE_URL}/delete-user/${username}`,
    {headers});

    return response.data; 
  } catch (error) {
    
    throw error;
  }
};

export default {
  deleteUserByUsername,
};
