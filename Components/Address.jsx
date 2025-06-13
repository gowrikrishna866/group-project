
import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Address = (props) => {
  const [input, setInput] = useState({
    Name: "",
    Address: "",    
    City: "",
    Phone: "",
    Pin: "",
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
        Name: location.state.val.Name || "",
        Address: location.state.val.Address || "",
        city: location.state.val.City || "",
        phone: location.state.val.Phone || "",
        Pin: location.state.val.Pin || "",
      });
    }
  }, [location.state]);

  return (
    <div className="box">
      <h1>ENTER THE DETAILS</h1>
      

      <TextField
        variant="outlined"
        label="Name"
        onChange={inputHandler}
        name="Name"
        value={input.Name}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Address"
        onChange={inputHandler}
        name="Address"
        value={input.Address}
      />
      <br />
      <br />
       <TextField
        variant="outlined"
        label="City"
        onChange={inputHandler}
        name="City"
        value={input.City}
      />
      <br />
      <br />
       <TextField
        variant="outlined"
        label="Phone"
        onChange={inputHandler}
        name="Phone"
        value={input.Phone}
      />
      <br />
      <br />
       <TextField
        variant="outlined"
        label="Pin"
        onChange={inputHandler}
        name="Pin"
        value={input.Pin}
      />
      <br />
      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default Address;
