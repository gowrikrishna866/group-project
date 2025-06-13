import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = (props) => {
  const [input, setInput] = useState({
    Bank: "",
    UPI_ID: "",
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
        Email: location.state.val.Bank || "",
        Password: location.state.val.UPIID || "",
      });
    }
  }, [location.state]);

  return (
    <div className="box">
      <h1>ENTER THE  BANK INFORMATION</h1>
  
      <TextField
        variant="outlined"
        label="Bank"
        onChange={inputHandler}
        name="Bank"
        value={input.Bank}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="UPI_ID"
        onChange={inputHandler}
        name="UPI_ID"
        value={input.UPI_ID}
      />
      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default Payment;