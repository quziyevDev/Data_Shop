import Register from '@/pages/Register'
import Verification from '@/pages/Verification'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Register />
	},
	{
		path: '/verification',
		element: <Verification />
	}
])

export default router
