import axios from 'axios';

 const instance = axios.create({
    baseURL : 'https://pizza-1661e.firebaseio.com/'
});

export default instance;