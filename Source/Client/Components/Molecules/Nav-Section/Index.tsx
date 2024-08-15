import { FC } from 'react'

import './Index.scss'
import { NavItem } from '../../Atoms/Nav-Item/Index.tsx'
import { NavigationItem } from '@/Interfaces/Layout.ts'
import { ThemeSwitcher } from '../Theme-Switcher/Index.tsx'

interface NavSectionProps {
	Items: Array<NavigationItem>
}

export const NavSection: FC<NavSectionProps> = ({ Items }) => {
	return (
		<div className='Nav-Section'>
			<div className='Nav-Section-Container'>
				{Items
					.filter((Item) => Item.IsMain)
					.map((Item) => {
						return (
							<div key={Item.Label} className='Nav-Section-Item'>
								<NavItem Href={Item.Path}>{Item.Label}</NavItem>
							</div>
						)
					})
				}
				<div className='Theme-Switcher-Container'>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}