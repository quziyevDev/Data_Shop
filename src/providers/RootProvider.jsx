import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from '@/router/router'
import { AuthProvider } from './AuthProvider'

const queryClient = new QueryClient()

export default function RootProvider() {
	return (
		<QueryClientProvider client={queryClient}>
			<StyleProvider hashPriority='high'>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</StyleProvider>
		</QueryClientProvider>
	)
}
