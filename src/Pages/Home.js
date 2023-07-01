import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Box } from "@mui/material";
import { getSingleUsers } from "../Redux/actions";
//import { useNavigate } from "react-router-dom";

import { deleteUsers, loadUsers } from "../Redux/actions";
import Counter from "../components/Counter";
//import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  let dispatch = useDispatch();
  // const navigate = useNavigate();
  //const [searchTerm, setSearchTerm] = useState("");
  const { users } = useSelector((state) => state);
 
  //API Calling

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  
  const handleDelete = (id) => {
    if (window.confirm("Are You Sure Want To Delete The User ? ")) {
      dispatch(deleteUsers(id));
    }
  };

  const editClick = (user) => {
    dispatch(getSingleUsers(user.id));
    window.location.replace(`/edituser/${user.id}`);
  };
  // const searchTableData = (e) => {
  //   if (e.target.value) {
  //     const searchUser = e.target.value;
  //     const matchedUsers = users.filter((user) =>
  //       user.userName.toLowerCase().includes(searchUser.toLowerCase())
  //     );
  //     // dispatch(handleSearchUsers(matchedUsers));
  //   }
  // };

  return (
    <div className="">
      {/* <div className="search-container  ">
        <TextField
          className=""
          style={{ padding: 30 }}
          sx={{ width: "50%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search users"
        />
      </div> */}
      <div className="">
        <Box textAlign="center">
          <Button
            variant="contained"
            style={{ padding: 10, marginTop: 30 }}
            color="primary"
            onClick={() => window.location.replace("/adduser")}
          >
            Add User
          </Button>
          <Counter />
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700, marginTop: 10 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>

              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.name}>
                  <StyledTableCell component="th" scope="row">
                    {user.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button color="primary" onClick={() => editClick(user)}>
                        Edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
