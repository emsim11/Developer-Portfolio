import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'

import App from './App.tsx'
import { Layout } from './App/Layout/Index.tsx'
import { ThemeProvider } from './Hooks/Theme-Context.tsx'

const AppRoot = document.getElementById('Root')

const UpdateServiceWorker = registerSW({
	onNeedRefresh() {
		if (confirm('New Content Available! Reload Page?')) {
			UpdateServiceWorker(true)
		}
	},
	onOfflineReady() {
		console.log('Offline Ready!')
	}
})

export const FullApp = () => (
	<React.StrictMode>
		<ThemeProvider>
			<Router>
				<Layout>
					<App />
				</Layout>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)

if ((import.meta as any).hot || !AppRoot?.innerText) {
	const Root = createRoot(AppRoot!)
	Root.render(<FullApp />)
} else {
	hydrateRoot(AppRoot!, <FullApp />)
}