import React, { useState } from "react";
import ReactDOM from "react-dom";
import FullWidthTabs from "./FullWidthTabs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Clogo from "./Clogo";
import {
  Select,
  Button,
  TextField,
  FormControl,
  Checkbox,
  InputLabel,
  MenuItem,
  FormControlLabel,
  
} from "@mui/material";

function AdminLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
     <Container maxWidth="md">
          <Box
            sx={{
              padding: 5,
              display: "flex",
              marginTop: 5,
              boxShadow: 10,
              borderRadius: 5,
              width: 500,
              justifyContent: "flex-start",
              marginBottom: 5,
              fontFamily: "monospace",
              fontweight: 400,
              flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center"
            }}
          >
            <div><Clogo /></div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
        <FormControl sx={{ m: 2, minWidth: 200 }}>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    name="uname" required
                  />
                </FormControl>{renderErrorMessage("uname")}
          {/* <label>Username </label>
          <input type="text" name="uname" required /> */}
          
        </div>
        <div className="input-container">
        <FormControl sx={{ m: 2, minWidth: 200 }}>
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    name="pass" required
                  />
                </FormControl>   {renderErrorMessage("pass")}
          {/* <label>Password </label>
          <input type="password" name="pass" required /> */}
       
        </div>
        <div className="button-container">
          <Button
           sx={{
            m: 2,
            minWidth: 210,
            marginBottom: 5,
            lineheight: 10,
            background: "#505868",
          }}
          variant="contained"
          type="submit">
Sign In
          </Button>
          
        </div>
      </form>
      </div>
      </Box>
      </Container>
    
    </>

  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted ? <div><FullWidthTabs /></div> : renderForm}
      </div>
    </div>
  );
}

export default AdminLogin;