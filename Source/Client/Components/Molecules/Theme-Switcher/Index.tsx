import { FC, MouseEvent, useState } from 'react'
import { LuMonitor as Computer } from 'react-icons/lu'
import {
	RiMoonFill as Moon,
	RiSunLine as Sun,
} from 'react-icons/ri'

import './Index.scss'
import { Theme } from '@/Types/Theme'
import { SwitchTheme, UseThemeStatus } from '@/Hooks/Theme-Context'

interface ThemeSwitcherProps {
	Id: Theme
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ Id }) => {
	const { SetColorScheme } = UseThemeStatus()
	const [CurrentTheme, SetCurrentTheme] = useState<Theme>('OS-Default')
	const [ShowDropdown, SetShowDropdown] = useState(false)
	const OSDefaultTheme = localStorage.getItem('Theme')
	const HandleDropdownToggle = (Event: MouseEvent) => {
		Event.preventDefault()
		SetShowDropdown(!ShowDropdown)
	}
	const HandleDropdownSelect = (SelectedTheme: Theme) => {
		SetCurrentTheme(SelectedTheme)
		SetShowDropdown(false)
		SwitchTheme(SelectedTheme, SetCurrentTheme)
	}
	const ToggleTheme = () => {
		if (!ShowDropdown) {
			let NewTheme: Theme
			const HTMLElement = document.querySelector('html')
			const HTMLClassName = HTMLElement?.className
			if (HTMLClassName === 'Light') {
				NewTheme = 'Dark'
			} else if (HTMLClassName === 'Dark') {
				NewTheme = 'Light'
			} else {
				const OSDefaultTheme = localStorage.getItem('Theme')
				NewTheme = OSDefaultTheme === 'Light' ? 'Dark' : 'Light'
			}
			SetCurrentTheme(NewTheme)
			SetColorScheme(NewTheme)
			SwitchTheme(NewTheme, SetCurrentTheme)
		}
	}
	const ThemeSwitcherDropdown: FC = () => {
		return (
			<div className='Theme-Switcher-Dropdown'>
				<ul className='Theme-Switcher-Dropdown-List'>
					<li
						className='Theme-Switcher-Dropdown-Item'
						onClick={() => HandleDropdownSelect('Light')}
					>
						<Sun size={20} />
						Light {CurrentTheme === 'Light'}
					</li>
					<li
						className='Theme-Switcher-Dropdown-Item'
						onClick={() => HandleDropdownSelect('Dark')}
					>
						<Moon size={20} />
						Dark {CurrentTheme === 'Dark'}
					</li>
					<li
						className='Theme-Switcher-Dropdown-Item'
						onClick={() => HandleDropdownSelect('OS-Default')}
					>
						<Computer size={20} />
						System {CurrentTheme === 'OS-Default'}
					</li>
				</ul>
			</div>
		)
	}
	return (
		<div>
			<button
				className={`Theme-Switcher ${CurrentTheme === Id ? 'Active-Theme' : ''} ${ShowDropdown ? 'Dropdown-Open' : 'Dropdown-Closed'}`}
				onClick={ToggleTheme}
				onContextMenu={HandleDropdownToggle}
			>
				{OSDefaultTheme === 'Light' && (
					<Moon size={27} className='Theme-Icon Moon-Icon' />
				)}
				{OSDefaultTheme === 'Dark' && (
					<Sun size={27} className='Theme-Icon Sun-Icon' />
				)}
				{/* {CurrentTheme === 'OS-Default' && (
					<Computer size={27} className='Theme-Icon Sun-Icon' />
				)} */}
			</button>
			{ShowDropdown && <ThemeSwitcherDropdown />}
		</div>
	)
}


/**
 * 1. Update `HandleDropdownSelect` to properly update system theme.
 * 2. Implement styling to hide Theme Switcher button when dropdown is open.
 * 3. Add hover background color to dropdown theme options.
 */
