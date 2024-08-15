import { BlogsDatabase } from '@/Enums/Blog'
import { ModulesDatabase } from '@/Enums/Module'
import { ProjectCategories, ProjectsDatabase } from '@/Enums/Project'
import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { Database } from '@/Interfaces/Layout'
import { Project } from '@/Interfaces/Project'
import { AddNestedSkillsMaterialsList, AddProjectThumbnail } from '@/Utilities/Materials'
import { SkillsDatabaseMap } from './Skills'

export const ProjectsMap: Database<Project> = {
	[ProjectsDatabase.CodeQuiz]: {
		Name: 'Code Quiz',
		DeploymentURL: 'https://full-stack-boot-camp.github.io/Code-Quiz/',
		RepositoryURL: 'https://github.com/Full-Stack-Boot-Camp/Code-Quiz',
		Description: `For practicing with JavaScript, a Coding Quiz was developed,
		which enables users to test their knowledge about JavaScript fundamentals,
		compete with friends, and save their high scores.
		`,
		Category: ProjectCategories.FullStackWebDevelopment,
		Skills: [
			SkillsDatabase.APIs,
			SkillsDatabase.Creativity,
			SkillsDatabase.CriticalThinking,
			SkillsDatabase.CSS,
			SkillsDatabase.DesignPatterns,
			SkillsDatabase.Git,
			SkillsDatabase.GitHub,
			SkillsDatabase.GitHubPages,
			SkillsDatabase.HTML,
			SkillsDatabase.JavaScript,
			SkillsDatabase.ProblemSolving,
			SkillsDatabase.WebDevelopment,
		],
		RelatedMaterials: [
			BlogsDatabase.FrontEnd,
			ModulesDatabase.CU_FullStackCoding,
		],
		ThumbnailImage: AddProjectThumbnail(ProjectsDatabase.CodeQuiz),
	},
}

export const ProjectsDatabaseKeys: ProjectsDatabase[] = Object.keys(ProjectsMap) as ProjectsDatabase[]

export const ProjectsDatabaseMap: Database<Project> = AddNestedSkillsMaterialsList<Project>(
	ProjectsMap,
	SkillsDatabaseMap,
	[SkillCategories.ProgrammingLanguages],
	SkillTypes.Technical,
	SkillTypes.Technology,
)