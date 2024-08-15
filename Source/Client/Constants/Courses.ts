import { CoursesDatabase } from '@/Enums/Course'
import { ModulesDatabase } from '@/Enums/Module'
import { ProjectsDatabase } from '@/Enums/Project'
import { Course } from '@/Interfaces/Course'
import { Database } from '@/Interfaces/Layout'
import { AggregateRelatedMaterialsForCourses, AggregateSkillsForCourses } from '@/Utilities/Materials'
import { ModulesDatabaseMap } from './Modules'

export const CoursesMap: Database<Course> = {
	[CoursesDatabase.CU_Computer_Science]: {
		Name: 'Computer Science',
		University: 'Columbia Engineering, Columbia University',
		Grade: 'First Class Honours',
		Category: 'Bachelor Of Science',
		Skills: [], /* Dynamically Added From Modules */
		StartYear: 2024,
		EndYear: 2024,
		Modules: [
			ModulesDatabase.CU_FullStackCoding,
		],
		RelatedMaterials: [
			ProjectsDatabase.CodeQuiz,
		],
	},
}

export const CoursesDatabaseKeys: CoursesDatabase[] = Object.keys(CoursesMap) as CoursesDatabase[]

let CoursesDatabaseMap: Database<Course> = AggregateSkillsForCourses(
	CoursesMap,
	ModulesDatabaseMap,
)

CoursesDatabaseMap = AggregateRelatedMaterialsForCourses(
	CoursesDatabaseMap,
	ModulesDatabaseMap,
)

export { CoursesDatabaseMap }