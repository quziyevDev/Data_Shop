import api from '@/api'
import { notification } from 'antd'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useFiles = () => {
	const [files, setFiles] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const getAll = useQuery('files/getAll', {
		queryFn: () => api.get('/upload/files'),
		onSuccess(data) {
			setFiles(data.data.files)
		},
		onError(err) {
			notification.error({
				message: err.response.data.message
			})
		}
	})

	const create = useMutation('files/create', {
		mutationFn: $files => {
			const formData = new FormData()

			$files.forEach(file => {
				formData.append('files', file)
			})

			return api.post('/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
		},
		onSuccess(data) {
			setFiles([...files, ...data.data.files])
		}
	})

	useEffect(() => {
		if (getAll.isLoading || create.isLoading) {
			setIsLoading(true)
		} else {
			setIsLoading(false)
		}
	}, [getAll.isLoading, create.isLoading])

	return {
		files,
		isLoading,
		create: create.mutate
	}
}
