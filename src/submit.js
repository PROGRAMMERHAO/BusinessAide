import React, { useState } from "react";
import { useAuth } from "./useAuth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Joi from "joi-browser";
import styled from "styled-components";

import PageLogin from "./LoginForm";

const Styles = styled.div`
  background: lavender;
  padding: 20px;
  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 40px 50px;
  }
  button {
    background-color: #ffffff;

    padding: 10px;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    margin: auto;
    width: 100px;
    height: 50px;
  }
`;

const Submit = () => {
  const { signup } = useAuth();
  const { signInWithGoogle } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState(null);
  const schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
  return (
    <div className="App">
      <form onSubmit={(e) => signup(e, name, password)}>
        <heading>Sign Up Form</heading>
        <label>email</label>
        <input
          type="text"
          value={name}
          label="Username"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>password</label>
        <input
          type="text"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          clicktosubmit
        </button>
      </form>
    </div>
  );
};

export default function CreateForm() {
  return (
    <Styles>
      <Submit></Submit>
    </Styles>
  );
}
