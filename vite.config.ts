/// <reference types='vite/client' />

import * as Path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

import Manifest from './Public/Manifest.json'
let FavIcon = './Public/Logo.svg'

export default defineConfig({
	build: {
		rollupOptions: {
		  	external: ['fs'],
		},
	},
	plugins: [
		react(),
		VitePWA({
			devOptions: {
				enabled: true,
			},
			includeAssets: [
				FavIcon,
			],
			manifest: {
				...Manifest,
				display: 'standalone',
				orientation: 'any',
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