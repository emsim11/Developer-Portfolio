import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { DeveloperName } from '@/Constants/Developer'
import { SocialButtons } from '@/Components/Molecules/Social-Buttons/Index'

export const Footer: FC = () => {
	const CurrentYear: number = new Date().getFullYear() || 2024
	return (
		<footer>
			<hr className='Footer-Horizontal-Rule' />
			<div className='Footer'>
				<div className='Footer-Container'>
					{/* Copyright Links To Homepage */}
					<Link to='/'>
						<p>{`© ${CurrentYear} ${DeveloperName}`}</p>
					</Link>
				</div>
				<SocialButtons />
			</div>
		</footer>
	)
}