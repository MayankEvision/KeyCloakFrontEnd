import axios from "axios";

class CheckService {
  checkUser(userName) {
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
       // Add this line for JSON data
    };

    // Make the GET request with the headers
    return axios.get(`http://localhost:9090/api/user/check-username-availability/${userName}`,{ headers });
  }
}

export default new CheckService();
