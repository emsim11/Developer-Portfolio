import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineManageSearch as ManageSearch } from 'react-icons/md'
import { AiOutlineClear as Clear } from 'react-icons/ai'
import { BsFilterLeft as FilterLeft } from 'react-icons/bs'

import './Index.scss'
import { FilterArchive, FilterCategory, FilterOption, FilterSearch } from '@/Interfaces/Filter'
import { GenerateURL } from '@/Utilities/Materials'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/Atoms/Accordion/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { ArchiveToggle } from '@/Components/Atoms/Archive-Toggle/Index'
import { FilterPanel } from '../Filter-Panel/Index'
import { SearchInput } from '@/Components/Atoms/Search-Input/Index'

interface FilterSectionProps {
	Name: string
	BasePath: string
	FilterCategories: FilterCategory[]
	AreFiltersApplied: boolean
	SearchFilter: FilterSearch
	ArchiveFilter: FilterArchive
}

export const FilterSection: FC<FilterSectionProps> = ({
	Name,
	BasePath,
	SearchFilter,
	FilterCategories,
	AreFiltersApplied,
	ArchiveFilter,
}) => {
	const Router = useNavigate()
	/* Generate `FilterProps` Dynamically From `FilterCategories` */
	const FilterProps: FilterOption[] = FilterCategories.map((Category): FilterOption => ({
		ParamName: Category.URLParam,
		ParamValue: Category.SelectedValue,
	}))
	/* With Search Term */
	FilterProps.push({
		ParamName: SearchFilter.SearchParamName,
		ParamValue: SearchFilter.SearchTerm,
	})
	/* With Archive Filter */
	FilterProps.push({
		ParamName: ArchiveFilter.ParamName,
		ParamValue: ArchiveFilter.ShowArchived.toString(),
	})
	/* Update Search Term In URL With Persistent Filters */
	const UpdateSearchTerm = (NewSearchTerm: string) => {
		const UpdatedFilterProps: FilterOption[] = FilterProps.map((FilterProp) => {
			/* Update Search Term */
			if (FilterProp.ParamName === SearchFilter.SearchParamName) {
				return { ...FilterProp, ParamValue: NewSearchTerm }
			}
			/* Show Archived Materials */
			if (FilterProp.ParamName === ArchiveFilter.ParamName) {
				return { ...FilterProp, ParamValue: true.toString() }
			}
			return FilterProp
		})
		/* Generate New URL With Updated Filter Settings */
		const NewURL: string = GenerateURL(UpdatedFilterProps, BasePath)
		/* Call Router As Function With New URL */
		Router(NewURL)
	}
	/* Display Message In Accordion Trigger Based On Archive Filter */
	const Message: string = ArchiveFilter.HasArchivedMaterials
		? `Search, Filter, And View Archived ${Name}` /* If There Are Archived Materials */
		: `Search & Filter ${Name}` /* If There Are No Archived Materials */
	const [IsFilterModalOpen, SetIsFilterModalOpen] = useState(false)
	const HandleToggleFilter = () => {
		SetIsFilterModalOpen(!IsFilterModalOpen)
	}
	return (
		<>
			<Accordion type='single' collapsible>
				<AccordionItem value='Item-1'>
					<AccordionTrigger>
						<div className='Filter-Section-Accordion-Trigger'>
							<ManageSearch size={28} className='Filter-Section-Manage-Search-Icon' />
							<p className='Filter-Section-Accordion-Message'>
								{Message}
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className='Filter-Section-Accordion-Content'>
							<div className='Filter-Section-Accordion-Content-Container'>
								{/* Search Input */}
								<div className='Filter-Section-Search-Input'>
									<SearchInput
										SearchTerm={SearchFilter.SearchTerm}
										UpdateSearchTerm={UpdateSearchTerm}
										Placeholder={`Search For ${Name} Name Or Metadata`}
									/>
								</div>
								{/* Buttons */}
								<div className='Filter-Section-Buttons'>
									{/* Filter Button */}
									<Button
										Style='Primary'
										onClick={HandleToggleFilter}
										className='Filter-Section-Button'
									>
										<div className='Filter-Section-Button-Icon-Container'>
											<FilterLeft fontSize={24} className='Filter-Section-Button-Icon' />
											<span>Filters</span>
										</div>
									</Button>
									{/* Clear Button */}
									<Link to={BasePath} className='Filter-Section-Clear-Button'>
										<Button
											Style='Primary'
											disabled={!AreFiltersApplied}
											className='Filter-Section-Button'
										>
											<div className='Filter-Section-Button-Icon-Container'>
												<Clear fontSize={24} className='Filter-Section-Button-Icon' />
												<span>Clear All</span>
											</div>
										</Button>
									</Link>
								</div>
							</div>
							{/* Archive Toggle */}
							{ArchiveFilter.HasArchivedMaterials && (
								<ArchiveToggle
									ShowArchived={ArchiveFilter.ShowArchived}
									FilterProps={FilterProps}
									BasePath={BasePath}
								/>
							)}
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			{/* Filter Modal */}
			<FilterPanel
				IsOpen={IsFilterModalOpen}
				Toggle={HandleToggleFilter}
				FilterCategories={FilterCategories}
				BasePath={BasePath}
				ArchiveFilter={{
					ParamName: ArchiveFilter.ParamName,
					ShowArchived: ArchiveFilter.ShowArchived,
					HasArchivedMaterials: ArchiveFilter.HasArchivedMaterials,
				}}
				AreFiltersApplied={AreFiltersApplied}
				SearchFilter={SearchFilter}
			/>
		</>
	)
}