import { FC, ReactNode } from 'react'

import './Index.scss'

interface GridProps {
	Items: ReactNode[]
	Gap?: number
}

export const Grid: FC<GridProps> = ({ Items, Gap = 20 }) => {
	const IsOddTotal: boolean = Items.length % 2 !== 0 /* `%` = Remainder */
	const GridStyle = {
		gridGap: `${Gap}px`, /* Dynamically Define Grid Style Using `Gap` Property */
	}
	return (
		<div className='Grid' style={GridStyle}>
			{Items.map((Item, Index) => {
				const IsLastItem = Index === Items.length - 1
				return IsLastItem && IsOddTotal ? (
					<div key={Index} className='Grid-Item-Odd'>
						<div className='Grid-Item-Odd-Container'>
							{Item}
						</div>
					</div>
				) : (
					<div className='Grid-Item' key={Index}>
						{Item}
					</div>
				)
			})}
		</div>
	)
}