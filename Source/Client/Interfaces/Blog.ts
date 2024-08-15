import { BlogCategories } from '@/Enums/Blog'
import { Material } from './Material'

export interface Blog extends Material {
	Subtitle: string
	Category: BlogCategories
}