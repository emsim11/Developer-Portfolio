import fs from 'fs/promises'
import compression from 'compression'
import serveStatic from 'serve-static'
import express from 'express'
import type { Request, Response, NextFunction } from 'express'
import path, { dirname as DirectoryName } from 'path'
import { createServer as CreateViteServer } from 'vite'
import { fileURLToPath as FileURLToPath } from 'url'

/* Constants */
const __FileName = FileURLToPath(import.meta.url)
const __DirectoryName = DirectoryName(__FileName)
const PORT = process.env.PORT || 5173
const Resolve = (PathName: string) => path.resolve(__DirectoryName, PathName)

const CreateServer = async (IsProduction = process.env.NODE_ENV === 'Production') => {
	/* Create HTTP Server */
	const App = express()
	/* Add Vite & Respective Production Middlewares */
	const Vite = await CreateViteServer({
		server: { middlewareMode: true },
		appType: 'custom',
		root: IsProduction ? 'Build' : '',
		optimizeDeps: { include: [] },
	})
	App.use(Vite.middlewares)
	const AssetsDirectory = Resolve('Public')
	const RequestHandler = express.static(AssetsDirectory)
	App.use(RequestHandler)
	App.use('/Public', RequestHandler)
	if (IsProduction) {
		App.use(compression())
		App.use(serveStatic(Resolve('Client'), { index: false }))
	}
	
	/* Cached Production Assets */
	const BaseTemplate = await fs.readFile(IsProduction ? Resolve('Client/index.html') : Resolve('index.html'), 'utf-8')
	const ProductionBuildPath = path.join(__DirectoryName, './Server/Entry-Server.js')
	const DevBuildPath = path.join(__DirectoryName, './Source/Client/Entry-Server.tsx')
	const BuildMode = IsProduction ? ProductionBuildPath : DevBuildPath
	const { render } = await Vite.ssrLoadModule(BuildMode)

	/* Serve HTML */
	App.use('*', async (Request: Request, Response: Response, Next: NextFunction) => {
		const URL = Request.originalUrl
		try {
			const Template = await Vite.transformIndexHtml(URL, BaseTemplate)
			const AppHTML = await render(URL)
			const HTML = Template.replace(`<!--App-HTML-->`, AppHTML).replace(`<!--Head-->`, '')
			Response.status(200).set({ 'Content-Type': 'text/html' }).end(HTML)
		} catch (Error: any) { /* eslint-disable-line @typescript-eslint/no-explicit-any */
			!IsProduction && Vite.ssrFixStacktrace(Error)
			console.log(Error.stack)
			Vite.ssrFixStacktrace(Error)
			Next(Error)
		}
	})
	
	/* Start HTTP Server */
	App.listen(Number(PORT), '0.0.0.0', () => {
		console.log(`Server Is Running On http://localhost:${PORT}`)
	})
}

CreateServer()