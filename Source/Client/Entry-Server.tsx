import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export const render = (URL: string) => {
	return ReactDOMServer.renderToString(
		<React.StrictMode>
			<StaticRouter location={URL}>
				<App />
			</StaticRouter>
		</React.StrictMode>,
	)
}