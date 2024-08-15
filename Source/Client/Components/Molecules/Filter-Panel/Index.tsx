import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClear as Clear } from 'react-icons/ai'
import { IoClose as Close } from 'react-icons/io5'

import './Index.scss'
import { FilterArchive, FilterCategory, FilterOption, FilterSearch } from '@/Interfaces/Filter'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'
import { HeadingThree } from '@/Components/Atoms/Headings/Index'
import { FilterPopover } from '../Filter-Popover/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { ArchiveToggle } from '@/Components/Atoms/Archive-Toggle/Index'

interface FilterPanelProps {
	FilterCategories: FilterCategory[]
	ArchiveFilter: FilterArchive
	SearchFilter: FilterSearch
	BasePath: string
	IsOpen: boolean
	Toggle: () => void
	AreFiltersApplied: boolean
}

export const FilterPanel: FC<FilterPanelProps> = ({
	FilterCategories,
	ArchiveFilter,
	SearchFilter,
	BasePath,
	IsOpen,
	Toggle,
	AreFiltersApplied,
}) => {
	const IsMounted: boolean = UseIsMounted()
	useEffect(() => {
		const HandleEscape = (Event: KeyboardEvent) => {
			if (Event.key === 'Escape') {
				Toggle()
			}
		}
		if (!IsMounted) {
			window.addEventListener('keydown', HandleEscape)
		}
		/* Cleanup Event Listener */
		return () => {
			if (IsMounted) {
				window.removeEventListener('keydown', HandleEscape)
			}
		}
	}, [IsMounted, Toggle])
	if (!IsMounted) {
		return null
	}
	const FilterProps: FilterOption[] = FilterCategories.map((Category): FilterOption => ({
		ParamName: Category.URLParam,
		ParamValue: Category.SelectedValue,
	}))
	FilterProps.push({
		ParamName: ArchiveFilter.ParamName,
		ParamValue: ArchiveFilter.ShowArchived.toString(),
	})
	return (
		<div className={`Filter-Panel ${IsOpen ? 'Filter-Panel-Open' : 'Filter-Panel-Closed'}`}>
			<div className='Filter-Panel-Container'>
				<div className='Filter-Panel-Title'>
					<HeadingThree Title='Filters' />
					<button onClick={Toggle}>
						<span className='Filter-Panel-Filters-Close'>Close</span>
						<Close aria-hidden='true' className='Filter-Panel-Filters-Close-Icon' />
					</button>
				</div>
				<div className='Filter-Panel-Text-Container'>
					<p className='Filter-Panel-Text'>
						When applying filters, archived items are displayed automatically.
					</p>
					{/* Filter Options */}
					<div className='Filter-Panel-Filter-Options'>
						{FilterCategories.map((FilterCategory, Index) => (
							<FilterPopover
								key={Index}
								BasePath={BasePath}
								SelectedFilterCategory={FilterCategory}
								FilterCategories={FilterCategories}
								ArchiveFilter={ArchiveFilter}
								SearchFilter={SearchFilter}
							/>
						))}
					</div>
					{/* Buttons */}
					<div className='Filter-Panel-Buttons'>
						{/* Clear Button */}
						<Button
							Style='Primary'
							disabled={!AreFiltersApplied}
							className='Filter-Panel-Clear-Button'
						>
							<Link to={BasePath} className='Filter-Panels'>
								<div className='Filter-Panel-Clear-Container'>
									<Clear fontSize={24} className='Filter-Panel-Clear-Icon' />
									<span>Clear All</span>
								</div>
							</Link>
						</Button>
						{/* Archive Toggle */}
						{ArchiveFilter.HasArchivedMaterials && (
							<div className='Filter-Panels'>
								<div className='Filter-Panel-Archive-Toggle'>
									<ArchiveToggle
										ShowArchived={ArchiveFilter.ShowArchived}
										FilterProps={FilterProps}
										BasePath={BasePath}
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}