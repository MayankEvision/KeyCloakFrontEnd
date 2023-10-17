import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { Box, Typography, TextField, Button, Snackbar } from '@mui/material';

import assignuserRoleService from '../Services/assignuser.role.service';

function RoleAssignmentComponent() {
  const [username, setUsername] = useState('');
  const [rolename, setRolename] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleAssignRole = () => {
    assignuserRoleService
      .assignRoleToUser(username, rolename)
      .then((response) => {
        setMessage('Role assigned successfully');
        setOpen(true);
      })
      .catch((error) => {
        setMessage(`Error assigning role: ${error.message}`);
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavBar />
      <Box height={65} />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            <Typography variant="h4" gutterBottom>
              Assign Role to User
            </Typography>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role Name"
              value={rolename}
              onChange={(e) => setRolename(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleAssignRole}>
              Assign Role
            </Button>
          </div>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
}

export default RoleAssignmentComponent;
