import axios from "axios";

export const API_URL = `http://test-backend.itdelta.agency/api`

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance