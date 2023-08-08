import { Layout, Menu } from 'antd'
import { getMenuItems } from './menuItems'
import { Link } from 'react-router-dom'

// admin, supervisor

// supervisor -> dashboard, admins, users,
// category, brand, product, cart, dashboard

export default function Sidebar() {
	const user = JSON.parse(localStorage.getItem('user'))
	const menuItems = getMenuItems(user.role)
	return (
		<Layout.Sider collapsible>
			<Menu
				theme='dark'
				items={menuItems.map(item => {
					return {
						key: item.href,
						label: <Link to={item.href}>{item.title}</Link>,
						icon: <item.Icon size='1em' />
					}
				})}
			/>
		</Layout.Sider>
	)
}
