import api from '@/api'
import { message } from 'antd'
import { useMutation } from 'react-query'

export const useLogin = () => {
	return useMutation({
		mutationKey: 'auth/login',
		mutationFn: data => api.post('/auth/login', data),
		onError(error) {
			message.error({
				content: error.response.data.message
			})
		},
		onSuccess(data) {
			localStorage.clear()
			Object.keys(data.data).forEach(key => {
				if (key === 'message') return
				localStorage.setItem(key, JSON.stringify(data.data[key]))
			})
			message.success({
				content: data.data.message
			})
		}
	})
}
