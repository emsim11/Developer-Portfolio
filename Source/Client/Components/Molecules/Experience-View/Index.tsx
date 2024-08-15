import { RolesDatabaseMap } from '@/Constants/Roles'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { ExperienceTypes } from '@/Enums/Experience'
import { RolesDatabase } from '@/Enums/Role'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { UseFuseSearch } from '@/Hooks/Use-Fuse-Search'
import { FilterCategory } from '@/Interfaces/Filter'
import { MaterialGroup } from '@/Interfaces/Material'
import { Role } from '@/Interfaces/Role'
import { CheckForArchivedMaterials, FilterMaterialByArchivedStatus, FilterMaterialByCategory, FilterMaterialBySkill, FilterMaterialBySkillCategory, FilterRolesByType, GenerateFilterOptionsByCategory, GenerateFilterOptionsByRoleType, GenerateFilterOptionsBySkillCategories, GenerateFilterOptionsBySkillType, GroupMaterialsByCategory, StringToSlug } from '@/Utilities/Materials'
import { FC } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { FilterSection } from '../Filter-Section/Index'
import { WorkList } from '../Work-List/Index'

export const ExperienceView: FC = () => {
	/* Hooks */
	const [SearchParams] = useSearchParams()
	const { pathname } = useLocation()
	const BasePath: string = pathname
	/* URL Params Strings */
	const CategoryParamName = 'Category'
	const WorkTypeParamName = 'Type'
	const SkillCategoryParamName = 'Skill'
	const TechnicalSkillParamName = 'Technical'
	const GeneralSkillParamName = 'General'
	const SoftSkillParamName = 'Soft'
	const SearchParamName = 'Search'
	const ArchivedParamName = 'Archived'
	/* URL Params Reader */
	const SelectedWorkSection: string = SearchParams.get(CategoryParamName) || 'All'
	const SelectedWorkType: string = SearchParams.get(WorkTypeParamName) || 'All'
	const SelectedSkillCategory: string = SearchParams.get(SkillCategoryParamName) || 'All'
	const SelectedTechnicalSkill: string = SearchParams.get(TechnicalSkillParamName) || 'All'
	const SelectedGeneralSkill: string = SearchParams.get(GeneralSkillParamName) || 'All'
	const SelectedSoftSkill: string = SearchParams.get(SoftSkillParamName) || 'All'
	const SearchTerm: string = SearchParams.get(SearchParamName) || ''
	const ShowArchived: boolean = (SearchParams.get(ArchivedParamName) || 'false').toLowerCase() === 'true'
	/* Define Search Options */
	const SearchOptions: string[] = [
		'Name',
		'Company',
		'Type',
		'Category',
		'Skills.Name',
		'Skills.Category',
		'Skills.RelatedSkills.Name',
		'Skills.RelatedSkills.Category',
	]
	/* Use Custom Hook To Perform Search */
	let FilteredWorkKeysArray: RolesDatabase[] = UseFuseSearch(
		RolesDatabaseMap,
		SearchTerm,
		SearchOptions,
	) as RolesDatabase[]
	/* Filter Logic */
	if (SelectedWorkSection !== 'All') {
		FilteredWorkKeysArray = FilterMaterialByCategory<Role>(
			StringToSlug(SelectedWorkSection),
			FilteredWorkKeysArray,
			RolesDatabaseMap,
		) as RolesDatabase[]
	}
	if (SelectedWorkType !== 'All') {
		FilteredWorkKeysArray = FilterRolesByType<Role>(
			StringToSlug(SelectedWorkType) as ExperienceTypes,
			FilteredWorkKeysArray,
			RolesDatabaseMap,
		) as RolesDatabase[]
	}
	if (SelectedSkillCategory !== 'All') {
		FilteredWorkKeysArray = FilterMaterialBySkillCategory<Role>(
			FilteredWorkKeysArray,
			RolesDatabaseMap,
			StringToSlug(SelectedSkillCategory),
			SkillsDatabaseMap,
		) as RolesDatabase[]
	}
	if (SelectedTechnicalSkill !== 'All') {
		FilteredWorkKeysArray = FilterMaterialBySkill<Role>(
			SelectedTechnicalSkill as SkillsDatabase,
			FilteredWorkKeysArray,
			RolesDatabaseMap,
		) as RolesDatabase[]
	}
	if (SelectedGeneralSkill !== 'All') {
		FilteredWorkKeysArray = FilterMaterialBySkill<Role>(
			SelectedGeneralSkill as SkillsDatabase,
			FilteredWorkKeysArray,
			RolesDatabaseMap,
		) as RolesDatabase[]
	}
	if (SelectedSoftSkill !== 'All') {
		FilteredWorkKeysArray = FilterMaterialBySkill<Role>(
			SelectedSoftSkill as SkillsDatabase,
			FilteredWorkKeysArray,
			RolesDatabaseMap,
		) as RolesDatabase[]
	}
	FilteredWorkKeysArray = FilterMaterialByArchivedStatus<Role>(
		ShowArchived,
		FilteredWorkKeysArray,
		RolesDatabaseMap,
	) as RolesDatabase[]
	const GroupedRoles: MaterialGroup[] = GroupMaterialsByCategory(
		FilteredWorkKeysArray,
		RolesDatabaseMap,
	)
	const AreFiltersApplied: boolean =
		SelectedWorkSection !== 'All' ||
		SelectedWorkType !== 'All' ||
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
			URLParam: CategoryParamName,
			SelectedValue: SelectedWorkSection,
			Options: GenerateFilterOptionsByCategory<Role>(RolesDatabaseMap),
		},
		{
			SectionName: 'Employment Type',
			URLParam: WorkTypeParamName,
			SelectedValue: SelectedWorkType,
			Options: GenerateFilterOptionsByRoleType<Role>(RolesDatabaseMap),
		},
		{
			SectionName: 'Skill Category',
			URLParam: SkillCategoryParamName,
			SelectedValue: SelectedSkillCategory,
			Options: GenerateFilterOptionsBySkillCategories<Role>(
				RolesDatabaseMap,
				SkillsDatabaseMap,
			),
		},
		{
			SectionName: 'Technical Skill',
			URLParam: TechnicalSkillParamName,
			SelectedValue: SelectedTechnicalSkill,
			Options: GenerateFilterOptionsBySkillType<Role>(
				RolesDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technology,
			),
		},
		{
			SectionName: 'General Skill',
			URLParam: GeneralSkillParamName,
			SelectedValue: SelectedGeneralSkill,
			Options: GenerateFilterOptionsBySkillType<Role>(
				RolesDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technical,
			),
		},
		{
			SectionName: 'Soft Skill',
			URLParam: SoftSkillParamName,
			SelectedValue: SelectedSoftSkill,
			Options: GenerateFilterOptionsBySkillType<Role>(
				RolesDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Soft,
			),
		},
	]
	return (
		<>
			<FilterSection
				Name='Roles'
				BasePath={BasePath}
				SearchFilter={{
					SearchTerm: SearchTerm,
					SearchParamName: SearchParamName,
				}}
				ArchiveFilter={{
					ParamName: ArchivedParamName,
					ShowArchived: ShowArchived,
					HasArchivedMaterials: CheckForArchivedMaterials(RolesDatabaseMap),
				}}
				FilterCategories={FilterCategories}
				AreFiltersApplied={AreFiltersApplied}
			/>
			{/* Work List */}
			<WorkList GroupedMaterials={GroupedRoles} />
		</>
	)
}