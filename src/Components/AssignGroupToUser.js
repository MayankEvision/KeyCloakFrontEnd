import React, { useState } from 'react';
import NavBar from '../Components/NavBar'; // Update the file path if necessary
import SideBar from '../Components/SideBar'; // Update the file path if necessary

const AssignGroupToUser = () => {
  const [username, setUsername] = useState('');
  const [groupName, setGroupName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', username, groupName);
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <NavBar /> {/* Add the NavBar component */}
      <SideBar /> {/* Add the SideBar component */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <form onSubmit={handleSubmit} style={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px', borderRadius: '10px', backgroundImage: 'linear-gradient(to bottom, #2d88ff, #4ae8e0)', boxShadow: '5px 5px 15px #888888', marginTop: '20px' }}>
          <h2 style={{ color: 'white' }}>Assign Group to User</h2>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ color: 'white' }}>Username:</label>
            <select
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
            >
              <option value="">Select a username</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="groupName" style={{ color: 'white' }}>Group Name:</label>
            <select
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
            >
              <option value="">Select a group</option>
              <option value="group1">Group 1</option>
              <option value="group2">Group 2</option>
              <option value="group3">Group 3</option>
            </select>
          </div>
          <button type="submit" style={{ marginTop: '20px', backgroundColor: '#1768ac', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
            Assign Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignGroupToUser;
