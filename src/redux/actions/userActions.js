import { getUsers } from "../../api/api.js";

const SET_USER = 'SET_USER';
const GET_USERS = "GET_USERS";
const REGISTER_USER = "REGISTER_USER";


const actionCreator = (type, payload) => {

  if (payload || typeof(payload) === 'number') {
    return { type, payload };
  } else {
    return { type };
    }
};

const setUserAction = (user) => actionCreator(SET_USER, user);


const getUserThunk = () => {
  return async (dispatch, getState) => {
    await getUsers().then((data) => dispatch(setUserAction(data)));
  };
};

export {SET_USER, GET_USERS, REGISTER_USER, setUserAction, getUserThunk}