import { FC } from 'react'

import './Index.scss'
import { NavItem } from '@/Components/Atoms/Nav-Item/Index'
import { UseMediaQuery } from '@/Hooks/Use-Media-Query'
import { Overlay } from '@/Components/Atoms/Overlay/Index'
import { NavigationItem } from '@/Interfaces/Layout'
import { SocialButtons } from '@/Components/Molecules/Social-Buttons/Index'

interface NavOverlayProps {
	Items: Array<NavigationItem>
	IsOpen: boolean
	Toggle: () => void
}

export const NavOverlay: FC<NavOverlayProps> = ({ Items, IsOpen, Toggle }) => {
	const IsMobile = UseMediaQuery('(max-width: 768px)')
	if (!IsMobile) {
		return null
	}
	return (
		<Overlay IsOpen={IsOpen} Toggle={Toggle}>
			<div className='Navigation-Overlay'>
				{Items
					.filter((Item) => Item.IsMain)
					.map((Item, Index) => {
						return (
							<div key={Index} className='Navigation-Overlay-Item'>
								<NavItem Href={Item.Path}>{Item.Label}</NavItem>
							</div>
						)
					})
				}
			</div>
			<div className='Navigation-Overlay-Socials'>
				<SocialButtons IconSize={40} />
			</div>
		</Overlay>
	)
}