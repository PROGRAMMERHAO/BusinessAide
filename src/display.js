import { Component } from "react";
import { useAuth } from "./useAuth";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import SignInUser from "./components/signin/signin.js";
import CreateForm from "./components/signup/signup.js";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Home() {
  const { signOutWithGoogle } = useAuth();
  const auth = getAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                BusinessAide
              </Link>
            </Typography>
            <Button onClick={signOutWithGoogle} color="inherit">
              sign out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>Welcome {auth.email}!</h1>
    </div>
  );
}

export default Home;
