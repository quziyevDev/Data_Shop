import { useTimer } from 'react-timer-hook'
import PropTypes from 'prop-types'

export default function Timer({ setIsExpired }) {
	const { minutes, seconds } = useTimer({
		expiryTimestamp: new Date(Date.now() + 300000),
		onExpire() {
			setIsExpired(true)
		}
	})
	return (
		<div>
			{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</div>
	)
}

Timer.propTypes = {
	setIsExpired: PropTypes.func
}
