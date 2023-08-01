import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Register />
	}
])

export default router
