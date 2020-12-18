import axios from 'axios';

const KEY = 'AIzaSyAh4xwty3maL-e4DXe1DDSPR7zR6NB6RfI'; 

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});