import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL_API
})

api.interceptors.request.use(config => {
	const token = localStorage.getItem('token')

	if (!token) {
		return config
	}

	config.headers.Authorization = JSON.parse(token)

	return config
})

export default api
