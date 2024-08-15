import { FC } from 'react'

import './Index.scss'
import { SocialLinks } from '@/Constants/Developer'
import { SocialIcon } from '@/Components/Atoms/Social-Icon/Index'

type SocialButtonsProps = {
	ExtraClasses?: string
	IconSize?: number
}

export const SocialButtons: FC<SocialButtonsProps> = ({ ExtraClasses, IconSize }) => {
	return (
		<div className={`Social-Buttons ${ExtraClasses || ''}`}>
			{SocialLinks.map((SocialLink) => (
				<SocialIcon
					key={SocialLink.Name}
					Name={SocialLink.Name}
					URL={SocialLink.URL}
					IconComponent={SocialLink.IconComponent}
					IconSize={IconSize}
				/>
			))}
		</div>
	)
}