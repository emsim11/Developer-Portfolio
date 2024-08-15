import { FC } from 'react'

import './Index.scss'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { GroupedSkillsCategory, Skill } from '@/Interfaces/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { CategorizeAndGroupSkills, FilterSkillsByType } from '@/Utilities/Skills'
import { HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { SkillsTableSection } from '@/Components/Molecules/Skills-Table-Section/Index'

interface RelatedSkillsSectionProps {
	SkillKey: SkillsDatabase
}

export const RelatedSkillsSection: FC<RelatedSkillsSectionProps> = ({ SkillKey }) => {
	const Skill: Skill = SkillsDatabaseMap[SkillKey]
	const AssociatedSkills: SkillsDatabase[] = Skill.RelatedSkills || []
	if (!AssociatedSkills || AssociatedSkills.length === 0) {
    	return null
  	}
	/* Define Skill Types & Corresponding Group Titles */
  	const SkillTypeGroups = [
		{ Type: SkillTypes.Technology, Title: 'Technologies' },
		{ Type: SkillTypes.Technical, Title: 'Technical Skills' },
		{ Type: SkillTypes.Soft, Title: 'Soft Skills' },
	]
	/* Use Map To Iterate Over Each Group, Filter & Then Group Skills Accordingly */
	const AllGroupedSkills: GroupedSkillsCategory[] =
		SkillTypeGroups.map(({ Type, Title }) => {
			const FilteredSkills: SkillsDatabase[] = FilterSkillsByType(
				AssociatedSkills,
				SkillsDatabaseMap,
				Type,
		)
		return CategorizeAndGroupSkills(
			FilteredSkills,
			SkillsDatabaseMap,
			Type,
			Title,
		)
    })
	return (
		<>
			<div className='Related-Skills-Section'>
				<div className='Related-Skills-Section-Container'>
					<HeadingTwo Title='Related Skills' />
					<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
				</div>
			</div>
		</>
	)
}