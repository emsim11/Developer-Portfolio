import { FC } from 'react'

import './Index.scss'
import { PageNotFound } from '@/App/Error/Index'
import { CoursesDatabaseMap } from '@/Constants/Courses'
import { ModulesDatabaseMap } from '@/Constants/Modules'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { Course } from '@/Interfaces/Course'
import { Module } from '@/Interfaces/Module'
import { CategorizeAndGroupSkills, FilterSkillsByType } from '@/Utilities/Skills'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { EDUCATION_PAGE, HOME_PAGE } from '@/Constants/Pages'
import { HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { DynamicBreadcrumb } from '@/Components/Atoms/Dynamic-Breadcrumb/Index'
import { StringList } from '@/Components/Atoms/String-List/Index'
import { SkillsTableSection } from '@/Components/Molecules/Skills-Table-Section/Index'
import { MaterialsList } from '../Materials-List/Index'

// export async function generateMetadata(
//   { params, searchParams }: ModulePageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // Read route params
//   const moduleKey: string = params.moduleKey;
//   const moduleData: ModuleInterface = moduleDatabaseMap[moduleKey];

//   if (!moduleData) {
//     notFound();
//   }

//   // Create metadata based on the course details
//   return {
//     title: `${developerName} - Courses: ${moduleData?.name}`,
//     description: moduleData.learningOutcomes.join(". ") || "",
//     category: `${EDUCATION_PAGE.label}`,
//     creator: developerName,
//   };
// }

// /**
//  * Generates the static paths for the modules.
//  * These are then used to pre-render the module pages.
//  * This Incremental Static Regeneration allows the module to be displayed without a server.
//  * This improves the performance of the website.
//  *
//  * @returns A list of all the keys for the static pages that need to be generated.
//  * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
//  */
// export const generateStaticParams = async () => {
//   return Object.keys(moduleDatabaseMap).map((moduleKey) => ({
//     moduleKey,
//   }));
// };

interface ModulePageProps {
	Params: { ModuleKey: string }
	SearchParams: { [Key: string]: string | string[] | undefined }
}

export const ModulePage: FC<ModulePageProps> = ({ Params }) => {
	const ModuleKey: string = Params.ModuleKey
	const ModuleData: Module = ModulesDatabaseMap[ModuleKey]
	const ParentCourse: Course = CoursesDatabaseMap[ModuleData.ParentCourse]
	if (!ModuleData) {
		return (
			<PageNotFound />
		)
	}
	const Technologies: SkillsDatabase[] = FilterSkillsByType(
		ModuleData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technology,
	)
	const GeneralSkills: SkillsDatabase[] = FilterSkillsByType(
		ModuleData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technical,
	)
	const SoftSkills: SkillsDatabase[] = FilterSkillsByType(
		ModuleData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Soft,
	)
	/* Simplified Grouping Of Skill Types For Certificates */
	const AllGroupedSkills: GroupedSkillsCategory[] = [
		CategorizeAndGroupSkills(
			Technologies,
			SkillsDatabaseMap,
			SkillTypes.Technology,
			'Technologies',
		),
		CategorizeAndGroupSkills(
			Technologies,
			SkillsDatabaseMap,
			SkillTypes.Technology,
			'Technologies',
		),
		CategorizeAndGroupSkills(
			GeneralSkills,
			SkillsDatabaseMap,
			SkillTypes.Technical,
			'Technical Skills',
		),
		CategorizeAndGroupSkills(
			SoftSkills,
			SkillsDatabaseMap,
			SkillTypes.Soft,
			'Soft Skills',
		),
	]
	const BreadcrumbData = [
		{ Name: HOME_PAGE.Label, Path: HOME_PAGE.Path },
		{ Name: EDUCATION_PAGE.Label, Path: EDUCATION_PAGE.Path },
		{ Name: ParentCourse.Name, Path: `${EDUCATION_PAGE.Path}/${ModuleData.ParentCourse}` },
		{ Name: ModuleData.Name },
	]
	return (
		<main>
			<div className='Module-Page'>
				<h1>{ModuleData.Name}</h1>
				{/* List Of Modules */}
				<h2>Learning Outcomes:</h2>
				<ul>
					{ModuleData.LearningOutcomes.map((Outcome) => (
						<li key={Outcome}>{Outcome}</li>
					))}
				</ul>
				<h3>Skills For Module:</h3>
				{ModuleData.Skills.map((Skill) => (
					<p key={Skill}>{SkillsDatabaseMap[Skill].Name}</p>
				))}
			</div>
			<div>
				<HeadingTwo Title={ModuleData.Name} />
				<p className='Module-Key-Text'>{ModuleKey}</p>
				<DynamicBreadcrumb Breadcrumbs={BreadcrumbData} />
				<div className='Module-Key'>
					<div className='Module-Key-Container'>
						{/* Learning Outcomes */}
						{ModuleData.LearningOutcomes && (
							<>
								<div className='Module-Key-Learning-Outcomes'>
									<HeadingThree Title='Learning Outcomes' />
								</div>
								<StringList Items={ModuleData.LearningOutcomes} />
							</>
						)}
					</div>
					{/* Skills */}
					<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
					{/* Score */}
					{ModuleData.Score && (
						<div className='Module-Key-Score'>
							<p className='Module-Key-Score-Label'>Score:</p>
							<p>{ModuleData.Score}</p>
						</div>
					)}
					{/* Related Materials */}
					{ModuleData.RelatedMaterials && ModuleData.RelatedMaterials.length > 0 && (
						<>
							{/* Divider */}
							<div className='Module-Key-Materials-Divider' />
							<MaterialsList MaterialKeys={ModuleData.RelatedMaterials} />
						</>
					)}
				</div>
			</div>
		</main>
	)
}