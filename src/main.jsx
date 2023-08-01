import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootProvider from './providers/RootProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RootProvider />
	</React.StrictMode>
)
