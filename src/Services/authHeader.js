export default function authHeader() {
    const authToken = JSON.parse(localStorage.getItem("loginResponse"));
  
    if (authToken && authToken.access_token) {
      return { Authorization: "Bearer " + authToken.access_token };
    } else {
      return {};
    }
  }