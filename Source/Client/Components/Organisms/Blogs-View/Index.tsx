import { BlogsList } from '@/Components/Molecules/Blogs-List/Index'
import { FilterSection } from '@/Components/Molecules/Filter-Section/Index'
import { BlogsDatabaseMap } from '@/Constants/Blogs'
import { BLOG_PAGE } from '@/Constants/Pages'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { BlogsDatabase } from '@/Enums/Blog'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { UseFuseSearch } from '@/Hooks/Use-Fuse-Search'
import { Blog } from '@/Interfaces/Blog'
import { FilterCategory } from '@/Interfaces/Filter'
import { MaterialGroup } from '@/Interfaces/Material'
import { CheckForArchivedMaterials, FilterMaterialByArchivedStatus, FilterMaterialByCategory, FilterMaterialBySkill, FilterMaterialBySkillCategory, GenerateFilterOptionsByCategory, GenerateFilterOptionsBySkillCategories, GenerateFilterOptionsBySkillType, GroupMaterialsByCategory, StringToSlug } from '@/Utilities/Materials'
import { FC } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export const BlogsView: FC = () => {
	/* Hooks */
	const [SearchParams] = useSearchParams()
	const { pathname } = useLocation()
	const BasePath: string = pathname
	/* URL Params Strings */
	const BlogSectionParamName: string = 'Category'
	const SkillCategoryParamName: string = 'Skill'
	const TechnicalSkillParamName: string = 'Technical'
	const GeneralSkillParamName: string = 'General'
	const SoftSkillParamName: string = 'Soft'
	const SearchParamName: string = 'Search'
	const ArchivedParamName: string = 'Archived'
	/* URL Params Reader */
	const SelectedBlogSection: string = SearchParams.get(BlogSectionParamName) || 'All'
	const SelectedSkillCategory: string = SearchParams.get(SkillCategoryParamName) || 'All'
	const SelectedTechnicalSkill: string = SearchParams.get(TechnicalSkillParamName) || 'All'
	const SelectedGeneralSkill: string = SearchParams.get(GeneralSkillParamName) || 'All'
	const SelectedSoftSkill: string = SearchParams.get(SoftSkillParamName) || 'All'
	const SearchTerm: string = SearchParams.get(SearchParamName) || ''
	const ShowArchived: boolean = (SearchParams.get(ArchivedParamName) || 'false').toLowerCase() === 'true'
	/* Define Search Options */
	const SearchOptions: string[] = [
		'Name',
		'Category',
		'Issuer',
		'Skills.Name',
		'Skills.Category',
		'Skills.RelatedSkills.Name',
		'Skills.RelatedSkills.Category',
	]
	/* Use Custom Hook To Perform Search */
	let FilteredBlogsSlugArray: BlogsDatabase[] = UseFuseSearch(
		BlogsDatabaseMap,
		SearchTerm,
		SearchOptions,
	) as BlogsDatabase[]
	/* Filter By Blog Category */
	if (SelectedBlogSection !== 'All') {
		FilteredBlogsSlugArray = FilterMaterialByCategory<Blog>(
			StringToSlug(SelectedBlogSection),
			FilteredBlogsSlugArray,
			BlogsDatabaseMap,
		) as BlogsDatabase[]
	}
	/* Filter By Skill Category */
	if (SelectedSkillCategory !== 'All') {
		FilteredBlogsSlugArray = FilterMaterialBySkillCategory<Blog>(
			FilteredBlogsSlugArray,
			BlogsDatabaseMap,
			StringToSlug(SelectedSkillCategory),
			SkillsDatabaseMap,
		) as BlogsDatabase[]
	}
	/* Filter By Hard Skill */
	if (SelectedTechnicalSkill !== 'All') {
		FilteredBlogsSlugArray = FilterMaterialBySkill<Blog>(
			SelectedTechnicalSkill as SkillsDatabase,
			FilteredBlogsSlugArray,
			BlogsDatabaseMap,
		) as BlogsDatabase[]
	}
	/* Filter By General Skill */
	if (SelectedGeneralSkill !== 'All') {
		FilteredBlogsSlugArray = FilterMaterialBySkill<Blog>(
			SelectedGeneralSkill as SkillsDatabase,
			FilteredBlogsSlugArray,
			BlogsDatabaseMap,
		) as BlogsDatabase[]
	}
	/* Filter By Soft Skill */
	if (SelectedSoftSkill !== 'All') {
		FilteredBlogsSlugArray = FilterMaterialBySkill<Blog>(
			SelectedSoftSkill as SkillsDatabase,
			FilteredBlogsSlugArray,
			BlogsDatabaseMap,
		) as BlogsDatabase[]
	}
	/* Filter By Archived Status */
	FilteredBlogsSlugArray = FilterMaterialByArchivedStatus<Blog>(
		ShowArchived,
		FilteredBlogsSlugArray,
		BlogsDatabaseMap,
	) as BlogsDatabase[]
	const GroupedBlogs: MaterialGroup[] = GroupMaterialsByCategory(
		FilteredBlogsSlugArray,
		BlogsDatabaseMap,
	)
	const AreFiltersApplied: boolean =
		SelectedBlogSection !== 'All' ||
		SelectedSkillCategory !== 'All' ||
		SelectedTechnicalSkill !== 'All' ||
		SelectedGeneralSkill !== 'All' ||
		SelectedSoftSkill !== 'All' ||
		SearchTerm !== '' ||
		ShowArchived
	/* Filter Categories */
	const FilterCategories: FilterCategory[] = [
		{
			SectionName: 'Section',
			URLParam: BlogSectionParamName,
			SelectedValue: SelectedBlogSection,
			Options: GenerateFilterOptionsByCategory<Blog>(BlogsDatabaseMap),
		},
		{
			SectionName: 'Skill Category',
			URLParam: SkillCategoryParamName,
			SelectedValue: SelectedSkillCategory,
			Options: GenerateFilterOptionsBySkillCategories<Blog>(
				BlogsDatabaseMap,
				SkillsDatabaseMap,
			),
		},
		{
			SectionName: 'Technical Skill',
			URLParam: TechnicalSkillParamName,
			SelectedValue: SelectedTechnicalSkill,
			Options: GenerateFilterOptionsBySkillType<Blog>(
				BlogsDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technology,
			),
		},
		{
			SectionName: 'General Skill',
			URLParam: GeneralSkillParamName,
			SelectedValue: SelectedGeneralSkill,
			Options: GenerateFilterOptionsBySkillType<Blog>(
				BlogsDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technical,
			),
		},
		{
			SectionName: 'Soft Skill',
			URLParam: SoftSkillParamName,
			SelectedValue: SelectedSoftSkill,
			Options: GenerateFilterOptionsBySkillType<Blog>(
				BlogsDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Soft,
			),
		},
	]
	return (
		<>
			<FilterSection
				Name={BLOG_PAGE.Label}
				BasePath={BasePath}
				SearchFilter={{
					SearchTerm: SearchTerm,
					SearchParamName: SearchParamName,
				}}
				FilterCategories={FilterCategories}
				AreFiltersApplied={AreFiltersApplied}
				ArchiveFilter={{
					ParamName: ArchivedParamName,
					ShowArchived: ShowArchived,
					HasArchivedMaterials: CheckForArchivedMaterials(BlogsDatabaseMap),
				}}
			/>
			{/* Blogs List */}
			<BlogsList GroupedMaterials={GroupedBlogs} />
		</>
	)
}