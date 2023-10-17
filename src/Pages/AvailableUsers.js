import React from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import { Box } from "@mui/material";

function AvailableUsers(){
return (
    <>
     <NavBar />
  <Box height={65} />
  <Box sx={{ display: "flex" }}>
    <SideBar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
    <h1 style={{textAlign:"center"}}>...................................Available users in this realm ............................</h1>
    <br></br> <br></br> <br></br> <br></br>
    <h3 style={{textAlign:"center"}}> ------------------------Page Under Construction---------------</h3>
    
    </Box>
    </Box>
    </>
)
}
export default AvailableUsers;  