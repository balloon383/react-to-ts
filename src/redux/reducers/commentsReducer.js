import { SET_COMMENTS } from "../actions/commenstActions";

const INITIAL_STATE = []

const setCommentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state, 
                ...action.payload
            }            
    
        default:
            return state;
    }
}


export default setCommentsReducer