import { SkillsDatabase } from '@/Enums/Skill'

export interface Material {
	Name: string
	Category: string
	Archived?: boolean
	RelatedMaterials?: string[]
	Skills: SkillsDatabase[]
}

export interface MaterialGroup {
	GroupName: string
	MaterialKeys: string[]
}

export interface MaterialsListProps {
	GroupedMaterials: MaterialGroup[]
}