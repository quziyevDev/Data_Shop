import { Layout, Menu } from 'antd'

export default function Sidebar() {
	return (
		<Layout.Sider collapsible>
			<Menu
				theme='dark'
				items={[
					{
						key: 'home',
						label: 'Home'
					},
					{
						key: 'about',
						label: 'About'
					},
					{
						key: 'Category',
						label: 'Category'
					}
				]}
			/>
		</Layout.Sider>
	)
}
