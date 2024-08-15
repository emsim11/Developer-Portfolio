import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { DeveloperName } from '@/Constants/Developer'

export const HomeButton: FC = () => {
	return (
		<div className='Home-Button'>
			<Link to={'/'}>
				<h2 className='Home-Button-Developer-Name'>
					{DeveloperName}
				</h2>
			</Link>
		</div>
	)
}