import { FC, ReactNode } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import './Index.scss'

interface TagProps {
	OnClick?: () => void
	HasHover?: boolean
	children: ReactNode
}

export const Tag: FC<TagProps> = ({ OnClick, HasHover, children }) => {
	return (
		<div className={`Tag ${OnClick || HasHover ? 'Tag-Hover' : ''}`} onClick={OnClick}>
			<div className='Tag-Container'>
				<p>{children}</p>
				{(OnClick || HasHover) && (
					<IoIosArrowForward className={`Tag-Icon ${children === '...' ? 'Tag-Animate' : ''}`} />
				)}
			</div>
		</div>
	)
}