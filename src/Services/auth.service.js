import axios from "axios";
import { json } from "react-router-dom";
import authHeader from "./authHeader";

class AuthService {
  register(userName, firstName, lastName, password, emailId) {
    // Get the bearer token from localStorage or wherever you store it
    const token = localStorage.getItem("loginResponse");
  
    // Parse the token (assuming it's a JSON string)
    const authToken = JSON.parse(token);
  
    // Access the access_token property from authToken
    const accessToken = authToken.access_token;
  
    // Set up the headers with the bearer token
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': 'http://localhost:9090'
    };

    // Create the payload data
    const data = {
      userName,
      firstName,
      lastName,
      password,
      emailId,
    };
  
    // Make the POST request with the headers and data
    return axios.post(`http://localhost:9090/api/user/create`, data, { headers});
  }
  //   getCurrentUser() {
  //   return JSON.parse(localStorage.getItem("access_token"));
  // }
}

export default new AuthService();
