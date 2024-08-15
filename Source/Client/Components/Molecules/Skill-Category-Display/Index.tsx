import { FC, useState } from 'react'
import './Index.scss'
import { SkillsCategory } from '@/Interfaces/Skill'
import { UseMediaQuery } from '@/Hooks/Use-Media-Query'
import { SkillsDatabase } from '@/Enums/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { HeadingFour } from '@/Components/Atoms/Headings/Index'
import { SkillTag } from '../Skill-Tag/Index'
import { ExpandCollapseButton } from '@/Components/Atoms/Expand-Collapse-Button/Index'


interface SkillCategoryDisplayProps {
	SkillCategories: SkillsCategory[]
}

export const SkillCategoryDisplay: FC<SkillCategoryDisplayProps> = ({ SkillCategories }) => {
	const [ShowAll, SetShowAll] = useState(false)
	const ShouldDisplayTitle: boolean = SkillCategories.length > 1
	const IsTablet: boolean = UseMediaQuery('(max-width: 976px)')
	const MaxSkillCount: number = 18
	const MaxGroupCount: number = IsTablet ? 2 : 3 /* Number Of Columns To Display */
	let SkillCount: number = 0
	let GroupCount: number = 0
	const FilterSkills = (
		Skills: SkillsDatabase[],
		OnlyMain: boolean,
	): SkillsDatabase[] => {
		return Skills.filter((SkillKey) => OnlyMain ? SkillsDatabaseMap[SkillKey]?.IsMainSkill : true)
	}
	const TotalMainSkillsCount: number = SkillCategories.reduce((Accumulator, CategoryData) => {
		return (
			Accumulator + CategoryData.Skills.filter((SkillKey) => SkillsDatabaseMap[SkillKey]?.IsMainSkill).length
		)
	}, 0)
	const DisplayedSkills: SkillsCategory[] = ShowAll
		? SkillCategories
		: SkillCategories.reduce((Accumulator: SkillsCategory[], CategoryData) => {
			if (SkillCount < MaxSkillCount && GroupCount < MaxGroupCount) {
				const FilteredSkills: SkillsDatabase[] = FilterSkills(
					CategoryData.Skills,
					true,
				)
				const SkillsToDisplay: SkillsDatabase[] = FilteredSkills.length
					? FilteredSkills
					: CategoryData.Skills
				const AvailableSlots: number = Math.min(
					MaxSkillCount - SkillCount,
					SkillsToDisplay.length
				)
				const LimitedSkills: SkillsDatabase[] = SkillsToDisplay.slice(0, AvailableSlots)
				if (LimitedSkills.length > 0) {
					Accumulator.push({
						SkillCategoryName: CategoryData.SkillCategoryName,
						Skills: LimitedSkills,
					})
					SkillCount += AvailableSlots
					GroupCount++
				}
			}
			return Accumulator
		}, [])
	const DisplayedMainSkillsCount: number = DisplayedSkills.reduce((Accumulator, CategoryData) => {
		return (
			Accumulator + CategoryData.Skills.filter((SkillKey) => SkillsDatabaseMap[SkillKey]?.IsMainSkill).length
		)
	}, 0)
	const ShouldShowToggleButton: boolean = ShowAll || DisplayedMainSkillsCount < TotalMainSkillsCount
	const ToggleShowAll = (): void => {
		SetShowAll(!ShowAll)
	}
	const GridStyle: string = ShouldDisplayTitle
		? 'Multiple-Categories-Display'
		: 'Single-Category-Display'
	return (
		<div>
			<div className={GridStyle}>
				{DisplayedSkills.map((CategoryData) => (
					<div key={CategoryData.SkillCategoryName} className='Skill-Category-Display'>
						{ShouldDisplayTitle && (
							<HeadingFour Title={CategoryData.SkillCategoryName} />
						)}
						<div className='Skill-Category-Display-Slug'>
							{CategoryData.Skills.map((SkillSlug) => (
								<SkillTag key={SkillSlug} SkillKey={SkillSlug} />
							))}
						</div>
					</div>
				))}
			</div>
			{ShouldShowToggleButton && (
				<div className='Skill-Category-Display-Toggle'>
					<ExpandCollapseButton IsExpanded={ShowAll} OnToggle={ToggleShowAll} />
				</div>
			)}
		</div>
	)
}