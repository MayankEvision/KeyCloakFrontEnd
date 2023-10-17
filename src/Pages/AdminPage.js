import React from "react";
import NavBar from "../Components/NavBar";
import "../App.css";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { Box } from "@mui/material";

function AdminPage() {
  return (
    <>
     <NavBar />
  <Box height={65} />
  <Box sx={{ display: "flex" }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
  <h1 className="Admin-h1">
        ...................Welcome to Control Center.............
      </h1>
      <div className="Admin-Container" style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div className="Admin-Button-Container" >

         
        <img src="control-img.png"  className="Control-Center-img"></img>


        </div>
      </div>
      </Box>
      </Box>
    </>
  );
}

export default AdminPage;
