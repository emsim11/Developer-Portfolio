import { ModuleYearGroups } from '@/Enums/Module'
import { Material } from './Material'
import { CoursesDatabase } from '@/Enums/Course'

export interface Module extends Material {
	LearningOutcomes: string[]
	Score?: number
	Category: ModuleYearGroups
	ParentCourse: CoursesDatabase
}