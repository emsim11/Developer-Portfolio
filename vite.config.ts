/// <reference types='vite/client' />

import * as Path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { terser as Terser } from 'rollup-plugin-terser'

import Manifest from './Public/Manifest.json'
let FavIcon = './Public/Logo.svg'

export default defineConfig({
	build: {
		rollupOptions: {
			external: ['fs'],
			plugins: [Terser()], /* Enable Minification */
		},
		chunkSizeWarningLimit: 2000, /* Set A Warning Limit For Chunk Size */
	},
	plugins: [
		react(),
		VitePWA({
			devOptions: {
				enabled: true,
				type: 'module',
			},
			includeAssets: [
				FavIcon,
			],
			injectRegister: 'inline',
			manifest: {
				...Manifest,
				display: 'standalone',
				orientation: 'any',
			},
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,ts,tsx,css,scss,html,ico,jpeg,jpg,png,svg,md,pdf,ttf}'],
			},
		}),
	],
	resolve: {
		alias: [
			{ find: '@', replacement: Path.resolve(__dirname, 'Source/Client') },
			{ find: '@/App', replacement: Path.resolve(__dirname, 'Source/Client/App') },
			{ find: '@/Assets', replacement: Path.resolve(__dirname, 'Source/Client/Assets') },
			{ find: '@/Components', replacement: Path.resolve(__dirname, 'Source/Client/Components') },
			{ find: '@/Constants', replacement: Path.resolve(__dirname, 'Source/Client/Constants') },
			{ find: '@/Context', replacement: Path.resolve(__dirname, 'Source/Client/Context') },
			{ find: '@/Hooks', replacement: Path.resolve(__dirname, 'Source/Client/Hooks') },
			{ find: '@/Pages', replacement: Path.resolve(__dirname, 'Source/Client/Pages') },
			{ find: '@/SASS', replacement: Path.resolve(__dirname, 'Source/Client/SASS') },
			{ find: '@/Utilities', replacement: Path.resolve(__dirname, 'Source/Client/Utilities') },
		],
	},
})