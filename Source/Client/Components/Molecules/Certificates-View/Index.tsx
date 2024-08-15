import { FC } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import { CertificatesDatabaseMap } from '@/Constants/Certificates'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { CertificatesDatabase } from '@/Enums/Certificate'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { UseFuseSearch } from '@/Hooks/Use-Fuse-Search'
import { Certificate } from '@/Interfaces/Certificate'
import { FilterCategory } from '@/Interfaces/Filter'
import { MaterialGroup } from '@/Interfaces/Material'
import { CheckForArchivedMaterials, FilterCertificatesByIssuer, FilterMaterialByArchivedStatus, FilterMaterialByCategory, FilterMaterialBySkill, FilterMaterialBySkillCategory, GenerateFilterOptionsByCategory, GenerateFilterOptionsBySkillCategories, GenerateFilterOptionsBySkillType, GenerateIssuerFilterOptions, GroupMaterialsByCategory, StringToSlug } from '@/Utilities/Materials'
import { CertificatesList } from '../Certificates-List/Index'
import { FilterSection } from '../Filter-Section/Index'
import { CERTIFICATE_PAGE } from '@/Constants/Pages'


export const CertificatesView: FC = () => {
	/* Hooks */
	const [SearchParams] = useSearchParams()
	const { pathname } = useLocation()
	const BasePath = pathname
	/* URL Params Strings */
	const IssuerParamName = 'Issuer'
	const CertificateSectionParamName = 'Section'
	const SkillCategoryParamName = 'Category'
	const ArchivedParamName = 'Archived'
	const SearchParamName = 'Search'
	const GeneralSkillParamName = 'General'
	const SoftSkillParamName = 'Soft'
	const TechnicalSkillParamName = 'Technical'
	/* URL Params Reader */
	const SelectedIssuer: string = decodeURIComponent(SearchParams.get(IssuerParamName) || 'All')
	const SelectedCategory: string = decodeURIComponent(SearchParams.get(CertificateSectionParamName) || 'All')
	const SelectedSkillCategory: string = decodeURIComponent(SearchParams.get(SkillCategoryParamName) || 'All')
	const SearchTerm: string = decodeURIComponent(SearchParams.get(SearchParamName) || '')
	const SelectedGeneralSkill: string = decodeURIComponent(SearchParams.get(GeneralSkillParamName) || 'All')
	const SelectedSoftSkill: string = decodeURIComponent(SearchParams.get(SoftSkillParamName) || 'All')
	const SelectedTechnicalSkill: string = decodeURIComponent(SearchParams.get(TechnicalSkillParamName) || 'All')
	const ShowArchived: boolean = decodeURIComponent(SearchParams.get(ArchivedParamName) || 'false') === 'true'
	/* Define Search Options */
	const SearchOptions: string[] = [
		'Name',
		'Category',
		'Issue',
		'Skills.Name',
		'Skills.Category',
		'Skills.RelatedSkills.Name',
		'Skills.RelatedSkills.Category',
	]
	/* Filter Logic */
	let FilteredCertificatesSlugArray: CertificatesDatabase[] = UseFuseSearch(
		CertificatesDatabaseMap,
		SearchTerm,
		SearchOptions,
	) as CertificatesDatabase[]
	if (SelectedIssuer !== 'All') {
		FilteredCertificatesSlugArray = FilterCertificatesByIssuer(
			SelectedIssuer,
			FilteredCertificatesSlugArray,
			CertificatesDatabaseMap,
		) as CertificatesDatabase[]
	}
	if (SelectedCategory !== 'All') {
		FilteredCertificatesSlugArray = FilterMaterialByCategory<Certificate>(
			StringToSlug(SelectedCategory),
			FilteredCertificatesSlugArray,
			CertificatesDatabaseMap,
		) as CertificatesDatabase[]
	}
	if (SelectedSkillCategory !== 'All') {
		FilteredCertificatesSlugArray = FilterMaterialBySkillCategory<Certificate>(
			FilteredCertificatesSlugArray,
			CertificatesDatabaseMap,
			StringToSlug(SelectedSkillCategory),
			SkillsDatabaseMap,
		) as CertificatesDatabase[]
	}
	if (SelectedGeneralSkill !== 'All') {
		FilteredCertificatesSlugArray = FilterMaterialBySkill<Certificate>(
			SelectedGeneralSkill as SkillsDatabase,
			FilteredCertificatesSlugArray,
			CertificatesDatabaseMap,
		) as CertificatesDatabase[]
	}
	if (SelectedSoftSkill !== 'All') {
		FilteredCertificatesSlugArray = FilterMaterialBySkill<Certificate>(
			SelectedSoftSkill as SkillsDatabase,
			FilteredCertificatesSlugArray,
			CertificatesDatabaseMap,
		) as CertificatesDatabase[]
	}
	if (SelectedTechnicalSkill !== 'All') {
		FilteredCertificatesSlugArray = FilterMaterialBySkill<Certificate>(
			SelectedTechnicalSkill as SkillsDatabase,
			FilteredCertificatesSlugArray,
			CertificatesDatabaseMap,
		) as CertificatesDatabase[]
	}
	FilteredCertificatesSlugArray = FilterMaterialByArchivedStatus<Certificate>(
		ShowArchived,
		FilteredCertificatesSlugArray,
		CertificatesDatabaseMap,
	) as CertificatesDatabase[]
	const GroupedCertificates: MaterialGroup[] = GroupMaterialsByCategory(
		FilteredCertificatesSlugArray,
		CertificatesDatabaseMap,
	)
	const AreFiltersApplied: boolean =
		SelectedIssuer !== 'All' ||
		SelectedCategory !== 'All' ||
		SelectedSkillCategory !== 'All' ||
		SelectedGeneralSkill !== 'All' ||
		SelectedSoftSkill !== 'All' ||
		SelectedTechnicalSkill !== 'All' ||
		SearchTerm !== '' ||
		ShowArchived
	const FilterCategories: FilterCategory[] = [
		{
			SectionName: 'Issuer',
			URLParam: IssuerParamName,
			SelectedValue: SelectedIssuer,
			Options: GenerateIssuerFilterOptions(CertificatesDatabaseMap),
		},
		{
			SectionName: 'Category',
			URLParam: CertificateSectionParamName,
			SelectedValue: SelectedCategory,
			Options: GenerateFilterOptionsByCategory<Certificate>(CertificatesDatabaseMap),
		},
		{
			SectionName: 'Skill Category',
			URLParam: SkillCategoryParamName,
			SelectedValue: SelectedSkillCategory,
			Options: GenerateFilterOptionsBySkillCategories<Certificate>(
				CertificatesDatabaseMap,
				SkillsDatabaseMap,
			),
		},
		{
			SectionName: 'General Skill',
			URLParam: GeneralSkillParamName,
			SelectedValue: SelectedGeneralSkill,
			Options: GenerateFilterOptionsBySkillType<Certificate>(
				CertificatesDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technical,
			),
		},
		{
			SectionName: 'Soft Skill',
			URLParam: SoftSkillParamName,
			SelectedValue: SelectedSoftSkill,
			Options: GenerateFilterOptionsBySkillType<Certificate>(
				CertificatesDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Soft,
			),
		},
		{
			SectionName: 'Technical Skill',
			URLParam: TechnicalSkillParamName,
			SelectedValue: SelectedTechnicalSkill,
			Options: GenerateFilterOptionsBySkillType<Certificate>(
				CertificatesDatabaseMap,
				SkillsDatabaseMap,
				SkillTypes.Technology,
			),
		},
	]
	return (
		<>
			<FilterSection
				Name={CERTIFICATE_PAGE.Label}
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
					HasArchivedMaterials: CheckForArchivedMaterials(CertificatesDatabaseMap)
				}}
			/>
			{/* Certificates List */}
			<CertificatesList GroupedMaterials={GroupedCertificates} />
		</>
	)
}