import api from '@/api'
import { notification } from 'antd'
import { useMutation } from 'react-query'

export const useVerification = () => {
	return useMutation('auth/verify', {
		mutationFn: code => {
			const verificationId = localStorage.getItem('verificationId')
			return api.post('/auth/verify', { code, verificationId })
		},
		onSuccess(data) {
			localStorage.clear()

			Object.keys(data.data).forEach(key => {
				if (key === 'message') {
					return
				}
				localStorage.setItem(key, JSON.stringify(data.data[key]))
			})
			notification.success({
				message: data.data.message
			})
		},
		onError(error) {
			notification.error({
				message: error.response.data.message
			})
		}
	})
}
