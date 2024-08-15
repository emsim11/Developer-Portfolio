import { ModulesDatabase } from '@/Enums/Module';
import { Material } from './Material'

export interface Course extends Material {
	Grade: string
	Score?: number
	Modules: ModulesDatabase[]
	Certificate?: string
	StartYear: number
	EndYear: number
	University: string
}