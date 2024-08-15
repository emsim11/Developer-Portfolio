import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { BsChevronDown as ChevronDown } from 'react-icons/bs'

import './Index.scss'
import { FilterArchive, FilterCategory, FilterSearch } from '@/Interfaces/Filter'
import { Popover, PopoverContent } from '@/Components/Atoms/Popover/Index'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from '@/Components/Atoms/Button/Index'
import { GenerateURL } from '@/Utilities/Materials'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/Components/Atoms/Command/Index'

interface FilterPopoverProps {
	SelectedFilterCategory: FilterCategory
	FilterCategories: FilterCategory[]
	ArchiveFilter: FilterArchive
	SearchFilter: FilterSearch
	BasePath: string
}

export const FilterPopover: FC<FilterPopoverProps> = ({
	SelectedFilterCategory,
	FilterCategories,
	ArchiveFilter,
	SearchFilter,
	BasePath,
}: FilterPopoverProps) => {
	const [IsOpen, SetIsOpen] = useState(false)
	/* GAP */
	const GetSelectedOptionName = (SelectedFilterCategory: FilterCategory): string | undefined => {
		const SelectedOption = SelectedFilterCategory.Options.find((Option) => {
			Option.ParamValue === SelectedFilterCategory.SelectedValue
		})
		return SelectedOption ? SelectedOption.ParamName : undefined
	}
	const CurrentFilterOptionName: string | undefined = GetSelectedOptionName(SelectedFilterCategory)
	return (
		<Popover
			key={SelectedFilterCategory.URLParam}
			open={IsOpen}
			onOpenChange={SetIsOpen}
		>
			<PopoverTrigger asChild>
				<Button
					Style='Primary'
					role='combobox'
					onClick={() => SetIsOpen(!IsOpen)}
					className='Filter-Popover-Button'
				>
					<div className='Filter-Popover'>
						<span>{SelectedFilterCategory.SectionName}</span>
						<span className='Filter-Popover-Current-Filter-Name'>
							{CurrentFilterOptionName}
						</span>
					</div>
					<ChevronDown fontSize={16} className='Filter-Popover-Chevron-Icon' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='Filter-Popover-Content'>
				<Command className='Filter-Popover-Command'>
					<CommandInput placeholder='Search Filter...' />
					<CommandEmpty>No Filter Found</CommandEmpty>
					<CommandGroup className='Filter-Popover-Command-Group'>
						{SelectedFilterCategory.Options.map((Option, Index) => (
							<Link
								key={Index}
								className='Filter-Popover-Command'
								to={GenerateURL([
									/* Existing Filters */
									...FilterCategories.map((Category) => ({
										ParamName: Category.URLParam,
										ParamValue: Category.SelectedValue,
									})),
									/* Include Current Search Term Dynamically */
									{
										ParamName: SearchFilter.SearchParamName,
										ParamValue: SearchFilter.SearchTerm,
									},
									/* Always Show Archived Material When Filter Is Selected */
									{
										ParamName: ArchiveFilter.ParamName,
										ParamValue: true.toString(),
									},
									/* New Filter Being Applied */
									{
										ParamName: SelectedFilterCategory.URLParam,
										ParamValue: Option.ParamValue,
									},
								], BasePath)}
							>
								<CommandItem
									key={Option.ParamValue}
									value={Option.ParamValue}
									className='Filter-Popover-Command-Item'
								>
									{SelectedFilterCategory.SelectedValue === Option.ParamValue ? (
										<Check className='Filter-Popover-Command-Check' />
									) : (
										<div className='Filter-Popover-Command-Check-No-Slug'></div>
									)}
									{Option.ParamName}
								</CommandItem>
							</Link>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}