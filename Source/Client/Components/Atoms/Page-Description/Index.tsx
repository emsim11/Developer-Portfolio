import { FC } from 'react'

import './Index.scss'

type PageDescriptionProps = {
	Description: string
}

export const PageDescription: FC<PageDescriptionProps> = ({ Description }) => {
	return (
		<div className='Page-Description'>
			<p className='Page-Description-Text'>
				{Description}
			</p>
		</div>
	)
}