import { Button, Upload, Modal, message } from 'antd'
import { PlusIcon } from 'lucide-react'

import PropTypes from 'prop-types'
import { useState } from 'react'

const imgFormats = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif']

const FileModal = ({ open, onClose, create }) => {
	const [fileList, setFileList] = useState([])
	return (
		<>
			<Modal
				title='Upload Files'
				open={open}
				onCancel={onClose}
				footer={false}
				className='!max-w-sm'
			>
				<Upload
					showUploadList={false}
					beforeUpload={file => {
						if (!imgFormats.includes(file.type)) {
							message.error("Fayl rasm bo'lishi kerak")
							return false
						}

						const reader = new FileReader()
						reader.readAsDataURL(file)
						reader.onload = () => {
							setFileList([
								...fileList,
								{
									base64: reader.result,
									file
								}
							])
						}

						return false
					}}
					className='!flex flex-col items-center justify-center'
				>
					<Button
						className='!w-full'
						block
					>
						Upload Files
					</Button>
				</Upload>

				{fileList.map((file, index) => {
					return (
						<div
							key={file.base64 + index}
							className='flex items-center gap-2'
						>
							<img
								src={file.base64}
								width={80}
							/>
							{file.file?.name}
						</div>
					)
				})}
				<Button
					type='primary'
					block
					onClick={() => {
						create(fileList.map(file => file.file))
						onClose()
						setFileList([])
					}}
				>
					Send
				</Button>
			</Modal>
		</>
	)
}

FileModal.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	create: PropTypes.func
}

export default function FileUpload({ create }) {
	const [open, setOpen] = useState(false)

	const onCancel = () => setOpen(false)

	return (
		<>
			<div
				onClick={() => setOpen(true)}
				className='border-4 min-h-[250px] border-dashed grid place-items-center rounded-md cursor-pointer text-stone-400'
			>
				<PlusIcon />
			</div>
			<FileModal
				create={create}
				open={open}
				onClose={onCancel}
			/>
		</>
	)
}

FileUpload.propTypes = {
	create: PropTypes.func
}
