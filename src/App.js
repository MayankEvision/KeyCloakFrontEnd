import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from './Components/LoginForm';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';
import AddUserForm from './Pages/AddUserForm';
import AssignUser from './Pages/AssignUser';
import AvailableUsers from './Pages/AvailableUsers';
import UserRoleDetailPage from './Pages/UserRolePage';
import UserControl from './Pages/UserControl';
import AddMultipleUsers from './Services/AddMultipleUsers';
import AssignGroupToUser from './Components/AssignGroupToUser';
import UserDetailsPage from './Pages/UserDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/AddUserForm" element={<AddUserForm />} />
          <Route path="/AssignUser" element={<AssignUser />} />
          <Route path="/AvailableUsers" element={<AvailableUsers />} />
          <Route path="/UserRoleDetailPage" element={<UserRoleDetailPage />} />
          <Route path="/UserControl" element={<UserControl />} />
          <Route path="/AddMultipleUsers" element={<AddMultipleUsers />} />
          <Route path="/AssignGroupToUser" element={<AssignGroupToUser />} /> {/* Add this route */}
          <Route path="/user/:username" element={<UserDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
