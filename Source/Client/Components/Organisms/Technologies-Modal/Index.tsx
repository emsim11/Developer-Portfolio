import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'

import './Index.scss'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'
import { FilterOption } from '@/Interfaces/Filter'
import { Database } from '@/Interfaces/Layout'
import { Skill, SkillsCategory } from '@/Interfaces/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GroupByOptions, SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { FilterCategoriesFromSkills, GroupSkills } from '@/Utilities/Skills'
import { Dialog, DialogContent, DialogTrigger } from '@/Components/Atoms/Dialog/Index'
import { Tag } from '@/Components/Atoms/Tag/Index'
import { HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { ScrollArea } from '@/Components/Atoms/Scroll-Area/Index'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/Atoms/Dropdown-Menu/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { SkillTag } from '@/Components/Molecules/Skill-Tag/Index'

export const TechnologiesModal: FC = () => {
	const [IsModalOpen, SetIsModalOpen] = useState(false) /* eslint-disable-line @typescript-eslint/no-unused-vars */
	const IsMounted: boolean = UseIsMounted()
	const [GroupedBy, SetGroupedBy] = useState('Category')
	if (!IsMounted) {
		return null
	}
	const HandleOpenModal = (): void => {
		SetIsModalOpen(true)
	}
	const Options: FilterOption[] = [
		{ ParamName: 'Category', ParamValue: 'Category' },
		{ ParamName: 'Language', ParamValue: 'Language' },
		{ ParamName: 'None', ParamValue: 'None' },
	]
	const MainSkillsHashMap: Database<Skill> = {}
	Object.entries(SkillsDatabaseMap).forEach(([Key, Skill]) => {
		if (Skill.IsMainSkill) {
			MainSkillsHashMap[Key] = Skill
		}
	})
	const IgnoredCategories: SkillCategories[] = [
		SkillCategories.Automation,
		SkillCategories.CloudComputing,
		SkillCategories.ProjectManagement,
		SkillCategories.VersionControl,
		...(GroupedBy !== 'Language'
			? [SkillCategories.ProgrammingLanguages]
			: []
		),
	]
	/* Display Only Technologies (Hard Skills) - Exclude Programming Languages */
	const SkillsToDisplay: SkillsDatabase[] = FilterCategoriesFromSkills(
		MainSkillsHashMap,
		IgnoredCategories,
	)
	/* Displayed Skill Groups */
	const GroupedSkills: SkillsCategory[] = GroupSkills(
		GroupedBy as GroupByOptions,
		SkillsToDisplay,
		SkillsDatabaseMap,
		[SkillTypes.Technical, SkillTypes.Soft]
	)
	const CurrentGroupedName: string = Options.find((Option) => Option.ParamValue === GroupedBy)?.ParamName || 'Category'
	return (
		<Dialog>
			<DialogTrigger>
				<Tag OnClick={HandleOpenModal}>...</Tag>
			</DialogTrigger>
			<DialogContent>
				<div className='Technologies-Dialog-Content'>
					<HeadingTwo Title='Technologies' />
				</div>
				<ScrollArea className='Technologies-Scroll-Areas'>
					<div className='Technologies-Scroll-Area'>
						<div className='Technologies-Scroll-Area-Container'>
							{/* Dropdown */}
							<div className='Technologies-Dropdown'>
								Group By:
							</div>
							<DropdownMenu>
								<DropdownMenuTrigger className='Technologies-Dropdown-Menu'>
									<Button Style='Primary' ExtraClasses='Technologies-Button'>
										<div className='Technologies-Button-Container'>
											<span>{CurrentGroupedName}</span>
											<BsChevronDown fontSize={16}  className='Technologies-Button-Icon' />
										</div>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className='Technologies-Dropdown-Menu'>
									{Options.map((Option, Index) => (
										<DropdownMenuItem
											key={Index}
											className={`${Option.ParamValue === GroupedBy ? 'Technology-Group' : ''}`}
											onSelect={() => SetGroupedBy(Option.ParamValue)}
										>
											{Option.ParamName}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						{/* List Of Technology Skills */}
						<div className='Technology-Skills'>
							{GroupedSkills.map((CategoryData, Index) => (
								<div key={Index}>
									<HeadingThree Title={CategoryData.SkillCategoryName} />
									<div className='Technology-Skills-Container'>
										{CategoryData.Skills.map((SkillSlug) => (
											<SkillTag key={SkillSlug} SkillKey={SkillSlug} />
										))}
									</div>
								</div>
							))}
						</div>
						<div className='Technologies-Section-Break' />
						{/* All Material Button */}
						<div className='Technology-Materials'>
							<Link to={`/Skills`}>
								<div className='Technology-Materials-Container'>
									<Button Style='Gradient' ExtraClasses='Technology-Materials-Container'>
										{`All Technologies & Skills`}
									</Button>
								</div>
							</Link>
						</div>
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	)
}