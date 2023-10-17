import React, { useEffect, useState } from "react";
import "../App.css";
import NavBar from "../Components/NavBar";
import userdetailsService from "../Services/userdetails.service";
import SideBar from "../Components/SideBar";
import { Box } from "@mui/material";

function UserDetailsPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data using the userdetailsService
    userdetailsService
      .userdetails()
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
<>
    <NavBar />
    <Box height={65} />
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <div className="user-details-container">
      <div className="user-details-content">
        <h1 className="user-details-heading">Personal Details</h1>
        <div className="user-details-data">
          {loading && <p>Loading user data...</p>}
          {error && <p className="error-message">Error: {error.message}</p>}
          {userData && (
            <div className="user-data">
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
    </Box>
    </Box>
    </>
  );
}

export default UserDetailsPage;
