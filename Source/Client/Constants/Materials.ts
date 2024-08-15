import { Database } from '@/Interfaces/Layout'
import { Material } from '@/Interfaces/Material'
import { BlogsDatabaseMap } from './Blogs'

export const MaterialsMap: Database<Material> = {
	...BlogsDatabaseMap,
    // ...CourseDatabaseMap,
    // ...CertificateDatabaseMap,
    // ...ModuleDatabaseMap,
    // ...ProjectDatabaseMap,
    // ...RoleDatabaseMap,
}

export const MaterialKey: string[] = Object.keys(MaterialsMap)

export const MaterialsDatabaseMap: Database<Material> = {
	...BlogsDatabaseMap,
	// ...CertificatesDatabaseMap,
	// ...CoursesDatabaseMap,
	// ...ModulesDatabaseMap,
	// ...ProjectsDatabaseMap,
	// ...RolesDatabaseMap,
}

export const MaterialsDatabaseKeys: string[] = Object.keys(MaterialsDatabaseMap)