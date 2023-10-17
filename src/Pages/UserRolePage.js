import React, { useEffect, useState } from "react";
import "../App.css";
import NavBar from "../Components/NavBar";
import userRoleDetailsService from "../Services/user.role.details.service";
import SideBar from "../Components/SideBar";
import { Box } from "@mui/material";

function UserRoleDetailPage() {
  const [roles, setRoles] = useState([]); // Initialize state for roles

  useEffect(() => {
    // Fetch user roles when the component mounts
    userRoleDetailsService.userdetails()
      .then(response => {
        // Assuming the response is an array of roles
        setRoles(response.data);
      })
      .catch(error => {
        console.error("Error fetching user roles:", error);
      });
  }, []);

  return (
  <>
  <NavBar />
  <Box height={65} />
  <Box sx={{ display: "flex" }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
    <div className="user-role-page">
      
      <div className="user-role-content">
        <h2 className="user-role-title">Allowed Roles</h2>
        <ul className="user-role-list">
          {roles.map((role, index) => (
            <li key={index} className="user-role-item">{role}</li>
          ))}
        </ul>
      </div>
    </div>
    </Box>
    </Box>
    </>
  );
}

export default UserRoleDetailPage;
