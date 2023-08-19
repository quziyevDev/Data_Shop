import CategoriesModal from '@/components/categories/CategoriesModal'
import { useModal } from '@/hooks/useModal'
import { useCategories } from '@/queries/useCategories'
import { Button, Image, Space, Table } from 'antd'
import { Edit2, Trash2 } from 'lucide-react'

export default function Categories() {
	const { categories, isLoading, create, remove, update } = useCategories()
	const { modalState, onOpen, onClose, onOpenWithpayload } = useModal()
	return (
		<>
			<Button onClick={onOpen}>Create</Button>
			<CategoriesModal
				modalState={modalState}
				onCancel={onClose}
				create={create}
				update={update}
			/>
			<Table
				loading={isLoading}
				dataSource={categories}
				columns={[
					{
						key: '#',
						title: '#',
						render: (_, record, index) => {
							return index + 1
						}
					},
					{
						key: 'title',
						title: 'Title',
						render: (_, record) => {
							return record.title
						}
					},
					{
						key: 'icon',
						title: 'Icon',
						render: (_, record) => {
							return (
								<div className='flex items-center gap-2'>
									<Image
										width={100}
										height={100}
										className='object-cover'
										src={`${import.meta.env.VITE_APP_BASE_URL}/upload/${record.icon?.path}`}
									/>
									<span>{record?.icon?.filename}</span>
								</div>
							)
						}
					},
					{
						key: 'actions',
						render: (_, record) => {
							return (
								<Space>
									<Button
										onClick={() => remove(record.id)}
										className='!inline-grid place-items-center'
										size='small'
										danger
										icon={<Trash2 size='1em' />}
									/>
									<Button
										className='!inline-grid place-items-center'
										size='small'
										onClick={() => onOpenWithpayload(record)}
										icon={<Edit2 size='1em' />}
									/>
								</Space>
							)
						}
					}
				]}
			/>
		</>
	)
}
