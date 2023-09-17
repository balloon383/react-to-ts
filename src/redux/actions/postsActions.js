import { getPosts } from "../../api/api";

export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = 'SET_POSTS';

const actionCreator = (type, payload) => {

    if (payload || typeof(payload) === 'number') {
      return { type, payload };
    } else {
      return { type };
      }
  };

const setPostsAction = (posts) => actionCreator(SET_POSTS, posts);


export const getPostsThunk = () => {
  return async (dispatch, getState) => {
    await getPosts().then((posts) => dispatch(setPostsAction(posts)));
  };
};