import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'

import './Index.scss'
import { GroupByOptions, SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { Skill, SkillsCategory } from '@/Interfaces/Skill'
import { Database } from '@/Interfaces/Layout'
import { GroupSkills } from '@/Utilities/Skills'
import { IsSkillAssociatedWithMaterial } from '@/Utilities/Materials'
import { MaterialsDatabaseMap } from '@/Constants/Materials'
import { FilterOption } from '@/Interfaces/Filter'
import { Dialog, DialogContent, DialogTrigger } from '@/Components/Atoms/Dialog/Index'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/Components/Atoms/Tooltip/Index'
import { Tag } from '@/Components/Atoms/Tag/Index'
import { HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { ScrollArea } from '@/Components/Atoms/Scroll-Area/Index'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Components/Atoms/Dropdown-Menu/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { SkillTag } from '@/Components/Molecules/Skill-Tag/Index'

interface LanguageTagProps {
	LanguageIdentifier: SkillsDatabase
}

export const LanguagesModal: FC<LanguageTagProps> = ({ LanguageIdentifier }) => {
	const Language: Skill = SkillsDatabaseMap[LanguageIdentifier]
	const [IsModalOpen, SetIsModalOpen] = useState(false) /* eslint-disable-line @typescript-eslint/no-unused-vars */
	const [GroupedBy, SetGroupedBy] = useState('Category')
	const FilterMainSkillsExcludingCategory = (
		SkillSlugs: SkillsDatabase[],
		SkillsHashMap: Database<Skill>,
		ExcludedCategory: SkillCategories,
	): SkillsDatabase[] => {
		return SkillSlugs.filter((SkillSlug) => {
			const Skill: Skill = SkillsHashMap[SkillSlug]
			return Skill?.IsMainSkill && Skill?.Category !== ExcludedCategory
		})
	}
	const LanguagesSkillsSlug: SkillsDatabase[] = FilterMainSkillsExcludingCategory(
		Language.RelatedSkills || [],
		SkillsDatabaseMap,
		SkillCategories.ProgrammingLanguages,
	)
	const HandleOpenModal = (): void => {
		SetIsModalOpen(true)
	}
	const ShouldOpenModal: boolean | undefined = Language?.RelatedSkills && Language.RelatedSkills.length > 0
	const GroupedSkills: SkillsCategory[] = GroupSkills(
		GroupedBy as GroupByOptions,
		LanguagesSkillsSlug,
		SkillsDatabaseMap,
		[SkillTypes.Technical, SkillTypes.Soft],
	)
	const HasMaterial: boolean = IsSkillAssociatedWithMaterial(
		LanguageIdentifier,
		MaterialsDatabaseMap,
	)
	const Options: FilterOption[] = [
		{ ParamName: 'Category', ParamValue: 'Category' },
		{ ParamName: 'None', ParamValue: 'None' },
	]
	const CurrentGroupedName: string = Options.find((Option) => Option.ParamValue === GroupedBy)?.ParamName || 'Category'
	return (
		<Dialog>
			<DialogTrigger>
				<Tooltip>
					<TooltipTrigger>
						<Tag OnClick={ShouldOpenModal ? HandleOpenModal : undefined}>
							{Language.Name}
						</Tag>
					</TooltipTrigger>
					<TooltipContent>
						<p>{`View Technologies Related To ${Language.Name}`}</p>
					</TooltipContent>
				</Tooltip>
			</DialogTrigger>
			<DialogContent className='Languages-Dialog'>
				<div className='Languages-Dialog-Container'>
					<HeadingTwo Title={Language.Name} />
				</div>
				<ScrollArea className='Languages-Scroll-Area'>
					<div className='Languages-Scroll-Area-Container'>
						{/* Grouping Dropdown */}
						<div className='Grouping-Dropdown'>
							<div className='Grouping-Dropdown-Container'>
								Group By:
							</div>
							<DropdownMenu>
								<DropdownMenuTrigger className='Languages-Dropdown-Menu-Trigger'>
									<Button Style='Primary' ExtraClasses='Languages-Dropdown-Menu-Button'>
										<div className='Languages-Dropdown-Menu'>
											<span>{CurrentGroupedName}</span>
											<BsChevronDown fontSize={16} className='Languages-Dropdown-Menu-Button-Icon' />
										</div>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className='Languages-Dropdown-Menu-Content'>
									{Options.map((Option, Index) => (
										<DropdownMenuItem
											key={Index}
											className={`${Option.ParamValue === GroupedBy ? 'Grouped' : ''}`}
											onSelect={() => SetGroupedBy(Option.ParamValue)}
										>
											{Option.ParamName}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						{/* List Of Skills */}
						<div className='Languages-Skills-List'>
							{GroupedSkills.map((CategoryData, Index) => (
								<div key={Index} className='Languages-Skill'>
									<HeadingThree Title={CategoryData.SkillCategoryName} />
									<div className='Languages-Skill-Container'>
										{CategoryData.Skills.map((SkillKey, Index) => (
											<SkillTag key={Index} SkillKey={SkillKey} />
										))}
									</div>
								</div>
							))}
						</div>
						{/* Languages Links */}
						{HasMaterial && (
							<>
								<div className='Languages-Links' />
								<div className='Languages-Link'>
									<Link to={`/Skills/${LanguageIdentifier as string}`}>
										<div className='Languages-Link-Container'>
											<Button Style='Gradient' ExtraClasses='Languages-Link-Button'>
												{`All ${Language.Name} Material`}
											</Button>
										</div>
									</Link>
								</div>
							</>
						)}
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	)
}