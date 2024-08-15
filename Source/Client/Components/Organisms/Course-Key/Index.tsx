import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { Course } from '@/Interfaces/Course'
import { CoursesDatabaseMap } from '@/Constants/Courses'
import { EDUCATION_PAGE } from '@/Constants/Pages'
import { PageNotFound } from '@/App/Error/Index'
import { FilterMaterialByArchivedStatus, GroupMaterialsByCategory } from '@/Utilities/Materials'
import { Module } from '@/Interfaces/Module'
import { ModulesDatabaseKeys, ModulesDatabaseMap } from '@/Constants/Modules'
import { ModulesDatabase } from '@/Enums/Module'
import { MaterialGroup } from '@/Interfaces/Material'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { CategorizeAndGroupSkills, FilterSkillsByType } from '@/Utilities/Skills'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { HeadingFour, HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { ArchiveToggle } from '@/Components/Atoms/Archive-Toggle/Index'
import { Grid } from '@/Components/Atoms/Grid/Index'
import { Tag } from '@/Components/Atoms/Tag/Index'
import { SkillsTableSection } from '@/Components/Molecules/Skills-Table-Section/Index'
import { MaterialsList } from '../Materials-List/Index'

// export async function generateMetadata(
//   { params, searchParams }: CoursesPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // Read route params
//   const courseKey: string = params.courseKey;
//   const course: CourseInterface = courseDatabaseMap[courseKey];

//   if (!course) {
//     notFound();
//   }

//   // Create metadata based on the course details
//   return {
//     title: `${developerName} - Courses: ${course?.name}`,
//     description: `${course.grade} in ${course.name} from ${course?.university}`,
//     category: `${EDUCATION_PAGE.label}`,
//     creator: developerName,
//     keywords: [
//       course.name,
//       course.university,
//       ...course?.modules.map((module) => moduleDatabaseMap[module].name),
//     ],
//   };
// }

// /**
//  * Generates the static paths for the courses.
//  * These are then used to pre-render the courses pages.
//  * This Incremental Static Regeneration allows the courses to be displayed without a server.
//  * This improves the performance of the website.
//  *
//  * @returns A list of all the keys for the static pages that need to be generated.
//  * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
//  */
// export const generateStaticParams = async () => {
//   return Object.keys(courseDatabaseMap).map((courseKey) => ({
//     courseKey,
//   }));
// };

interface CoursePageProps {
	Params: { CourseKey: string }
  	SearchParams: { [Key: string]: string | string[] | undefined }
}

export const CoursePage: FC<CoursePageProps> = ({ Params, SearchParams }) => {
	const CourseKey: string = Params.CourseKey
	const CourseData: Course = CoursesDatabaseMap[CourseKey]
	const BasePath: string = EDUCATION_PAGE.Path
	if (!CourseData) {
		return (
			<PageNotFound />
		)
	}
	/* TODO: MIGHT HAVE TO UPDATE FILE EXTENSION */
	const CourseImage = `${BasePath}/${CourseKey}.png`
	const ShowArchived: boolean = (SearchParams.Archived || 'false') === 'true'
	let FilteredModules: ModulesDatabase[] = ModulesDatabaseKeys
	FilteredModules = FilterMaterialByArchivedStatus<Module>(
		ShowArchived,
		FilteredModules,
		ModulesDatabaseMap,
	) as ModulesDatabase[]
	const GroupedModules: MaterialGroup[] = GroupMaterialsByCategory(
		FilteredModules,
		ModulesDatabaseMap,
	)
	/* Skills */
	const Technologies: SkillsDatabase[] = FilterSkillsByType(
		CourseData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technology,
	)
	const GeneralSkills: SkillsDatabase[] = FilterSkillsByType(
		CourseData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technical,
	)
	const SoftSkills: SkillsDatabase[] = FilterSkillsByType(
		CourseData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Soft,
	)
	const AllGroupedSkills: GroupedSkillsCategory[] = [
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
	return (
		<main>
			<div className='Course-Page'>
				<h1>{CourseData.Name}</h1>
				<h2>{`${CourseData.Grade} In ${CourseData.Name} From ${CourseData?.University}`}</h2>
				{/* List Of Modules */}
				<h3>Modules:</h3>
				<ul>
					{CourseData.Modules.map((Module) => (
						<li key={Module}>{`${ModulesDatabaseMap[Module].Name}`}</li>
					))}
				</ul>
				<h3>Skills For Course:</h3>
				{CourseData.Skills.map((Skill) => (
					<p key={Skill}>{SkillsDatabaseMap[Skill].Name}</p>
				))}
			</div>
			<div>
				<HeadingTwo Title={CourseData.Name} />
				<div className='Course-Key'>
					{/* Left */}
					<div className='Course-Key-Left-Section'>
						<AspectRatio ratio={1 / 1.4} className='Course-Key-Aspect-Ratio'>
							<img
								src={CourseImage}
								key={CourseImage}
								alt={`${CourseData.Name} Cover Image`}
								loading='lazy'
								className='Course-Key-Image'
							/>
						</AspectRatio>
					</div>
					{/* Right */}
					<div className='Course-Key-Right-Section'>
						<HeadingThree Title={CourseData.University} />
						<p className='Course-Key-Category'>{CourseData.Category}</p>
						<p>{`${CourseData.StartYear} - ${CourseData.EndYear}`}</p>
						<div className='Course-Key-Grade'>
							<p className='Course-Key-Grade-Label'>Grade:</p>
							<p>{CourseData.Grade}</p>
						</div>
					</div>
				</div>
				<div className='Course-Key-Modules'>
					<div>
						<div className='Course-Key-Modules-Container'>
							<HeadingThree Title='Modules' />
						</div>
						{/* Archive Toggle */}
						<ArchiveToggle
							ShowArchived={ShowArchived}
							FilterProps={[]}
							BasePath={`${BasePath}/${CourseKey}`}
						/>
						{/* Modules */}
						{GroupedModules.map((Group, Index) => (
							<div key={Index} className='Course-Key-Module'>
								<HeadingFour Title={Group.GroupName} />
								<Grid
									Gap={1}
									Items={Group.MaterialKeys.map((ModuleKey, Index) => (
										<Link
											to={`${BasePath}/${CourseKey}/${ModuleKey}`}
											key={Index}
										>
											<Tag HasHover>
												{ModulesDatabaseMap[ModuleKey].Name}
											</Tag>
										</Link>
									))}
								/>
							</div>
						))}
					</div>
					{/* Skills */}
					<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
					{/* Related Materials */}
					{CourseData.RelatedMaterials && CourseData.RelatedMaterials.length > 0 && (
						<>
							{/* Divider */}
							<div className='Course-Key-Materials-Divider' />
							<MaterialsList MaterialKeys={CourseData.RelatedMaterials} />
						</>
					)}
				</div>
			</div>
		</main>
	)
}