import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonalInfoService from "../Services/PersonalInfoService";
import NavBar from "../Components/NavBar";
import { Box } from "@mui/material";
import SideBar from "../Components/SideBar";


const userDetailsStyle = {
  container: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 5px #aaa",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  evenRow: {
    backgroundColor: "#f2f2f2",
  },
};

const headerStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px",
  textAlign: "center",
  fontSize: "24px",
  margin: "0",
  borderRadius: "5px 5px 0 0",
};

const footerStyle = {
  padding: "10px",
  backgroundColor: "#f2f2f2",
  borderRadius: "0 0 5px 5px",
};

function UserDetailsPage() {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [userRoleNames, setUserRoleNames] = useState([]);
  const [userGroupNames, setUserGroupNames] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetailsData = await PersonalInfoService.getUserDetailsByUsername(username);
        setUserDetails(userDetailsData);

        // Fetch user role names
        const userRoleNamesData = await PersonalInfoService.getUserRoleNames(username);
        setUserRoleNames(userRoleNamesData);

        // Fetch user group names
        const userGroupNamesData = await PersonalInfoService.getUserGroupNames(username);
        setUserGroupNames(userGroupNamesData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <>
      <NavBar />
      <Box height={65} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <div style={userDetailsStyle.container}>
          <div style={userDetailsStyle.buttonContainer}>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "20px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              Assign More Group
            </button>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "20px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Assign More Role
            </button>
          </div>
          <h2 style={headerStyle}>User Details</h2>
          {userDetails && (
            <table style={userDetailsStyle.table}>
              <tbody>
                <tr style={userDetailsStyle.evenRow}>
                  <td>Username: </td>
                  <td>{userDetails.username}</td>
                </tr>
                <tr>
                  <td>ID: </td>
                  <td>{userDetails.id}</td>
                </tr>
                <tr>
                  <td>First Name: </td>
                  <td>{userDetails.firstName}</td>
                </tr>
                <tr style={userDetailsStyle.evenRow}>
                  <td>Last Name: </td>
                  <td>{userDetails.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userDetails.email}</td>
                </tr>
              </tbody>
            </table>
          )}

          <h2 style={headerStyle}>User Role Names</h2>
          <ul>
            {userRoleNames.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>

          <h2 style={headerStyle}>User Group Names</h2>
          <ul>
            {userGroupNames.map((group, index) => (
              <li key={index}>{group}</li>
            ))}
          </ul>
          <div style={footerStyle}></div>
        </div>
      </Box>
    </>
  );
}

export default UserDetailsPage;
