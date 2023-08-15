import { Card, Image } from 'antd'
import { Trash } from 'lucide-react'
import PropTypes from 'prop-types'

export default function FileCard({ file, remove }) {
	return (
		<Card
			cover={
				<Image
					className='!h-40 object-contain'
					src={`${import.meta.env.VITE_APP_BASE_URL}/upload/${file.path}`}
				/>
			}
			actions={[
				<span
					key='remove '
					onClick={() => remove(file.id)}
					className='grid place-items-center'
				>
					<Trash size='1em' />
				</span>
			]}
		>
			<Card.Meta title={file.filename} />
		</Card>
	)
}

FileCard.propTypes = {
	file: {
		id: PropTypes.number,
		filename: PropTypes.string,
		path: PropTypes.string
	},
	remove: PropTypes.func
}
