import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<AntLayout className='h-screen'>
			<Header />
			<AntLayout>
				<Sidebar />
				<AntLayout.Content className='p-4'>
					<Outlet />
				</AntLayout.Content>
			</AntLayout>
			<Footer />
		</AntLayout>
	)
}
