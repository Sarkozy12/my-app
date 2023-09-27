import axios from 'axios'

const axiosConfig = axios.create({baseURL: 'http://dummyjson.com/'})

export default axiosConfig