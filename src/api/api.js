import axios from 'axios'

const URL = "https://64f5acbd2b07270f705d8683.mockapi.io/users";
const getUsers = async () => {

    let result
    
    await axios.get(URL).then((res) => {
        result = res.data
    })

    return result
    
} 

const getUser = async (id) => {

    let result
    
    await axios.get(URL + '/' + id).then((res) => {
        result = res.data
    })

    return result
    
} 

const createPost = async (userId, post) => {

    await axios.put(URL + '/' + userId, post).then(res => console.log(res))

}

const addComment = async (commenterId, posterId, commentsArr, newPostsArr) => {

    await axios.put(URL + "/" + commenterId, commentsArr);

    await axios.put(URL + "/" + posterId, newPostsArr);
    
};

const changeStatus = async (id) => {
    console.log(id)
}

export { getUser, getUsers, createPost, addComment, changeStatus  };