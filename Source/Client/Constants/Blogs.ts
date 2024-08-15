import { BlogCategories, BlogsDatabase } from '@/Enums/Blog'
import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { Blog } from '@/Interfaces/Blog'
import { Database } from '@/Interfaces/Layout'
import { AddNestedSkillsMaterialsList } from '@/Utilities/Materials'
import { SkillsDatabaseMap } from './Skills'

export const BlogsMap: Database<Blog> = {
	[BlogsDatabase.BackEnd]: {
		Name: 'Exploring Back-Ends: Custom Vs. Managed Solutions',
		Subtitle: 'An In-Depth Analysis Of Back-End Development Approaches, Tools, And Security Considerations',
		Category: BlogCategories.WebDevelopment,
		Skills: [
			SkillsDatabase.CloudComputing,
			SkillsDatabase.Firebase,
			SkillsDatabase.PocketBase,
			SkillsDatabase.Supabase,
			SkillsDatabase.WebDevelopment,
		],
	},
}

export const BlogsDatabaseKeys: BlogsDatabase[] = Object.keys(BlogsMap) as BlogsDatabase[]

export const BlogsDatabaseMap: Database<Blog> = AddNestedSkillsMaterialsList<Blog>(
	BlogsMap,
	SkillsDatabaseMap,
	[SkillCategories.ProgrammingLanguages],
	SkillTypes.Technical,
	SkillTypes.Technology,
)