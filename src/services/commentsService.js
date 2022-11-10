
import axios from 'axios';

export const getComments = async () => {
    var url = 'http://localhost:3006/api/comment';
    return await axios.get(url);
}