import { CoursesDatabase } from '@/Enums/Course'
import { ModulesDatabase, ModuleYearGroups } from '@/Enums/Module'
import { ProjectsDatabase } from '@/Enums/Project'
import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { Database } from '@/Interfaces/Layout'
import { Module } from '@/Interfaces/Module'
import { AddNestedSkillsMaterialsList } from '@/Utilities/Materials'
import { SkillsDatabaseMap } from './Skills'

export const ModulesMap: Database<Module> = {
	/* Columbia University */
	/* YEAR 1 */
	[ModulesDatabase.CU_FullStackCoding]: {
		Name: 'Object Oriented Programming 1',
		Category: ModuleYearGroups.Year1,
		Skills: [
			SkillsDatabase.DataStructures,
			SkillsDatabase.Java,
			SkillsDatabase.ObjectOrientedProgramming,
		],
		RelatedMaterials: [
			ProjectsDatabase.CodeQuiz,
		],
		LearningOutcomes: [
			'Build front-end websites from scratch, as well as using ready-made frameworks that enable efficient building.',
			'Create full-stack single-page web applications using RESTful API routes and AJAX methods.',
			'Describe how front-end applications communicate with back-end applications and databases.',
			'Implement structured and unstructured databases to convert static websites into dynamic websites that persist data.',
			'Build communication skills and demonstrate the foundational computer-science knowledge that is required during technical interviews.',
			'Apply the accepted and standard basics of social coding - including source control, issue tracking, and functional feedback = as part fo a development community, while building an application.',
			'Demonstrate strong teamwork and project management skills as a collaborator and independent contributor during the development cycle of complex projects.',
		],
		ParentCourse: CoursesDatabase.CU_Computer_Science,
	},
}

export const ModulesDatabaseKeys: ModulesDatabase[] = Object.keys(ModulesMap) as ModulesDatabase[]

export const ModulesDatabaseMap: Database<Module> = AddNestedSkillsMaterialsList<Module>(
	ModulesMap,
	SkillsDatabaseMap,
	[SkillCategories.ProgrammingLanguages],
	SkillTypes.Technical,
	SkillTypes.Technology,
)