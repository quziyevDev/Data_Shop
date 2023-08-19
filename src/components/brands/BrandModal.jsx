import { useFiles } from '@/queries/useFiles'
import { Button, Form, Image, Input, Modal, Select } from 'antd'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useCategories } from '@/queries/useCategories'

export default function BrandModal({ modalState, create, update, onCancel }) {
	const { files, isLoading } = useFiles()
	const { categories } = useCategories()
	const [form] = Form.useForm()

	const onFinish = data => {
		if (modalState.type === 'create') {
			return create(data)
		}
		return update({
			id: modalState.data.id,
			...data
		})
	}

	useEffect(() => {
		if (modalState.open && modalState.data) {
			form.setFieldValue('title', modalState.data.title)
			form.setFieldValue('iconId', {
				label: (
					<div className='flex items-center gap-2'>
						<Image
							width={60}
							src={`${import.meta.env.VITE_APP_BASE_URL}/upload/${modalState.data.icon?.path}`}
						/>
						<span>{modalState.data.icon?.filename}</span>
					</div>
				),
				value: modalState.data.icon?.id
			})
		}
	}, [modalState, form])

	const cancelHandler = () => {
		onCancel()
		return form.resetFields(['title', 'iconId', 'categoryId'])
	}

	return (
		<Modal
			open={modalState.open}
			onCancel={cancelHandler}
			footer={false}
			title='Create Category'
		>
			<Form
				form={form}
				onFinish={onFinish}
				layout='vertical'
			>
				<Form.Item
					name='title'
					label='Title'
				>
					<Input />
				</Form.Item>
				<Form.Item
					name='iconId'
					label='Icon'
				>
					<Select
						loading={isLoading}
						options={files.map(file => {
							return {
								value: file.id,
								label: (
									<div className='flex items-center gap-2'>
										<Image
											width={60}
											src={`${import.meta.env.VITE_APP_BASE_URL}/upload/${file.path}`}
										/>
										<span>{file.filename}</span>
									</div>
								)
							}
						})}
					/>
				</Form.Item>
				<Form.Item
					name='categoryId'
					label='Category'
				>
					<Select
						loading={isLoading}
						options={categories.map(category => {
							return {
								value: category.id,
								label: category.title
							}
						})}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						block
						type='primary'
						htmlType='submit'
					>
						Send
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

BrandModal.propTypes = {
	modalState: {
		open: PropTypes.bool,
		type: PropTypes.string,
		data: PropTypes.object
	},
	create: PropTypes.func,
	update: PropTypes.func,
	onCancel: PropTypes.func
}
