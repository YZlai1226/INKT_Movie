import Axios from 'axios'

const getCSRFToken = async () => {
    const response = await axios.get('/getCSRFToken');
    axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
    axios.defaults.headers.delete['X-CSRF-Token'] = response.data.CSRFToken; 
    axios.defaults.headers.put['X-CSRF-Token'] = response.data.CSRFToken;
};

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'/* ,
        'X-CSRF-Token': response.data.CSRFToken */
    },
    withCredentials: true,
})

export default axios
