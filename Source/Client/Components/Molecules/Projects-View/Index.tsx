import { ProjectsDatabaseMap } from '@/Constants/Projects'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { ProjectsDatabase } from '@/Enums/Project'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { UseFuseSearch } from '@/Hooks/Use-Fuse-Search'
import { FilterCategory } from '@/Interfaces/Filter'
import { MaterialGroup } from '@/Interfaces/Material'
import { Project } from '@/Interfaces/Project'
import { CheckForArchivedMaterials, FilterMaterialByArchivedStatus, FilterMaterialByCategory, FilterMaterialBySkill, FilterMaterialBySkillCategory, GenerateFilterOptionsByCategory, GenerateFilterOptionsBySkillCategories, GenerateFilterOptionsBySkillType, GenerateFilterOptionsForProgrammingLanguages, GroupMaterialsByCategory, StringToSlug } from '@/Utilities/Materials'
import { FC } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ProjectsList } from '../Projects-List/Index'
import { FilterSection } from '../Filter-Section/Index'
import { PROJECT_PAGE } from '@/Constants/Pages'

export const ProjectsView: FC = () => {
	const [SearchParams] = useSearchParams()
	const { pathname } = useLocation()
	const BasePath: string = pathname
	const ArchivedParamName = 'Archived'
	const GeneralSkillParamName = 'General'
	const LanguageParamName = 'Language'
	const SearchParamName = 'Search'
	const SectionParamName = 'Type'
	const SkillCategoryParamName = 'Category'
	const SoftSkillParamName = 'Soft'
	const TechnologyParamName = 'Technology'
	const SelectedGeneralSkill: string = SearchParams.get(GeneralSkillParamName) || 'All'
	const SelectedLanguage: string = SearchParams.get(LanguageParamName) || 'All'
	const SelectedSection: string = SearchParams.get(SearchParamName) || 'All'
	const SelectedSkillCategory: string = SearchParams.get(SkillCategoryParamName) || 'All'
	const SelectedSoftSkill: string = SearchParams.get(SoftSkillParamName) || 'All'
	const SelectedTechnology: string = SearchParams.get(TechnologyParamName) || 'All'
	const SearchTerm: string = SearchParams.get(SearchParamName) || ''
	const ShowArchived: boolean = (SearchParams.get(ArchivedParamName) || 'false') === 'true'
	const SearchOptions: string[] = [
		'Name',
		'Category',
		'Skills.Name',
		'Skills.Category',
		'Skills.RelatedSkills.Name',
		'Skills.RelatedSkills.Category',
	]
	let FilteredProjectsSlugArray: ProjectsDatabase[] = UseFuseSearch(
		ProjectsDatabaseMap,
		SearchTerm,
		SearchOptions,
	) as ProjectsDatabase[]

	/* Filter By Project Type Category */
	if (StringToSlug(SelectedSection) !== 'All') {
		FilteredProjectsSlugArray = FilterMaterialByCategory<Project>(
			StringToSlug(SelectedSection),
			FilteredProjectsSlugArray,
			ProjectsDatabaseMap,
		) as ProjectsDatabase[]
	}
	/* Filter By Programming Language */
	if (SelectedLanguage !== 'All') {
		FilteredProjectsSlugArray = FilterMaterialBySkill(
			SelectedLanguage as SkillsDatabase,
			FilteredProjectsSlugArray,
			ProjectsDatabaseMap,
		) as ProjectsDatabase[]
	}
	/* Filter By Technology */
	if (SelectedLanguage !== 'All') {
		FilteredProjectsSlugArray = FilterMaterialBySkill<Project>(
			SelectedTechnology as SkillsDatabase,
			FilteredProjectsSlugArray,
			ProjectsDatabaseMap,
		) as ProjectsDatabase[]
	}
	/* Filter By Skill Category */
	if (StringToSlug(SelectedSkillCategory) !== 'All') {
		FilteredProjectsSlugArray = FilterMaterialBySkillCategory<Project>(
			FilteredProjectsSlugArray,
			ProjectsDatabaseMap,
			StringToSlug(SelectedSkillCategory),
			SkillsDatabaseMap,
		) as ProjectsDatabase[]
	}
	/* Filter By General Skill */
	if (SelectedGeneralSkill !== 'All') {
		FilteredProjectsSlugArray = FilterMaterialBySkill<Project>(
			SelectedGeneralSkill as SkillsDatabase,
			FilteredProjectsSlugArray,
			ProjectsDatabaseMap,
		) as ProjectsDatabase[]
	}
	/* Filter By Soft Skill */
	if (SelectedSoftSkill !== 'All') {
		FilteredProjectsSlugArray = FilterMaterialBySkill<Project>(
			SelectedSoftSkill as SkillsDatabase,
			FilteredProjectsSlugArray,
			ProjectsDatabaseMap,
		) as ProjectsDatabase[]
	}
	/* Filter By Archived Status */
	FilteredProjectsSlugArray = FilterMaterialByArchivedStatus<Project>(
		ShowArchived,
		FilteredProjectsSlugArray,
		ProjectsDatabaseMap
	) as ProjectsDatabase[]
	/* Projects Categorized By Type */
	const GroupedProjects: MaterialGroup[] = GroupMaterialsByCategory(
		FilteredProjectsSlugArray,
		ProjectsDatabaseMap,
	)
	/* Check If Any Filters Are Applied */
	const AreFiltersApplied: boolean =
		SelectedGeneralSkill !== 'All' ||
		SelectedLanguage !== 'All' ||
		SearchTerm !== '' ||
		SelectedSection !== 'All' ||
		SelectedSkillCategory !== 'All' ||
		SelectedSoftSkill !== 'All' ||
		SelectedTechnology !== 'All' ||
		ShowArchived
	const FilterCategories: FilterCategory[] = [
		{
			SectionName: 'Category',
			URLParam: SkillCategoryParamName,
			SelectedValue: SelectedSkillCategory,
			Options: GenerateFilterOptionsBySkillCategories<Project>(
				ProjectsDatabaseMap,
				SkillsDatabaseMap,
			),
		},
		{
			SectionName: 'General Skill',
			URLParam: GeneralSkillParamName,
			SelectedValue: SelectedGeneralSkill,
			Options: GenerateFilterOptionsBySkillType<Project>(
				ProjectsDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technical,
			),
		},
		{
			SectionName: 'Programming Language',
			URLParam: LanguageParamName,
			SelectedValue: SelectedLanguage,
			Options: GenerateFilterOptionsForProgrammingLanguages<Project>(
				ProjectsDatabaseMap,
				SkillsDatabaseMap,
			),
		},
		{
			SectionName: 'Section',
			URLParam: SectionParamName,
			SelectedValue: SelectedSection,
			Options: GenerateFilterOptionsByCategory<Project>(ProjectsDatabaseMap),
		},
		{
			SectionName: 'Soft Skill',
			URLParam: SoftSkillParamName,
			SelectedValue: SelectedSoftSkill,
			Options: GenerateFilterOptionsBySkillType<Project>(
				ProjectsDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Soft,
			),
		},
		{
			SectionName: 'Technology',
			URLParam: TechnologyParamName,
			SelectedValue: SelectedTechnology,
			Options: GenerateFilterOptionsBySkillType<Project>(
				ProjectsDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technology,
			),
		},
	]
	return (
		<>
			<FilterSection
				Name={PROJECT_PAGE.Label}
				BasePath={BasePath}
				SearchFilter={{
					SearchTerm: SearchTerm,
					SearchParamName: SearchParamName,
				}}
				FilterCategories={FilterCategories}
				ArchiveFilter={{
					ParamName: ArchivedParamName,
					ShowArchived: ShowArchived,
					HasArchivedMaterials: CheckForArchivedMaterials(ProjectsDatabaseMap),
				}}
				AreFiltersApplied={AreFiltersApplied}
			/>
			{/* Projects List */}
			<ProjectsList GroupedMaterials={GroupedProjects} />
		</>
	)
}