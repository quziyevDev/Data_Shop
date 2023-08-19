import { useReducer } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'create': {
			return {
				open: true,
				type: 'create',
				data: null
			}
		}
		case 'update': {
			return {
				open: true,
				type: 'update',
				data: action.payload
			}
		}
		case 'close': {
			return {
				open: false,
				type: 'create',
				data: null
			}
		}
		default:
			return state
	}
}

const initialState = {
	open: false,
	type: 'create',
	data: null
}

export const useModal = () => {
	const [modalState, dispatch] = useReducer(reducer, initialState)

	const onOpen = () => dispatch({ type: 'create' })
	const onOpenWithpayload = payload => dispatch({ type: 'update', payload })
	const onClose = () => dispatch({ type: 'close' })

	return {
		modalState,
		onOpen,
		onClose,
		onOpenWithpayload
	}
}
