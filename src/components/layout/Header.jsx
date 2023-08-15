import { Button, Layout, Popconfirm } from 'antd'
import { LogOut } from 'lucide-react'

export default function Header() {
	return (
		<Layout.Header className='!text-white'>
			<div className='flex justify-between items-center'>
				DATA Shop
				<Popconfirm
					title='Are you sure to exit'
					onConfirm={() => {
						location.reload()
						localStorage.clear()
					}}
				>
					<Button
						shape='circle'
						className='!inline-grid place-items-center'
						danger
						type='primary'
						icon={<LogOut size='1em' />}
					/>
				</Popconfirm>
			</div>
		</Layout.Header>
	)
}
