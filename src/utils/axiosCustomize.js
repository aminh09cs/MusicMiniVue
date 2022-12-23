import axios from "axios";
const instance = axios.create({    //request
  baseURL: 'https://spotify23.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '22cbd34868mshff4d6a7f888b148p178177jsndf4e99645f53',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
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