import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '@/providers/AuthProvider'

export default function RequireAuth() {
	const { isAuth } = useContext(AuthContext)
	const user = JSON.parse(localStorage.getItem('user'))

	if (isAuth && user.role === 'admin') {
		return <Outlet />
	}

	return (
		<Navigate
			to='/auth/login'
			replace
		/>
	)
}
