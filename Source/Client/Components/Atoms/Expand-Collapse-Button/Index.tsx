import { FC } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import './Index.scss'

interface ExpandCollapseButtonProps {
	IsExpanded: boolean
	OnToggle: () => void
	ExtraClasses?: string
}

export const ExpandCollapseButton: FC<ExpandCollapseButtonProps> = ({
	IsExpanded,
	OnToggle,
	ExtraClasses = '',
}) => {
	return (
		<button className={`Expand-Collapse-Button ${ExtraClasses ? ExtraClasses : ''}`} onClick={OnToggle}>
			{IsExpanded ? 'Show Less' : 'Show More'}
			{IsExpanded ? (
				<MdKeyboardArrowUp size={25} />
			) : (
				<MdKeyboardArrowDown size={25} />
			)}
		</button>
	)
}