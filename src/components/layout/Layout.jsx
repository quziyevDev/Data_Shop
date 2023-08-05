import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout() {
	return (
		<AntLayout className='h-screen'>
			<Header />
			<AntLayout>
				<Sidebar />
				<AntLayout.Content>Content</AntLayout.Content>
			</AntLayout>
			<Footer />
		</AntLayout>
	)
}
