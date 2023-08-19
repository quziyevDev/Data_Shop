import BrandModal from '@/components/brands/BrandModal'
import { useModal } from '@/hooks/useModal'
import { useBrands } from '@/queries/useBrands'
import { Button, Space, Table } from 'antd'
import { Edit2, Trash2 } from 'lucide-react'

export default function Brands() {
	const { brands, isLoading, create, update, remove } = useBrands()
	const { modalState, onClose, onOpen, onOpenWithpayload } = useModal()
	return (
		<>
			<Button onClick={onOpen}>Create</Button>
			<BrandModal
				onCancel={onClose}
				modalState={modalState}
				create={create}
				update={update}
			/>
			<Table
				dataSource={brands}
				isLoading={isLoading}
				columns={[
					{
						key: '#',
						title: '#',
						render(_, _record, index) {
							return index + 1
						}
					},
					{
						key: 'title',
						title: 'Title',
						render(_, record) {
							return record.title
						}
					},
					{
						key: 'icon',
						title: 'Icon',
						render(_, record) {
							return record.title
						}
					},
					{
						key: 'actions',
						render(_, record) {
							return (
								<Space>
									<Button
										onClick={() => remove(record.id)}
										icon={<Trash2 size='1em' />}
										className='!inline-grid place-items-center'
										danger
										size='small'
									/>
									<Button
										onClick={() => onOpenWithpayload(record)}
										icon={<Edit2 size='1em' />}
										className='!inline-grid place-items-center'
										size='small'
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
