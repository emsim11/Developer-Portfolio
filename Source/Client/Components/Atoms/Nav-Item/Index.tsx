import { FC, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Index.scss'
import { UseNavStore } from '@/Hooks/Use-Nav-Store'

interface NavItemProps {
	Href: string
	children: ReactNode
}

export const NavItem: FC<NavItemProps> = ({ Href, children }) => {
	const { pathname } = useLocation()
	const IsActive: boolean = pathname === Href
	const { IsOpen: IsOverlayOpen, Close: CloseOverlay } = UseNavStore()
	const HandleClick = () => {
		if (IsOverlayOpen) {
			CloseOverlay() /* Close Overlay & Navigate To Page */
		}
	}
	return (
		<Link
			to={Href}
			className={`Navigation-Item ${IsActive ? 'Active' : ''}`}
			onClick={() => HandleClick()}
		>
			{children}
			{/* Underline Currently-Hovered Navigation Item */}
			<span className='Navigation-Item-Underline'></span>
		</Link>
	)
}