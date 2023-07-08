import styled from "@emotion/styled";
import { motion } from "framer-motion";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { navVariants } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const CustomAppBar = styled(AppBar)({
  boxShadow: "none"
});

const navItems = ["Home", "Search", "Contacts", "Saved"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogin = () => {
    if (isAuthenticated) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const toggleDrawer = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <CustomAppBar position="static" color="transparent" component="nav">
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box height={{ xs: "28px", sm: "42px" }}>
            <a href="/">
              <img src="/logo.svg" alt="logo" style={{ height: "100%" }} />
            </a>
          </Box>
          <Stack direction="row" alignItems="center" gap={1}>
            <Hidden smUp>
              <IconButton onClick={toggleDrawer} aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <ListMenu navigate={navigate} />
            </Hidden>
            <Button
              variant="contained"
              xs:size="medium"
              sm:size="large"
              color="accent"
              onClick={handleLogin}
            >
              {isAuthenticated ? "logout" : "Login"}
            </Button>
          </Stack>
        </Toolbar>
      </CustomAppBar>
      <Hidden smUp>
        <SwipeableDrawer
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          sx={{ width: "160px" }}
        >
          <ListMenu navigate={navigate} />
        </SwipeableDrawer>
      </Hidden>
    </motion.div>
  );
}

export default Navbar;

const ListMenu = ({ navigate }) => {
  return (
    <Box m={{ xs: 4, sm: 0 }}>
      <List
        component="nav"
        aria-labelledby="main navigation"
        className="nav-links"
      >
        <Box display="flex" gap={1} flexDirection={{ xs: "column", sm: "row" }}>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() =>
                navigate(item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`)
              }
            >
              {item}
            </ListItem>
          ))}
        </Box>
      </List>
    </Box>
  );
};
