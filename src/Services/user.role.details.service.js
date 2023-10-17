import axios from "axios";

class UserRoleDetailsService {

userdetails(){
    const token = localStorage.getItem("loginResponse");

    const authToken = JSON.parse(token);

    const accessToken = authToken.access_token;
   
    const headers ={
        Authorization: `Bearer ${accessToken}`,
    }

return axios.post(`http://localhost:9090/api/user/getRole`, null, {headers});

}

}

export default new UserRoleDetailsService();