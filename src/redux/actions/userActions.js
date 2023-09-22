import { getUser } from "../../api/api.js";

const SET_USER = "SET_USER";
const GET_USERS = "GET_USERS";
const REGISTER_USER = "REGISTER_USER";
const LOG_OUT = "LOG_OUT"


const actionCreator = (type, payload) => {

  if (payload || typeof(payload) === 'number') {
    return { type, payload };
  } else {
    return { type };
    }
};

const setUserAction = (user) => actionCreator(SET_USER, user);
const logOutAction = (user) => actionCreator(LOG_OUT, user);


const getUserThunk = (id) => {
  return async (dispatch, getState) => {
    await getUser(id).then((data) => dispatch(setUserAction(data)));
  };
};

export {SET_USER, GET_USERS, REGISTER_USER, LOG_OUT , setUserAction, getUserThunk, logOutAction}