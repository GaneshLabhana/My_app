import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const deletedUsers = () => ({
  type: types.DELETE_USERS,
});
const addedUsers = (users) => ({
  type: types.ADD_USERS,
});
const updatedUsers = (users) => ({
  type: types.UPDATE_USERS,
});
const getUser = (user) => ({
  type: types.GET_SINGLE_USERS,
  payload: user,
});
// const searchedUser = (user) => ({
//   type: types.SEARCH_USERS,
//   payload: user,
// });
export const loadUsers = () => {
  return function (dispatch) {
    console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log(error));
  };
};
export const deleteUsers = (id) => {
  return function (dispatch) {
    console.log(process.env.REACT_APP_API);
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(deletedUsers());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
export const addUsers = (User) => {
  console.log(User);
  return function (dispatch) {
    console.log(process.env.REACT_APP_API);
    axios
      .post(`${process.env.REACT_APP_API}`, User, {})
      .then((res) => {
        console.log("res", res);
        dispatch(addedUsers());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
export const getSingleUsers = (id) => {
  return function (dispatch) {
    console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUser(res.data));
      })
      .catch((error) => console.log(error));
  };
};
export const updateUsers = (user, id) => {
  return function (dispatch) {
    console.log(process.env.REACT_APP_API);
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("res", res);
        dispatch(updatedUsers());
      })
      .catch((error) => console.log(error));
  };
};
// export const searchUsers = (user) => {
//   return function (dispatch) {
//     console.log(process.env.REACT_APP_API);
//     axios
//       .put(`${process.env.REACT_APP_API}/`, user)
//       .then((res) => {
//         console.log("res", res);
//         dispatch(searchedUser());
//       })
//       .catch((error) => console.log(error));
//   };
// };
