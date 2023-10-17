// import axios from "axios";


// const API_URL = 'http://localhost:9090'; 

// const token = localStorage.getItem('loginResponse');
// const authToken = JSON.parse(token);
// // const accessToken = authToken.access_token;

// const headers = {
//   Authorization: `Bearer ${accessToken}`,
//   'Access-Control-Allow-Origin': 'http://localhost:9090',
// };



// class assigUserRoleService{

//     assignRoleToUser(username, rolename) {
//         const url = `${API_URL}/api/user/assign-role/${username}/${rolename}`;
//         return axios.post(url, null, { headers }) 
//           .then((response) => {
//             return response.data; 
//           })
//           .catch((error) => {
//             throw error;
//           });
//     }
// }
// export default new assigUserRoleService();