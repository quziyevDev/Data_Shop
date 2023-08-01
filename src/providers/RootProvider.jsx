import { StyleProvider } from '@ant-design/cssinjs'
import { Button } from 'antd'

export default function RootProvider() {
	return (
		<StyleProvider hashPriority='high'>
			<div>asdsadas</div>
			<Button type='primary'>Ant Button</Button>
		</StyleProvider>
	)
}
