import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { GenerateURL } from '@/Utilities/Materials'
import { FilterOption } from '@/Interfaces/Filter'
import { Switch } from '../Switch/Index'

interface ArchiveToggleProps {
	ShowArchived: boolean
	BasePath: string
	FilterProps: FilterOption[]
}

export const ArchiveToggle: FC<ArchiveToggleProps> = ({ ShowArchived, BasePath, FilterProps }) => {
	const FiltersWithArchive: FilterOption[] = [
		...FilterProps,
		{ ParamName: 'Archived', ParamValue: (!ShowArchived).toString() },
	]
	return (
		<div className='Archive-Toggle'>
			<span className='Archive-Toggle-Container'>
				Display Archived
			</span>
			<Link to={GenerateURL(FiltersWithArchive, BasePath)}>
				<Switch checked={ShowArchived} />
			</Link>
		</div>
	)
}