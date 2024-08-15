import { FC } from 'react'

import './Index.scss'
import { HeadingFour } from '../Headings/Index'

interface DetailsTableDataPair {
	Heading: string
	Value: string
}

interface DetailsTableProps {
	Details: DetailsTableDataPair[]
	ExtraClasses?: string
}

export const DetailsTable: FC<DetailsTableProps> = ({ Details, ExtraClasses }) => {
	return (
		<div className={`Details-Table-Overlay ${ExtraClasses ? ExtraClasses : ''}`}>
			{Details.map((Detail, Index) => (
				<div key={Index}>
					<HeadingFour Title={Detail.Heading} />
					<p className='Details-Table'>
						{Detail.Value}
					</p>
				</div>
			))}
		</div>
	)
}