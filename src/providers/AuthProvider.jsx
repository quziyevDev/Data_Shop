import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false)

	const login = () => setIsAuth(true)
	const logout = () => {
		localStorage.clear()
		setIsAuth(false)
	}

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				login,
				logout
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.node
}
