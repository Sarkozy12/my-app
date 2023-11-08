import axios from 'axios'

const axiosConfig = axios.create({baseURL: 'https://api-pi-fatec.onrender.com'})

export default axiosConfig