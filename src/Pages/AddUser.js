import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUsers } from "../Redux/actions";
//import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState(" ");
  //let navigate = useNavigate();
  let dispatch = useDispatch();
  const { name, email, contact, address } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("Please input all input fields");
    } else {
      setError("");
      dispatch(addUsers(state));
      window.location.replace("/");
    }
  };
  return (
    <div>
      <Box textAlign="center" padding={20}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => window.location.replace("/")}
        >
          Go Back
        </Button>
        <h2>Add User</h2>
        {error && <h4 style={{ color: "red" }}>{error}</h4>}
        <Box
          component="form"
          onSubmit={(e) => hadleSubmit(e)}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={name}
            type="text"
            onChange={handleInputChange}
          />{" "}
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            value={email}
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="contact"
            name="contact"
            variant="outlined"
            value={contact}
            type="number"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="address"
            name="address"
            variant="outlined"
            value={address}
            type="text"
            onChange={handleInputChange}
          />{" "}
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={(e) => hadleSubmit(e)}
          >
            Submit
          </Button>{" "}
        </Box>
      </Box>
    </div>
  );
};

export default AddUser;
