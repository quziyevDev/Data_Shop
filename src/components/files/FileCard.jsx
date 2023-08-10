import { Card, Image } from 'antd'
import PropTypes from 'prop-types'

export default function FileCard({ file }) {
	return (
		<Card
			cover={
				<Image
					className='!h-40 object-contain'
					src={`${import.meta.env.VITE_APP_BASE_URL}/upload/${file.path}`}
				/>
			}
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
	}
}
