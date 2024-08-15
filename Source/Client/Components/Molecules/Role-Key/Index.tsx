import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRightCircle as ArrowUpRightCircle } from 'react-icons/bs'

import './Index.scss'
import { Role } from '@/Interfaces/Role'
import { RolesDatabaseMap } from '@/Constants/Roles'
import { PageNotFound } from '@/App/Error/Index'
import { Company } from '@/Interfaces/Experience'
import { CompaniesDatabaseMap } from '@/Constants/Experiences'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { CategorizeAndGroupSkills, FilterSkillsByType } from '@/Utilities/Skills'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { GetMarkdownFromFileSystem, UseDataFetching } from '@/Utilities/Media'
import { EXPERIENCE_PAGE } from '@/Constants/Pages'
import { Reader } from '@/Components/Atoms/Reader/Index'
import { HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { DetailsTable } from '@/Components/Atoms/Details-Table/Index'
import { SkillsTableSection } from '../Skills-Table-Section/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { MaterialsList } from '@/Components/Organisms/Materials-List/Index'

// /**
//  * Generates the metadata for the work experience page.
//  * This includes the title and description of the page.
//  * This is used for SEO purposes.
//  *
//  * @param props The props for the skill page.
//  * @param parent The parent metadata that is being resolved.
//  * @returns The metadata for the blog page.
//  * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
//  */
// export async function generateMetadata(
//   { params, searchParams }: RolePageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const roleKey: string = params.roleKey;
//   const role: RoleInterface = rolesDatabase[roleKey];

//   if (!role) {
//     notFound();
//   }

//   const company: CompanyInterface = companyDatabaseMap[role.company];

//   return {
//     title: `${developerName} - ${EXPERIENCE_PAGE.label}: ${role?.name}`,
//     description: `${role.type} ${role.name} at ${role?.company}`,
//     category: `${EXPERIENCE_PAGE.label}`,
//     creator: developerName,
//     keywords: [role.name, company.name],
//   };
// }

// /**
//  * Generates the metadata for the work experience page.
//  * This includes the title and description of the page.
//  * This is used for SEO purposes.
//  *
//  * @param props The props for the work experience page.
//  * @param parent The parent metadata that is being resolved.
//  * @returns The metadata for the work experience page.
//  * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
//  */
// export const generateStaticParams = async () => {
//   return Object.keys(rolesDatabase).map((roleKey) => ({
//     roleKey,
//   }));
// };

interface RolePageProps {
	Params: { RoleKey: string }
	SearchParams: { [Key: string]: string | string[] | undefined}
}

export const RolePage: FC<RolePageProps> = ({ Params }) => {
	const BasePath: string = EXPERIENCE_PAGE.Path
	const RoleKey: string = Params.RoleKey
	const RoleData: Role = RolesDatabaseMap[RoleKey]
	if (!RoleData) (
		<PageNotFound />
	)
	const CompanyData: Company = CompaniesDatabaseMap[RoleData.Company]
	const Technologies: SkillsDatabase[] = FilterSkillsByType(
		RoleData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technology,
	)
	const GeneralSkills: SkillsDatabase[] = FilterSkillsByType(
		RoleData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technical,
	)
	const SoftSkills: SkillsDatabase[] = FilterSkillsByType(
		RoleData.Skills,
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
	const [Responsibilities, SetResponsibilities] = useState<string | null>(null)
	const UseMarkdownData = (FilePath: string) => {
		return UseDataFetching(() => GetMarkdownFromFileSystem(FilePath))
	}
	useEffect(() => {
		const LoadData = async () => {
			const ResponsibilitiesData = UseMarkdownData(`/Content${BasePath}/${RoleKey}/Responsibilities.md`)
			if (ResponsibilitiesData) {
				console.log(ResponsibilitiesData) /* Access Content Property If Responsibilities Is Not Null */
			}
			if (ResponsibilitiesData !== null) {
				SetResponsibilities(ResponsibilitiesData)
			}
		}
		LoadData()
	}, [BasePath, RoleKey])
	return (
		<main>
			<div className='Role-Key'>
				<h1>{`${RoleData.Name} At ${RoleData?.Company}`}</h1>
				<h2>Responsibilities:</h2>
				{!!Responsibilities && (
					<Reader Content={Responsibilities} Size='Large-Prose' />
				)}
				<h3>Skills For Work Experience:</h3>
				{RoleData.Skills.map((Skill) => (
					<p key={Skill}>{SkillsDatabaseMap[Skill]?.Name}</p>
				))}
			</div>
			<div>
				<HeadingTwo Title={RoleData?.Name} />
				{CompanyData.Logo && CompanyData.Website && (
					<div className='Role-Key-Skills'>
						<div className='Role-Key-Skills-Container'>
							<Link to={CompanyData.Website} target='_blank'>
								<AspectRatio ratio={1 / 1} className='Role-Key-Aspect-Ratio'>
									<img
										src={CompanyData.Logo}
										alt={`Logo For ${CompanyData.Name}`}
										className='Role-Key-Company-Logo'
										loading='eager'
									/>
								</AspectRatio>
							</Link>
						</div>
					</div>
				)}
				{/* Details */}
				<div className='Role-Key-Details'>
					<div className='Role-Key-Details-Container'>
						<div className='Role-Key-Details-Text'>
							<HeadingThree Title='Details' />
						</div>
						<DetailsTable
							Details={[
								{ Heading: 'Company', Value: CompanyData.Name },
								{ Heading: 'Location', Value: CompanyData.Location },
								{ Heading: 'Type', Value: RoleData.Type },
								{ Heading: 'Category', Value: RoleData.Category },
								{ Heading: 'Start Date', Value: RoleData.StartDate },
								{ Heading: 'End Date', Value: RoleData.EndDate },
							]}
						/>
					</div>
					<div>
						{/* Responsibilities */}
						{!!Responsibilities && (
							<>
								<div className='Role-Key-Details-Text'>
									<HeadingThree Title='Responsibilities' />
								</div>
								<Reader Content={Responsibilities} Size='Large-Prose' />
							</>
						)}
					</div>
					{/* Skills Section */}
					<div>
						<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
					</div>
					<div>
						{CompanyData.Website && (
							<Link
								to={CompanyData.Website}
								target='_blank'
								className='Role-Key-Company-Website'
							>
								<Button>
									<div className='Role-Key-Company-Website-Icon'>
										<ArrowUpRightCircle size={26} />
										<p>{`${CompanyData.Name} Website`}</p>
									</div>
								</Button>
							</Link>
						)}
						{/* More Materials */}
						{RoleData.RelatedMaterials && RoleData.RelatedMaterials.length > 0 && (
							<>
								{/* Divider */}
								<div className='Role-Key-Materials-Divider' />
								<MaterialsList MaterialKeys={RoleData.RelatedMaterials} />
							</>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}