import { CompaniesDatabase, ExperienceCategories, ExperienceTypes } from '@/Enums/Experience'
import { RolesDatabase } from '@/Enums/Role'
import { SkillsDatabase } from '@/Enums/Skill'
import { Database } from '@/Interfaces/Layout'
import { Role } from '@/Interfaces/Role'

export const RolesMap: Database<Role> = {
	[RolesDatabase.OpenSourceContributor]: {
		Name: 'Community Member',
		Category: ExperienceCategories.Software,
		Type: ExperienceTypes.Volunteering,
		Company: CompaniesDatabase.OpenSource,
		StartDate: 'August 2024',
		EndDate: 'Present',
		Archived: false,
		Skills: [
			SkillsDatabase.Adaptability,
			SkillsDatabase.Communication,
			SkillsDatabase.CriticalThinking,
			SkillsDatabase.Git,
			SkillsDatabase.GitHub,
			SkillsDatabase.GitHubActions,
			SkillsDatabase.GitLab,
			SkillsDatabase.LinuxDevelopment,
			SkillsDatabase.MacDevelopment,
			SkillsDatabase.ProblemSolving,
			SkillsDatabase.QualityManagement,
			SkillsDatabase.RiskManagement,
			SkillsDatabase.ScopeManagement,
			SkillsDatabase.Teamwork,
			SkillsDatabase.TimeManagement,
			SkillsDatabase.UserCentricDesign,
			SkillsDatabase.WindowsDevelopment,
		],
	},
}

export const RolesDatabaseKeys: RolesDatabase[] = Object.keys(RolesMap) as RolesDatabase[]

export const RolesDatabaseMap: Database<Role> = RolesMap