import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { SocialLink } from '@/Interfaces/Developer'
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip/Index'

interface SocialIconProps extends SocialLink {
	IconSize?: number
}

export const SocialIcon: FC<SocialIconProps> = ({
	Name,
	URL,
	IconComponent,
	IconSize = 30,
}) => {
	return (
		<Tooltip>
			<TooltipTrigger>
				<Link to={URL} target='_blank'>
					<IconComponent className='Social-Icon' size={IconSize} />
				</Link>
			</TooltipTrigger>
			<TooltipContent>
				<p>{Name}</p>
			</TooltipContent>
		</Tooltip>
	)
}