import { CertificateCategories, CertificateIssuers, CertificatesDatabase } from '@/Enums/Certificate'
import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { Certificate } from '@/Interfaces/Certificate'
import { Database } from '@/Interfaces/Layout'
import { AddNestedSkillsMaterialsList } from '@/Utilities/Materials'
import { SkillsDatabaseMap } from './Skills'

const CertificatesMap: Database<Certificate> = {
	/* Web Development */
	[CertificatesDatabase.ColumbiaFullStackCodingBootCamp]: {
		Name: 'Columbia University Full-Stack Coding Boot Camp',
		Description: '',
		Category: CertificateCategories.WebDevelopment,
		Issuer: CertificateIssuers.ColumbiaEngineering,
		CertificateURL: 'https://columbia.credential.getsmarter.com/b33280a7-b6bd-4eaf-887f-648738e30872#gs.db43ts',
		Skills: [
			SkillsDatabase.APIs,
			SkillsDatabase.Bootstrap,
			SkillsDatabase.Apollo,
			SkillsDatabase.CSS,
			SkillsDatabase.ESLint,
			SkillsDatabase.ExpressJS,
			SkillsDatabase.Git,
			SkillsDatabase.GitHub,
			SkillsDatabase.GitLab,
			SkillsDatabase.GraphQL,
			SkillsDatabase.HandlebarsJS,
			SkillsDatabase.HTML,
			SkillsDatabase.Jest,
			SkillsDatabase.MongoDB,
			SkillsDatabase.Mongoose,
			SkillsDatabase.MySQL,
			SkillsDatabase.Node,
			SkillsDatabase.NPM,
			SkillsDatabase.Prettier,
			SkillsDatabase.PostgreSQL,
			SkillsDatabase.ProgressiveWebApps,
			SkillsDatabase.PSQL,
			SkillsDatabase.ReactJS,
			SkillsDatabase.REST,
			SkillsDatabase.Sequelize,
			SkillsDatabase.SQL,
			SkillsDatabase.Testing,
			SkillsDatabase.UnitTest,
			SkillsDatabase.VersionControlSystems,
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
	},
}

export const CertificatesDatabaseKeys: CertificatesDatabase[] = Object.keys(CertificatesMap) as CertificatesDatabase[]

export const CertificatesDatabaseMap: Database<Certificate> = AddNestedSkillsMaterialsList<Certificate>(
	CertificatesMap,
	SkillsDatabaseMap,
	[SkillCategories.ProgrammingLanguages],
	SkillTypes.Technical,

	SkillTypes.Technology,
)