import { FC, useState } from 'react'

import './Index.scss'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { StringToSlug } from '@/Utilities/Materials'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/Atoms/Tabs/Index'
import { FilterNonEmptySkillCategories } from '@/Utilities/Skills'
import { SkillCategoryDisplay } from '../Skill-Category-Display/Index'


interface SkillsTableSectionProps {
	AllGroupedSkills: GroupedSkillsCategory[]
	MaxSkillsPerCategory?: number
}

export const SkillsTableSection: FC<SkillsTableSectionProps> = ({ AllGroupedSkills, MaxSkillsPerCategory = 5 }) => {
	const [SelectedTab, SetSelectedTab] = useState(() => {
		const NonEmptyGroup = Array.isArray(AllGroupedSkills) && AllGroupedSkills.find((Group) => {
			Group.SkillCategories.length > 0
		})
		return NonEmptyGroup ? StringToSlug(NonEmptyGroup.Title) : ''
	})
	const IsMounted: boolean = UseIsMounted()
	if (!IsMounted || !SelectedTab) {
		return null
	}
	const NonEmptySkillCategories: GroupedSkillsCategory[] = FilterNonEmptySkillCategories(AllGroupedSkills)
	return (
		<Tabs
			defaultValue={SelectedTab}
			value={SelectedTab}
			onValueChange={SetSelectedTab}
			className='Skills-Table-Tabs'
		>
			{/* Tab Options */}
			<TabsList className='Skills-Table-Tabs-List'>
				{NonEmptySkillCategories.map(({ Title }) => (
					<TabsTrigger
						key={StringToSlug(Title)}
						value={StringToSlug(Title)}
						className='Skills-Table-Tabs-Trigger'
					>
						{Title}
					</TabsTrigger>
				))}
			</TabsList>
			{/* Tab Content */}
			{NonEmptySkillCategories.map(({ Title, SkillCategories }) => (
				<TabsContent key={StringToSlug(Title)} value={StringToSlug(Title)}>
					<div className='Skills-Table-Tabs-Content'>
						<SkillCategoryDisplay SkillCategories={SkillCategories} />
					</div>
				</TabsContent>
			))}
		</Tabs>
	)
}