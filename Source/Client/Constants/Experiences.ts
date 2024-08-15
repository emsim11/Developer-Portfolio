import { CompaniesDatabase } from '@/Enums/Experience'
import { RolesDatabase } from '@/Enums/Role'
import { Company } from '@/Interfaces/Experience'
import { Database } from '@/Interfaces/Layout'
import { AddCompanyThumbnail } from '@/Utilities/Materials'

export const CompaniesMap: Database<Company> = {
	[CompaniesDatabase.OpenSource]: {
		Name: 'Open Source',
		Location: 'Remote',
		Positions: [RolesDatabase.OpenSourceContributor],
		Logo: AddCompanyThumbnail(CompaniesDatabase.OpenSource),
	},
}

export const CompaniesDatabaseKeys = Object.keys(CompaniesMap) as CompaniesDatabase[]

export const CompaniesDatabaseMap: Database<Company> = CompaniesMap