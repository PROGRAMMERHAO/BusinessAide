import "./App.css";
import PageLogin from "./LoginForm";
import { useAuth } from "./useAuth";
import { useState, useEffect } from "react";
import Home from "./display";
import RegisterForm from "./registration/registerForm";

export default function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <Home /> : <RegisterForm />}</div>;
}
