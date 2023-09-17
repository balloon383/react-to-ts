import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setCommentsReducer from './reducers/commentsReducer'
import setUserReducer from "./reducers/userReducer";
import setPostsReducer from "./reducers/postsReducer";

const rootReducer = combineReducers({
  user: setUserReducer,
  comments: setCommentsReducer,
  posts: setPostsReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store