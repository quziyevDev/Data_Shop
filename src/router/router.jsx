import Layout from '@/components/layout/Layout'
import Brands from '@/pages/Brands'
import Categories from '@/pages/Categories'
import Files from '@/pages/Files'
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
						path: '/files',
						element: <Files />
					},
					{
						path: '/category',
						element: <Categories />
					},
					{
						path: '/brands',
						element: <Brands />
					},
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
