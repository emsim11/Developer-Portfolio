import { FC } from 'react'

import './Index.scss'
import { Database } from '@/Interfaces/Layout'
import { Skill } from '@/Interfaces/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { SkillCategories, SkillsDatabase } from '@/Enums/Skill'
import { FilterCategoriesFromSkills } from '@/Utilities/Skills'
import { HeadingThree } from '@/Components/Atoms/Headings/Index'
import { SkillTag } from '@/Components/Molecules/Skill-Tag/Index'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/Components/Atoms/Tooltip/Index'
import { TechnologiesModal } from '@/Components/Organisms/Technologies-Modal/Index'

export const TechnologiesSection: FC = () => {
	const MainSkills: Database<Skill> = {}
	Object.entries(SkillsDatabaseMap).forEach(([Key, Skill]) => {
		if (Skill.IsMainSkill) {
			MainSkills[Key] = Skill
		}
	})
	const MainSkillSlugs: SkillsDatabase[] = Object.keys(MainSkills) as SkillsDatabase[] /* eslint-disable-line @typescript-eslint/no-unused-vars */
	const IgnoredCategories: SkillCategories[] = [
		SkillCategories.Automation,
		SkillCategories.CloudComputing,
		SkillCategories.Database,
		SkillCategories.Mathematics,
		SkillCategories.ProgrammingLanguages,
		SkillCategories.ProjectManagement,
		SkillCategories.VersionControl,
	]
	/* Display Only Technologies (Hard Skills) - Exclude Programming Languages */
	const SkillsToDisplay: SkillsDatabase[] = FilterCategoriesFromSkills(
		MainSkills,
		IgnoredCategories,
	)
	/* Retrieve First `Limit` Skills & Display As Tags */
	const FirstSkills = (
		SkillKeys: SkillsDatabase[],
		TotalLimit: number,
	): SkillsDatabase[] => {
		return SkillKeys.slice(0, TotalLimit)
	}
	/* Retrieve First `X` Amount Of Skills From Each Category & Display As Tags */
	const FirstSkillsPerCategory = (
		SkillKeys: SkillsDatabase[],
		LimitPerCategory: number,
	): SkillsDatabase[] => {
		const SkillCategories: { [CategoryName: string]: SkillsDatabase[] } = {}
		let LimitedSkillSlugs: SkillsDatabase[] = []
		/* Organize Skill Slugs Into Categories */
		SkillKeys.forEach((SkillSlug) => {
			const SkillDetails: Skill = SkillsDatabaseMap[SkillSlug]
			const Category: SkillCategories = SkillDetails.Category || 'Other'
			if (!SkillCategories[Category]) {
				SkillCategories[Category] = []
			}
			SkillCategories[Category].push(SkillSlug)
		})
		/* Collect First `Limit Per Category` Skill Slugs From Each Category */
		Object.values(SkillCategories).forEach((CategorySlugs) => {
			LimitedSkillSlugs = [
				...LimitedSkillSlugs,
				...CategorySlugs.slice(0, LimitPerCategory),
			]
		})
		return LimitedSkillSlugs
	}
	const HandleDisplaySkills = (): SkillsDatabase[] => {
		return FirstSkills(FirstSkillsPerCategory(SkillsToDisplay, 3), 15)
	}
	return (
		<>
			<HeadingThree Title='Technologies' />
			<div className='Technologies'>
				{HandleDisplaySkills().map((SkillSlug: SkillsDatabase, Index: number) => (
					<SkillTag key={Index} SkillKey={SkillSlug} />
				))}
				<div className='Technologies-Tags'>
					{/* Tag That Opens Skills Modal */}
					<Tooltip>
						<TooltipTrigger>
							<TechnologiesModal />
						</TooltipTrigger>
						<TooltipContent>
							<p>View More Technologies</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</>
	)
}