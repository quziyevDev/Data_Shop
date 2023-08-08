import {
	Box,
	ImagePlus,
	Layers,
	LayoutDashboard,
	ShoppingBasket,
	Ticket,
	UserCog,
	Users
} from 'lucide-react'

const menuItems = [
	{
		title: 'Dashboard',
		Icon: LayoutDashboard,
		href: '/',
		permissions: ['admin', 'supervisor']
	},
	{
		title: 'Category',
		Icon: Layers,
		href: '/category',
		permissions: ['admin']
	},
	{
		title: 'Brands',
		Icon: Ticket,
		href: '/brands',
		permissions: ['admin']
	},
	{
		title: 'Products',
		Icon: Box,
		href: '/products',
		permissions: ['admin']
	},
	{
		title: 'Cart',
		Icon: ShoppingBasket,
		href: '/carts',
		permissions: ['admin']
	},
	{
		title: 'Admins',
		Icon: UserCog,
		href: '/admins',
		permissions: ['supervisor']
	},
	{
		title: 'Users',
		Icon: Users,
		href: '/users',
		permissions: ['supervisor']
	},
	{
		title: 'Files',
		Icon: ImagePlus,
		href: '/files',
		permissions: ['admin']
	}
]

// [1,2,3,4,5,6,7] => [2,4,6]

export const getMenuItems = role => {
	return menuItems.filter(item => item.permissions.includes(role))
}
