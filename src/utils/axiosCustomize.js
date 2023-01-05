import axios from "axios";
const instance = axios.create({    //request
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
    
  }
});
//add request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before ....
  return config;
},
  function (error) {
    // Do something with error .....
    return Promise.reject(error);
  });
//add response interceptor
instance.interceptors.response.use(function (response) {
  // return response && response.data ? response.data : response; 
  return response && response.data ? response : alert('Error');
},
  function (error) {
    return error?.response?.response || alert('defaultValue at Interceptor');
  });
// optional chaining

export default instance;