import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppStore } from "../appStore";
import { IconButton } from "@mui/material";
import { AiOutlineUserAdd ,AiOutlineProject,AiOutlineFundProjectionScreen} from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { FaPeopleGroup,FaListUl } from "react-icons/fa6";


const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);
  const location = useLocation();

//   const isHR = JSON.parse(localStorage.getItem("user")).role === "ROLE_HR";
//   const userData = JSON.parse(localStorage.getItem("user")).isPresent;
//   const isAdmin = JSON.parse(localStorage.getItem("user")).role === "ROLE_ADMIN";


  const isActive = (path) => location.pathname === path;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
           <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/AddUserForm");
            }}
          >
            
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AiOutlineUserAdd/>
          
                </ListItemIcon>
                <ListItemText primary="Create New User" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            
          </ListItem>


          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/UserControl");
            }}
          >
            
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                    
                    <FaListUl/>
          
                </ListItemIcon>
                <ListItemText primary="View User List" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            
          </ListItem>



          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/AssignUser");
            }}
          >
            
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <GrUserAdmin/>
                   
          
                </ListItemIcon>
                <ListItemText primary="Assign Role to User" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            
          </ListItem>


          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/AssignGroupToUser");
            }}
          >
            
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                    <FaPeopleGroup/>
          
                </ListItemIcon>
                <ListItemText primary="Assign Group to User" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
