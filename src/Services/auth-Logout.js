import axios from "axios";



class AuthLogoutService {

  logout(){
    const token = localStorage.getItem("loginResponse");

    const authToken = JSON.parse(token);

    const accessToken = authToken.access_token;
    
    const refreshToken = authToken.refresh_token;

    const refreshTokenData = { 'token': refreshToken};

    const headers ={
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': 'http://localhost:9090'
    }

    return axios.post(`http://localhost:9090/api/user/logout`,refreshTokenData , {headers});


  }

}

export default new AuthLogoutService();
