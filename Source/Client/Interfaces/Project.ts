import { ProjectCategories } from '@/Enums/Project'
import { Material } from './Material'

export interface Project extends Material {
	Description: string
    Category: ProjectCategories
    RepositoryURL?: string
    DeploymentURL?: string
    ThumbnailImage?: string
}