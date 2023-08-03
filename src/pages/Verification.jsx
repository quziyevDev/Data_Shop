import { Navigate, useLocation } from 'react-router-dom'
import OTPInput from 'react-otp-input'
import { useState } from 'react'
import { Button, Space, Typography } from 'antd'
import Timer from '@/components/verification/Timer'
import { useVerification } from '@/queries/useVerification'

export default function Verification() {
	const { state } = useLocation()
	const [nums, setNums] = useState(0)
	const email = localStorage.getItem('email')
	const [isExpired, setIsExpired] = useState(false)
	const { isLoading, mutate } = useVerification()

	const sendCode = () => {
		mutate(nums)
	}

	if (!state || !state.verified) {
		return (
			<Navigate
				to='/'
				replace
			/>
		)
	}
	return (
		<div className='h-screen grid place-items-center'>
			<div className='flex flex-col gap-5'>
				<Typography.Text>
					Sizning <span className='text-blue-500'>{email}</span> pochtangizga kod yuborildi
				</Typography.Text>
				<OTPInput
					containerStyle='gap-2'
					inputStyle='border !w-12 aspect-square focus:outline-teal-500 text-2xl appearence-none'
					numInputs={6}
					value={nums}
					inputType='number'
					onChange={setNums}
					renderSeparator={<span>-</span>}
					renderInput={props => <input {...props} />}
				/>
				<Button
					onClick={sendCode}
					loading={isLoading}
					type='primary'
				>
					Send
				</Button>
				<Space className='self-center'>
					<Timer setIsExpired={setIsExpired} />
					<Button
						disabled={!isExpired}
						type='link'
					>
						Resend Code
					</Button>
				</Space>
			</div>
		</div>
	)
}
