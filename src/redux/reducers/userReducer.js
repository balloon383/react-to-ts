import { SET_USER } from '../actions/userActions'
import {getLoggedUser} from '../../api/api'


let loggedUser = getLoggedUser()


const INITIAL_STATE = {
  id: loggedUser.id,
  status: loggedUser.status,
  name: loggedUser.name,
  posts: loggedUser.posts || [],
  comments: loggedUser.comments || []
};

let setUserReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case SET_USER:
      console.log(action.payload)
      return {
        ...state,
          id: action.payload.id,
          status: action.payload.status,
          name: action.payload.name,
          email: action.payload.email,
          shoppingCart: action.payload.shoppingCart, 
          orders: action.payload.orders
      };
    

    default:
      return state;
  }
};


export default setUserReducer;
  