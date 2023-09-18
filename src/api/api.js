import axios from 'axios'

const USER_URL = "https://64f5acbd2b07270f705d8683.mockapi.io/users";
const POSTS_URL = "https://64f5acbd2b07270f705d8683.mockapi.io/posts"

const getUsers = async () => {

    let result
    
    await axios.get(USER_URL).then((res) => {
        result = res.data
    })

    return result
    
} 

const getUser = async (id) => {

    let result
    
    await axios.get(USER_URL + '/' + id).then((res) => {
        result = res.data
    })

    return result
    
} 
const getPosts = async (id) => {
    let result

    await axios.get(POSTS_URL).then(res => result = res.data)

    return result
}
const createPost = async (post) => {

    await axios.put(POSTS_URL,  post).then(res => console.log(res))

}

const addComment = async (commenterId, postId, commentsArr, newPostsArr, posterId) => {
    //add comment to post
    await axios.put(POSTS_URL + "/" + postId, commentsArr);
    //add comment to poster user
    await axios.put(USER_URL + "/" + posterId, newPostsArr);
    //add comment to commenter user
    await axios.put(USER_URL + "/" + commenterId, newPostsArr);
    
    
};

const changeStatus = async (user) => {
    let result = await axios.put(USER_URL + "/" + user.id, user)
    console.log(result.data)
    return result.data
}

const getLoggedUser = () => JSON.parse(localStorage.getItem('loggedUser')) ?? []

export { getUser, getUsers, createPost, addComment, changeStatus, getLoggedUser, getPosts };