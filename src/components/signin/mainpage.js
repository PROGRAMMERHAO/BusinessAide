import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import SignIn from "./Login";

import CreateForm from "./../signup/signup";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a Link="/">Home</a>
      </li>
      <li>
        <a Link="/products">SignUp</a>
      </li>
      <li>
        <a Link="/posts/2018/06">SignIn</a>
      </li>
    </ul>
  );
};

export default NavBar;
export function HomePage() {
  return (
    <div>
      <Link to="components/signin/Login/">LoginPage</Link>
      <Routes>
        <Route path="components/signin/Login" element={<SignIn />}>
          <Route path="/signup" element={<CreateForm />} />
        </Route>
      </Routes>
    </div>
  );
}
