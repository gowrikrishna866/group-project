import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const submitHandler = () => {
    console.log("Submitted Data:", input);
    // you can navigate or do further actions here
  };

  useEffect(() => {
    if (location.state !== null) {
      setInput({
        Email: location.state.val.Email || "",
        Password: location.state.val.Password || "",
      });
    }
  }, [location.state]);

  return (
    <div className="box">
      <h1>ENTER THE INFORMATION</h1>
  
      <TextField
        variant="outlined"
        label="Email"
        onChange={inputHandler}
        name="Email"
        value={input.Email}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Password"
        onChange={inputHandler}
        name="Password"
        value={input.Password}
      />
      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default Login;