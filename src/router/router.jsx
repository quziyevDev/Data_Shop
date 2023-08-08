import Layout from '@/components/layout/Layout'
import Login from '@/pages/Login'
import PageNotFound from '@/pages/PageNotFound'
import Register from '@/pages/Register'
import RequireAuth from '@/pages/RequireAuth'
import Verification from '@/pages/Verification'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth />,
		children: [
			{
				path: '/',
				element: <Layout />,
				children: [
					{
						path: '*',
						element: <PageNotFound />
					}
				]
			}
		]
	},
	{
		path: 'auth',
		children: [
			{
				path: 'register',
				element: <Register />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'verification',
				element: <Verification />
			}
		]
	}
])

export default router
