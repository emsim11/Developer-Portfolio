import { FC } from 'react'
import { TbCircleFilled } from 'react-icons/tb'

import './Index.scss'

interface StringListProps {
	Items: string[]
}

export const StringList: FC<StringListProps> = ({ Items }) => {
	return (
		<div>
			<ul className='String-List'>
				{Items.map((Item, Index) => (
					<li key={Index} className='String-List-Item'>
						<div className='String-List-Icon-Div'>
							<TbCircleFilled size={6} className='String-List-Icon' />
						</div>
						<div className='String-List-Item-Text'>
							{Item}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}