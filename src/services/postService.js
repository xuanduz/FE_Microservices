import axios from 'axios';

export const getPosts = async () => {
    var url = 'http://localhost:3006/api/posts';
    return await axios.get(url);
}



export const addPost = async (post) => {
    var url = 'http://localhost:3006/api/posts';
    return await axios.post(url);
}