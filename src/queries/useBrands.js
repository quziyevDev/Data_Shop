import api from '@/api'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useBrands = () => {
	const [brands, setBrands] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const getAll = useQuery('brands/getAll', {
		queryFn: () => api.get('/brand'),
		onSuccess(data) {
			setBrands(data.data.brands)
		}
	})

	const create = useMutation('brands/create', {
		mutationFn: data => api.post('/brand', data),
		onSuccess(data) {
			setBrands(prev => {
				return [...prev, data.data.brand]
			})
		}
	})

	const update = useMutation('brands/update', {
		mutationFn: data => api.put(`/brand/${data.id}`, { title: data.title, iconId: data.iconId }),
		onSuccess(data) {
			setBrands(prev => prev.map(item => (item.id === data.data.id ? data.data : item)))
		}
	})

	const remove = useMutation('brands/remove', {
		mutationFn: id => api.delete(`/brand/${id}`),
		onSuccess(data) {
			setBrands(prev => prev.filter(item => item.id !== data.data.brand.id))
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
		brands,
		isLoading,
		create: create.mutate,
		update: update.mutate,
		remove: remove.mutate
	}
}
