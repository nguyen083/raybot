import type { InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useNProgress } from './nprogress'
import 'nprogress/nprogress.css'

const nprogress = useNProgress()
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.doNotShowLoading) {
      nprogress.start()
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (response) => {
    nprogress.done()
    return Promise.resolve(response.data)
  },
)

export default instance
