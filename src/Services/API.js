import axios from 'axios'

const BACKEND_URL = "http://localhost:3000"
export default function fetchAPI(endpoint, payload, headers, method = 'get'){
  let withCredentials = true
  const axiosConfig = {
      headers,
      method: method.toLowerCase(),
      withCredentials
  };
  if(axiosConfig.method === 'get'){
      axiosConfig.params = payload
  } else {
      axiosConfig.data = payload
  }

  return axios(`${BACKEND_URL}${endpoint}`, axiosConfig)

}