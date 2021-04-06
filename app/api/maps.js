import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.google.com/maps',
    headers: {
        Authorization: 'Bearer 1'
    }

});