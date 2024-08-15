import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'

export interface Skill {
	Name: string
	Category: SkillCategories
	SkillType: SkillTypes
	RelatedSkills?: SkillsDatabase[]
	IsMainSkill?: boolean
}

export interface SkillsCategory {
	SkillCategoryName: string
	Skills: SkillsDatabase[]
}

export interface GroupedSkillsCategory {
	Title: string
	SkillCategories: SkillsCategory[]
}