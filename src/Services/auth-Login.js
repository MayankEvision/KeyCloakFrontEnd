import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class LoginAuthService {
  async login(username, password) {
    const response = await axios.post("http://localhost:9090/api/user/login", {
      username,
      password,
    });

    if (response.data) {
      localStorage.setItem("loginResponse", JSON.stringify(response.data));
    }
    return response.data;
  }
}

export default new LoginAuthService();