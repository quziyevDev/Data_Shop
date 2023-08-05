import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '@/providers/AuthProvider'

export default function RequireAuth() {
	const { isAuth } = useContext(AuthContext)

	if (isAuth) {
		return <Outlet />
	}

	return (
		<Navigate
			to='/auth/login'
			replace
		/>
	)
}
