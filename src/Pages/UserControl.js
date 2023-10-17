import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { fetchUserDetails } from "../Services/fetch-user-details-service";
import deleteUserService from "../Services/delete-user-service";

function UserControl() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserDetails()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleDeleteUser = (username) => {
    deleteUserService
      .deleteUserByUserName(username)
      .then(() => {
        const updatedUsers = users.filter((user) => user.username !== username);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <>
      <NavBar />
      <Box height={65} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 style={{ textAlign: "center" }}>Available users in this realm</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.username !== "admin" && (
                        <Button variant="outlined" color="primary">
                          Edit
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.username !== "admin" && (
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDeleteUser(user.username)}
                        >
                          Delete
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <Link to={`/user/${user.username}`}> {/* Link to the UserDetail page */}
                        <Button variant="outlined" color="primary">
                          Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default UserControl;
