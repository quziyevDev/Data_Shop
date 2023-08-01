import { Button, Card, Form, Input, Select } from 'antd'

export default function Register() {
	return (
		<div className='h-screen grid place-items-center'>
			<Form
				layout='vertical'
				component={Card}
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
					help='exemple: 91 123 45 67'
					rules={[
						{
							required: true,
							len: 9
						}
					]}
				>
					<Input
						addonBefore={
							<Form.Item noStyle>
								<Select
									style={{ width: 60 }}
									defaultValue={'+998'}
									options={[
										{ label: 'UZ', value: '+998' },
										{ label: 'RU', value: '+7' }
									]}
								/>
							</Form.Item>
						}
					/>
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
					<Button type='primary'>Sign Up</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
