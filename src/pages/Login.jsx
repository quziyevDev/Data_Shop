import { AuthContext } from '@/providers/AuthProvider'
import { useLogin } from '@/queries/useLogin'
import { Button, Form, Input } from 'antd'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
	const { isLoading, mutate, isSuccess } = useLogin()
	const { login } = useContext(AuthContext) //
	const navigate = useNavigate()

	const onSubmit = formData => {
		mutate(formData)
	}

	useEffect(() => {
		if (isSuccess) {
			login() //
			navigate('/', {
				replace: true
			})
		}
	}, [isSuccess, navigate, login]) //

	return (
		<div className='h-screen grid place-items-center'>
			<Form
				onFinish={onSubmit}
				layout='vertical'
				className='max-w-md w-full'
			>
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
						Sign In
					</Button>
				</Form.Item>
				Agar Akkaountingiz bo&apos;lmasa: <Link to='/auth/register'>Register</Link>
			</Form>
		</div>
	)
}
