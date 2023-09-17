import { SET_POSTS } from '../actions/postsActions'
import { getPostsThunk } from '../actions/postsActions'

getPostsThunk()

const INITIAL_STATE = []

let setPostsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state, 
                ...action.payload
            }
        default:
            return state;
    }
}

export default setPostsReducer;
