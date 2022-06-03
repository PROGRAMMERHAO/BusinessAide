import "./App.css";
import PageLogin from "./LoginForm";
import { useAuth } from "./useAuth";
import { useState, useEffect } from "react";
import Home from "./display";
import RegisterForm from "./registration/registerForm";
import CreateForm from "./submit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import SignIn from "./components/signin/Login";
import ButtonAppBar from "./NavBar";

//import HomePage from "./components/signin/mainpage";

export default function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <Home /> : <ButtonAppBar />}</div>;
}
