import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hIBpLGHklskb5-HjM0bYt-ICe3oWmp9jZ7veHCe2N7o'
    }
});