import { CompaniesDatabase, ExperienceCategories, ExperienceTypes } from '@/Enums/Experience'
import { Material } from './Material'

export interface Role extends Material {
	Category: ExperienceCategories
	Type: ExperienceTypes
	StartDate: string;
	EndDate: string | 'Present'
	Company: CompaniesDatabase
}