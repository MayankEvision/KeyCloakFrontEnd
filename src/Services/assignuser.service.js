import axios from "axios";

class AssignUserService{
    assignUser(){
        const token = localStorage.getItem("loginResponse");

        const authToken = JSON.parse(token);

        const accessToken = authToken.access_token;

        const headers ={
            Authorization: `Bearer ${accessToken}`,
            'Access-Control-Allow-Origin': 'http://localhost:9090'
        }

    return axios.post(`http://localhost:9090/api/user/assignRole`,)
    }
}