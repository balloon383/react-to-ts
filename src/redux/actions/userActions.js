import { getUsers } from "../../api/api.js";
export const SET_USER = 'SET_USER';
export const GET_USERS = "GET_USERS";
export const REGISTER_USER = "REGISTER_USER";


const actionCreator = (type, payload) => {

  if (payload || typeof(payload) === 'number') {
    return { type, payload };
  } else {
    return { type };
    }
};

export const setUsersAction = (users) => actionCreator(GET_USERS, users);


export const getUsersThunk = () => {
  return async (dispatch, getState) => {
    await getUsers().then((data) => dispatch(setUsersAction(data)));
  };
};