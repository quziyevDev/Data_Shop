import { useRegister } from '@/queries/useRegister'
import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
	const { isLoading, mutate, isSuccess } = useRegister()
	const navigate = useNavigate()

	const onSubmit = formData => {
		mutate(formData)
	}

	useEffect(() => {
		if (isSuccess) {
			navigate('/verification', {
				state: {
					verified: true
				}
			})
		}
	}, [isSuccess, navigate])

	return (
		<div className='h-screen grid place-items-center'>
			<Form
				onFinish={onSubmit}
				layout='vertical'
				// component={Card}
				className='max-w-md w-full'
			>
				<Form.Item
					label='Name'
					name='name'
					rules={[
						{
							required: true
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Surname'
					name='surname'
					rules={[
						{
							required: true
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Phone'
					name='phone'
					rules={[
						{
							required: true
						}
					]}
				>
					<Input prefix='+998' />
				</Form.Item>

				<Form.Item
					label='Address'
					name='address'
					rules={[
						{
							required: true
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Email'
					name='email'
					rules={[
						{
							required: true
						}
					]}
				>
					<Input type='email' />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
				>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button
						loading={isLoading}
						htmlType='submit'
						type='primary'
					>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
