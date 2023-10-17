import axios from "axios";

const API_BASE_URL = "http://localhost:9090";

class PersonalInfoService {
  getAccessToken() {
    const token = localStorage.getItem("loginResponse");
    const authToken = JSON.parse(token);
    const accessToken = authToken.access_token;
    return accessToken;
  }

  getUserDetailsByUsername(username) {
    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Allow-Origin": "http://localhost:9090",
    };
    return axios
      .get(`${API_BASE_URL}/api/user/user-details`, {
        params: {
          username: username,
        },
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return null;
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        return null;
      });
  }

  getUserRoleNames(username) {
    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Allow-Origin": "http://localhost:9090",
    };
    return axios
      .get(`${API_BASE_URL}/api/user/user-role-names`, {
        params: {
          username: username,
        },
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return [];
      })
      .catch((error) => {
        console.error("Error fetching user role names:", error);
        return [];
      });
  }

  getUserGroupNames(username) {
    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Allow-Origin": "http://localhost:9090",
    };
    return axios
      .get(`${API_BASE_URL}/api/user/user-group-names`, {
        params: {
          username: username,
        },
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return [];
      })
      .catch((error) => {
        console.error("Error fetching user group names:", error);
        return [];
      });
  }
}

export default new PersonalInfoService();
