import { FC, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { BsChevronDown as ChevronDown } from 'react-icons/bs'
import { Check } from 'lucide-react'

import './Index.scss'
import { GroupByOptions, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { SKILL_PAGE } from '@/Constants/Pages'
import { FilterOption } from '@/Interfaces/Filter'
import { SkillsCategory } from '@/Interfaces/Skill'
import { GroupSkills } from '@/Utilities/Skills'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GenerateURL, SkillHasMaterial } from '@/Utilities/Materials'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/Atoms/Dropdown-Menu/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { Popover, PopoverTrigger } from '@/Components/Atoms/Popover/Index'
import { PopoverContent } from '@radix-ui/react-popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/Components/Atoms/Command/Index'
import { HeadingThree } from '@/Components/Atoms/Headings/Index'
import { SkillTag } from '../Skill-Tag/Index'
import { MaterialsDatabaseMap } from '@/Constants/Materials'

interface SkillsListProps {
	Skills: SkillsDatabase[]
}

export const SkillsList: FC<SkillsListProps> = ({ Skills }) => {
	const [IsOpen, SetIsOpen] = useState(false)
	const [SearchParams] = useSearchParams()
	const BasePath: string = SKILL_PAGE.Path
	const History = useNavigate()
	const GroupParamName = 'Group'
	const HardSkillParamName = 'Hard'
	const GeneralSkillParamName = 'General'
	const SoftSkillParamName = 'Soft'
	const NoMaterialParamName = 'No-Material'
	const SelectedGroup: string = SearchParams.get(GroupParamName) || 'Category'
	const IncludeHardSkills: boolean = SearchParams.get(HardSkillParamName) === 'true'
	const IncludeGeneralSkills: boolean = SearchParams.get(GeneralSkillParamName) === 'true'
	const IncludeSoftSkills: boolean = SearchParams.get(SoftSkillParamName) === 'true'
	const IncludeNoMaterial: boolean = SearchParams.get(NoMaterialParamName) === 'true' /* False By Default */
	/* Logic For Displaying Filtered Skills */
	const Options: FilterOption[] = [
		{ ParamName: 'Category', ParamValue: 'Category' },
		{ ParamName: 'Skill Type', ParamValue: 'Skill-Type' },
		{ ParamName: 'Language', ParamValue: 'Language' },
		{ ParamName: 'None', ParamValue: 'None' },
	]
	const IncludeSkillTypes: SkillTypes[] = []
	if (IncludeHardSkills) IncludeSkillTypes.push(SkillTypes.Technology)
	if (IncludeGeneralSkills) IncludeSkillTypes.push(SkillTypes.Technical)
	if (IncludeSoftSkills) IncludeSkillTypes.push(SkillTypes.Soft)
		/* Group Skills With Inclusion List */
	const GroupedSkills: SkillsCategory[] = GroupSkills(
		SelectedGroup as GroupByOptions,
		Skills,
		SkillsDatabaseMap,
		IncludeSkillTypes,
	)
	/* Logic For Handling Filters */
	const HandleSelect = (Value: string) => {
		/* Construct Array Of FilterOption Objects Including All Current Search Parameters */
		const Params: FilterOption[] = [
			{ ParamName: GroupParamName, ParamValue: Value }, /* Updating The Group */
			/* Include Current State Of All Filters */
			{ ParamName: HardSkillParamName, ParamValue: IncludeHardSkills ? 'true' : 'false' },
			{ ParamName: GeneralSkillParamName, ParamValue: IncludeGeneralSkills ? 'true' : 'false' },
			{ ParamName: SoftSkillParamName, ParamValue: IncludeSoftSkills ? 'true' : 'false' },
			{ ParamName: NoMaterialParamName, ParamValue: IncludeNoMaterial ? 'true' : 'false' },
		]
		/* Generate URL With All Parameters & Navigate */
		History(GenerateURL(Params, BasePath))
	}
	interface FilterParams {
		EntryName: string
		URLParamName: string
		Value: string
		Selected: boolean
	}
	const FilterParams: FilterParams[] = [
		{
			EntryName: 'Hard Skills',
			URLParamName: HardSkillParamName,
			Value: IncludeHardSkills ? 'false' : 'true',
			Selected: IncludeHardSkills,
		},
		{
			EntryName: 'General Skills',
			URLParamName: GeneralSkillParamName,
			Value: IncludeGeneralSkills ? 'false' : 'true',
			Selected: IncludeGeneralSkills,
		},
		{
			EntryName: 'Soft Skills',
			URLParamName: SoftSkillParamName,
			Value: IncludeSoftSkills ? 'false' : 'true',
			Selected: IncludeSoftSkills,
		},
		{
			EntryName: 'With No Material',
			URLParamName: NoMaterialParamName,
			Value: IncludeNoMaterial ? 'false' : 'true',
			Selected: IncludeNoMaterial,
		},
	]
	/* Currently Selected Group From Dropdown */
	const CurrentGroupName = Options.find((Option) => Option.ParamValue === SelectedGroup)?.ParamName || 'Category'
	return (
		<div>
			<div className='Skills-List'>
				<div className='Skills-List-Container'>
					{/* Group By */}
					<div className='Skills-List-Group-By'>
						<p className='Skills-List-Group-By-Text'>
							Group By:
						</p>
						<DropdownMenu>
							<DropdownMenuTrigger className='Skills-List-Dropdown-Menu'>
								<Button Style='Primary' className='Skills-List-Dropdown-Menu'>
									<div className='Skills-List-Dropdown-Menu-Container'>
										<span>{CurrentGroupName}</span>
										<ChevronDown fontSize={16} className='Skills-List-Dropdown-Menu-Icon' />
									</div>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='Skills-List-Dropdown-Menu-Content'>
								{Options.map((Option, Index) => (
									<DropdownMenuItem
										key={Index}
										className={`${Option.ParamValue === SelectedGroup ? 'Selected-Dropdown-Menu-Item' : ''}`}
										onSelect={() => HandleSelect(Option.ParamValue)}
									>
										{Option.ParamName}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					{/* Filter */}
					<Popover open={IsOpen} onOpenChange={SetIsOpen}>
						<PopoverTrigger asChild>
							<Button
								Style='Primary'
								role='combobox'
								onClick={() => SetIsOpen(!IsOpen)}
								className='Skills-List-Popover-Trigger'
							>
								<span>Include Skills</span>
								<ChevronDown fontSize={16} className='Skills-List-Popover-Trigger-Icon' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='Skills-List-Popover-Content'>
							<Command className='Skills-List-Command'>
								<CommandInput placeholder='Search Filter...' />
								<CommandEmpty>No Filter Found</CommandEmpty>
								<CommandGroup className='Skills-List-Dropdown-Menu'>
									{FilterParams.map((Filter, Index) => (
										<Link
											key={Index}
											to={GenerateURL(
												[
													{ ParamName: GroupParamName, ParamValue: SelectedGroup },
													{ ParamName: HardSkillParamName, ParamValue: IncludeHardSkills ? 'true' : 'false' },
													{ ParamName: GeneralSkillParamName, ParamValue: IncludeGeneralSkills ? 'true' : 'false' },
													{ ParamName: SoftSkillParamName, ParamValue: IncludeSoftSkills ? 'true' : 'false' },
													{ ParamName: NoMaterialParamName, ParamValue: IncludeNoMaterial ? 'true' : 'false' },
													// { ParamName: Filter.URLParamName, ParamValue: Filter.Selected ? 'false' : 'true' },
												], BasePath
											)}
											className='Skills-List-Dropdown-Menu'
										>
											<CommandItem
												key={Filter.URLParamName}
												value={Filter.URLParamName}
												className='Skills-List-Dropdown-Menu'
											>
												{!Filter.Selected ? (
													<Check className='Skills-List-Command-Item-Check' />
												) : (
													<div className='Skills-List-Command-Item'></div>
												)}
												{Filter.EntryName}
											</CommandItem>
										</Link>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
				</div>
			</div>
			{/* List Of Skills */}
			<div className='Skills-List-Mapped-Skills'>
				{GroupedSkills.length > 0 ? (
					GroupedSkills.map((CategoryData) => (
						<div key={CategoryData.SkillCategoryName}>
							<HeadingThree Title={CategoryData.SkillCategoryName[0].toUpperCase() + CategoryData.SkillCategoryName.slice(1)} />
							<div className='Skills-List-Skill-Tags'>
								{Object.entries(CategoryData.Skills).map(([Count, SkillKey], Index) => (
									<SkillTag
										key={Count}
										SkillKey={SkillKey}
										Hide={!SkillHasMaterial(SkillKey, MaterialsDatabaseMap) && IncludeNoMaterial}
									/>
								))}
							</div>
						</div>
					))
				) : (
					<div className='Skills-List-No-Matching-Skills'>
						<h2 className='Skills-List-No-Matching-Skills-Title'>No Matching Skills</h2>
					</div>
				)}
			</div>
		</div>
	)
}