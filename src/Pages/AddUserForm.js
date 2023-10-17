import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router
import Box from "@mui/material/Box";
import NavBar from "../Components/NavBar";
import authService from "../Services/auth.service";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import SideBar from "../Components/SideBar";
import checkuserAvailibility from "../Services/checkuser-availibility";

function AddUserForm() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.register(
        userName,
        firstName,
        lastName,
        password,
        emailId
      );

      if (response) {
        console.log("successs>>>>>>>>>>");

        toast.success("User registered successfully!", {
          autoClose: 5000,
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          window.location.href = '/AdminPage';
        }, 5000);
      } else {
        console.log("else block");
      }
    } catch (error) {
      console.log("error????????????");
    }
  };

  const checkUserExistence = async (e) => {
    e.preventDefault();
    try {
      const response = await checkuserAvailibility.checkUser(userName);
      if (!response.data) {
        toast.info("User Name already taken!", {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.success("User Name is Available ", {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error checking user existence:", error);
      toast.error("An error occurred. Please try again later.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideBar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
          <h1 className="User-form-h1">Create User Form</h1>
          <Link to="/AddMultipleUsers">
            <button className="upper-right-button">Add Multiple Users</button>
          </Link>
          <form className="Add-User-form" onSubmit={handleFormSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>UserName</label>
                <input
                  className="Add-User-Input"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button
                  onClick={checkUserExistence}
                  className="Check-User-Button"
                  style={{
                    height: '30px',
                    fontSize: '14px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                >
                  Check
                </button>
              </div>
            </div>
            <div>
              <label>
                First Name <br />
              </label>
              <input
                className="Add-User-Input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>
                Last Name <br />
              </label>
              <input
                className="Add-User-Input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {/* <div>
              <label>
                Group <br />
              </label>
              <input
                className="Add-User-Input"
                type="text"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </div> */}
            <div>
              <label>
                Email <br />
              </label>
              <input
                className="Add-User-Input"
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div>
              <label>
                Password <br />
              </label>
              <input
                className="Add-User-Input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="Add-User-Submit-Button">
              Submit
            </button>
          </form>
          <ToastContainer />
        </Box>
      </Box>
    </> 
  );
}

export default AddUserForm;
