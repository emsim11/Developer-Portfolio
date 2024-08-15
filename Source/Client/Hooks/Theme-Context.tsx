import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'

import { Theme } from '@/Types/Theme'

interface ThemeStatus {
	ColorScheme: Theme
	SetColorScheme: Dispatch<SetStateAction<Theme>>
}

const ThemeContext = createContext<ThemeStatus>({
	ColorScheme: 'OS-Default',
	SetColorScheme: () => {}
})

export const ThemeProvider = (Props: any) => {
	const InitialTheme = window.localStorage.getItem('Theme')
	const [ColorScheme, SetColorScheme] = useState<Theme>((InitialTheme as Theme) || 'OS-Default')
	useEffect(() => {
		const SetDarkTheme = (Event: any) => {
			if (Event.matches) {
				SetColorScheme('Dark')
			}
		}
		const SetLightTheme = (Event: any) => {
			if (Event.matches) {
				SetColorScheme('Light')
			}
		}
		const DarkTheme = window.matchMedia('(prefers-color-scheme: Dark)')
		if (DarkTheme.matches) {
			SetColorScheme('Dark')
		}
		DarkTheme.addEventListener('change', SetDarkTheme)
		const LightTheme = window.matchMedia('(prefers-color-scheme: Light)')
		LightTheme.addEventListener('change', SetLightTheme)
		return () => {
			LightTheme.removeEventListener('change', SetLightTheme)
			DarkTheme.removeEventListener('change', SetDarkTheme)
		}
	}, [])
	return (
		<ThemeContext.Provider
			value={{
				ColorScheme,
				SetColorScheme,
			}}
		>
			{Props.children}
		</ThemeContext.Provider>
	)
}

export const UseThemeStatus = () => {
	return useContext(ThemeContext)
}

export const SwitchTheme = (Theme: Theme, Set: (Theme: Theme) => void) => {
	const HTML = document.documentElement
	if (window && HTML) {
		HTML.className = Theme
		HTML.style.backgroundColor = ''
		setTimeout(() => {
			const Meta = document.querySelector<HTMLMetaElement>(
				'meta[name="theme-color"]'
			)
			const Color = getComputedStyle(document.body).backgroundColor
			if (Meta && Color) {
				Meta.content = Color
			}
		}, 1)
		try {
			window.localStorage.setItem('Theme', Theme)
		} catch (Error) {
			console.warn('Unable To Write Theme To Local Storage', Error)
		}
		Set(Theme)
	}
}