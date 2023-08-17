import api from '@/api'
import { notification } from 'antd'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

// CRUD - Create Read Update Delete

export const useCategories = firstTime => {
	const [categories, setCategires] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const getAll = useQuery('/categories/getAll', {
		queryFn: () => api.get('/category'),
		onSuccess: data => {
			setCategires(data.data.category)
		},
		enabled: !firstTime
	})
	const create = useMutation('categories/create', {
		mutationFn: data => api.post('/category', data),
		onSuccess: data => {
			setCategires(previus => [...previus, data.data.category])
		},
		onError: error => {
			notification.error({
				message: error.response.data.message
			})
		}
	})

	const update = useMutation('categories/update', {
		mutationFn: data => api.put(`/category/${data.id}`, { title: data.title, iconId: data.iconId }),
		onSuccess: (data, variables) => {
			setCategires(prev =>
				prev.map(item => {
					if (item.id === variables.id) {
						return data.data.category
					}
					return item
				})
			)
		}
	})
	const remove = useMutation('categories/remove', {
		mutationFn: id => api.delete(`/category/${id}`),
		onSuccess: (_, variables) => {
			setCategires(prev => prev.filter(item => item.id !== variables))
		}
	})

	useEffect(() => {
		if (getAll.isLoading || create.isLoading || update.isLoading || remove.isLoading) {
			setIsLoading(true)
		} else {
			setIsLoading(false)
		}
	}, [getAll.isLoading, create.isLoading, update.isLoading, remove.isLoading])
	return {
		categories,
		isLoading,
		create: create.mutate,
		update: update.mutate,
		remove: remove.mutate
	}
}
