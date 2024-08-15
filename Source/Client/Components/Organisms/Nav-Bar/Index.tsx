import { FC, useEffect, useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import './Index.scss'
import { HomeButton } from '@/Components/Atoms/Home-Button/Index'
import { NavOverlay } from '../Nav-Overlay/Index'
import { NavSection } from '@/Components/Molecules/Nav-Section/Index'
import { ThemeSwitcher } from '@/Components/Molecules/Theme-Switcher/Index'
import { NAVIGATION_ITEMS } from '@/Constants/Pages'
import { UseNavStore } from '@/Hooks/Use-Nav-Store'

export const NavBar: FC = () => {
	const [Scrolled, SetScrolled] = useState(false)
	const { IsOpen: IsOverlayOpen, Toggle: ToggleOverlay } = UseNavStore()
	useEffect(() => {
		const HandleScroll = () => {
			const IsScrolled: boolean = window.screenY > 0
			SetScrolled(IsScrolled)
		}
		window.addEventListener('scroll', HandleScroll)
		return () => {
			window.removeEventListener('scroll', HandleScroll)
		}
	}, [])
	return (
		<>
			<header className={`Header ${Scrolled && !IsOverlayOpen ? 'Navigation-Shadow' : ''} ${IsOverlayOpen ? 'Overlay-Open' : 'Overlay-Closed'}`}>
				<div className='Navigation'>
					<div className='Navigation-Container'>
						<HomeButton />
						{/* Mobile Only */}
						<div className='Navigation-Mobile'>
							<ThemeSwitcher />
							{/* Hamburger Menu */}
							<button className='Navigation-Menu' onClick={() => ToggleOverlay()}>
								{IsOverlayOpen ? (
									<IoMdClose size={30} />
								) : (
									<IoMdMenu size={30} />
								)}
							</button>
						</div>
					</div>
					{/* Desktop Only */}
					<NavSection Items={NAVIGATION_ITEMS} />
				</div>
			</header>
			<NavOverlay
				Items={NAVIGATION_ITEMS}
				IsOpen={IsOverlayOpen}
				Toggle={ToggleOverlay}
			/>
		</>
	)
}