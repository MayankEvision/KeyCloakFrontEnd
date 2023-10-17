import React, { useState } from "react";
import axios from 'axios';
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Box from '@mui/material/Box';

const AddMultipleUsers = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const extractFileName = (filePath) => {
    const startIndex = filePath.lastIndexOf('\\') > -1 ? filePath.lastIndexOf('\\') : filePath.lastIndexOf('/');
    let filename = filePath.substring(startIndex + 1);
    return filename;
  };

  const handleAddUsers = async () => {
    if (selectedFile) {
      try {
        const token = localStorage.getItem("loginResponse");
        const authToken = JSON.parse(token);
        const accessToken = authToken.access_token;

        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const body = {
          filePath: extractFileName(selectedFile.name), // Extracting the file name from the full path
        };

        const response = await axios.post("http://localhost:9090/api/user/adduserfromfile", body, {
          headers,
        });

        if (response.status === 200) {
          setSuccessMessage(response.data); // Setting the success message to the API response
          setTimeout(() => {
            setSuccessMessage(null); // Clearing the success message after 3 seconds
          }, 3000);
          console.log("Users created successfully!");
        } else {
          console.error("Failed to create users. Server returned an error.");
        }
      } catch (error) {
        console.error("Error creating users:", error);
      }
    }
  };

  return (
    <>
      <NavBar />
      <Box height={65} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
            <h1 style={{ marginTop: '50px', marginBottom: '50px', color: '#192a56' }}>Add Multiple Users</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid #3498db', borderRadius: '5px', padding: '40px', marginBottom: '30px', background: 'linear-gradient(to bottom, #b4d6e3, #a2c7e5, #8bb9e7, #6b92b9, #7db0d1, #a2c7e5)', minWidth: '400px' }}>
              <input type="file" accept=".csv, .xlsx, .xls" onChange={handleFileSelect} style={{ marginBottom: '20px', padding: '10px', width: '80%' }} />
              <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                <button onClick={handleAddUsers} style={{ backgroundColor: '#192a56', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '50%' }}>Add Users</button>
              </div>
              {selectedFile ? (
                <p style={{ color: '#192a56', fontWeight: 'bold', marginTop: '10px' }}>{selectedFile.name}</p>
              ) : (
                <p style={{ color: '#192a56', fontWeight: 'bold', marginTop: '10px' }}>No file chosen</p>
              )}
            </div>
            {successMessage && (
              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px', border: '5px solid green', position: 'fixed', top: '10vh', left: '60%', transform: 'translateX(-50%)' }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '5px' }}>
                  <p style={{ color: '#192a56', fontWeight: 'bold', textAlign: 'center' }}>
                    <span style={{ color: 'green', fontWeight: 'bold', marginRight: '10px', fontSize: '20px' }}>✔</span>
                    {successMessage}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
}

export default AddMultipleUsers;
