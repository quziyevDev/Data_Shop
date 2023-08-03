import { notification } from 'antd'
import { useMutation } from 'react-query'
import api from '@/api'

export const useRegister = () => {
	return useMutation({
		mutationKey: 'auth/register',
		mutationFn: data => api.post('/auth/register', data),
		onError(error) {
			notification.error({
				message: error.response.data.message
			})
		},
		onSuccess(data) {
			Object.keys(data.data).forEach(key => {
				localStorage.setItem(key, data.data[key])
			})
			notification.success({
				message: data.data.message
			})
		}
	})
}
