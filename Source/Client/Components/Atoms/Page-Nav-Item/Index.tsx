import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { NavigationItem } from '@/Interfaces/Layout'

interface PageNavItemProps {
	Item: NavigationItem
}

export const PageNavItem: FC<PageNavItemProps> = ({ Item }) => {
	return (
		<>
			<Link to={Item.Path}>
				<div className='Page-Navigation-Item'>
					<h2 className='Page-Navigation-Item-Label'>
						{Item.Label}
					</h2>
					<p className='Page-Navigation-Item-Description'>
						{Item.Description}
					</p>
				</div>
			</Link>
		</>
	)
}