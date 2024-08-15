import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	BsArrowUpRightCircle as UpArrow,
	BsGithub as GitHub,
	BsPlusCircle as Plus,
} from 'react-icons/bs'

import './Index.scss'
import { Project } from '@/Interfaces/Project'
import { PageNotFound } from '@/App/Error/Index'
import { PROJECT_PAGE } from '@/Constants/Pages'
import { ProjectsDatabaseMap } from '@/Constants/Projects'
import { CategorizeAndGroupSkills, FilterSkillsByCategory, FilterSkillsByType, FilterSkillsExcludingCategory } from '@/Utilities/Skills'
import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GetImagesFromFileSystem, GetMarkdownFromFileSystem, GetVideosFromFileSystem, UseDataFetching } from '@/Utilities/Media'
import { HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { SkillTag } from '../Skill-Tag/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/Atoms/Accordion/Index'
import { Reader } from '@/Components/Atoms/Reader/Index'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { SkillsTableSection } from '../Skills-Table-Section/Index'
import { MaterialsList } from '@/Components/Organisms/Materials-List/Index'
import { Gallery } from '@/Components/Atoms/Gallery/Index'

// export async function GenerateMetadata(
// 	{ Params, SearchParams }: ProjectPageProps,
// ) {
// 	/* Read Route Parameters */
// 	const ProjectKey: string = Params.ProjectKey
// 	console.log(ProjectKey)
// 	const Project: Project = ProjectsDatabase[ProjectKey]
// 	if (!Project) (
// 		<PageNotFound />
// 	)
// 	if (!Project.Archived) {
// 		return {
// 			Title: `${DeveloperName} - Projects: ${Project?.Name}`,
// 			Description: Project?.Description,
// 			Category: `${PROJECT_PAGE.Label}`,
// 			Creator: DeveloperName,
// 			Keywords: [Project.Name],
// 		}
// 	}
// 	return undefined
// }

// export const GenerateStaticParams = async () => {
// 	return Object.keys(ProjectsDatabase).map((ProjectKey) => ({ ProjectKey }))
// }

interface ProjectPageProps {
	Params: { ProjectKey: string }
	SearchParams: { [Key: string]: string | string[] | undefined }
}

export const ProjectPage: FC<ProjectPageProps> = ({ Params }) => {
	const BasePath: string = PROJECT_PAGE.Path
	const ProjectKey: string = Params.ProjectKey
	const ProjectData: Project = ProjectsDatabaseMap[ProjectKey]
	if (!ProjectData) (
		<PageNotFound />
	)
	const HasCoverImage: boolean = ProjectData.ThumbnailImage !== undefined
	const CoverImagePath: string = `/Content${BasePath}/${ProjectKey}/Cover.png`
	const ProjectLanguages: SkillsDatabase[] = FilterSkillsByCategory(
		ProjectData.Skills,
		SkillsDatabaseMap,
		SkillCategories.ProgrammingLanguages,
	)
	const ProjectSkillsWithoutLanguage: SkillsDatabase[] = FilterSkillsExcludingCategory(
		ProjectData.Skills,
		SkillsDatabaseMap,
		SkillCategories.ProgrammingLanguages,
	)
	const Technologies: SkillsDatabase[] = FilterSkillsByType(
		ProjectSkillsWithoutLanguage,
		SkillsDatabaseMap,
		SkillTypes.Technology,
	)
	const GeneralSkills: SkillsDatabase[] = FilterSkillsByType(
		ProjectSkillsWithoutLanguage,
		SkillsDatabaseMap,
		SkillTypes.Technical,
	)
	const SoftSkills: SkillsDatabase[] = FilterSkillsByType(
		ProjectSkillsWithoutLanguage,
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
	const [Images, SetImages] = useState<string[]>([])
    const [Videos, SetVideos] = useState<string[]>([])
    const [FeaturesData, SetFeaturesData] = useState<string | null>(null)
	const UseMarkdownData = (FilePath: string) => {
		return UseDataFetching(() => GetMarkdownFromFileSystem(FilePath))
	}
	const UseImageData = (FilePath: string) => {
		return UseDataFetching(() => GetImagesFromFileSystem(FilePath))
	}
	const UseVideoData = (FilePath: string) => {
		return UseDataFetching(() => GetVideosFromFileSystem(FilePath))
	}
	useEffect(() => {
		const LoadData = async () => {
			const LoadedImages = UseImageData(`/Content${BasePath}/${ProjectKey}/Media`)
			const LoadedVideos = UseVideoData(`/Content${BasePath}/${ProjectKey}/Media`)
			const FeaturesData = UseMarkdownData(`/Content${BasePath}/${ProjectKey}/Features.md`)
			if (FeaturesData) {
				console.log(FeaturesData) /* Access Content Property If Features Is Not Null */
			}
			if (LoadedImages !== null) {
				SetImages(LoadedImages)
			}
			if (LoadedVideos !== null) {
				SetVideos(LoadedVideos)
			}
			if (FeaturesData !== null) {
				SetFeaturesData(FeaturesData)
			}
		}
		LoadData()
	}, [BasePath, ProjectKey])
	return (
		<main>
			<div className='Project-Key'>
				<h1>{ProjectData.Name}</h1>
				<h2>{ProjectData.Description}</h2>
				<h3>Programming Languages:</h3>
				<ul>
					{ProjectLanguages.map((Language) => (
						<li key={Language}>{SkillsDatabaseMap[Language].Name}</li>
					))}
				</ul>
				<h3>Technologies, Frameworks & Libraries</h3>
				<ul>
					{Technologies.map((Technology) => (
						<li key={Technology}>{SkillsDatabaseMap[Technology].Name}</li>
					))}
				</ul>
			</div>
			<div className='Project-Key-Data'>
				<HeadingTwo Title={ProjectData?.Name} />
				{/* Gallery Section */}
				{(Images && Images.length > 1) || (Videos && Videos.length > 1 ? (
					<Gallery Images={Images} Videos={Videos} />
				) : (
					HasCoverImage && (
						<div className='Project-Key-With-Cover-Image'>
							<AspectRatio ratio={8 / 5} className='Project-Key-With-Cover-Aspect-Ratio'>
								<img
									src={CoverImagePath}
									alt='Project Image'
									className='Project-Key-Cover-Image'
								/>
							</AspectRatio>
						</div>
					)
				))}
				{/* Metadata Section */}
				<div className='Project-Key-Metadata'>
					{/* Description Section */}
					<div className='Project-Key-Text'>
						<HeadingThree Title='Description' />
						<div className='Project-Key-Description-Container'>
							<p className='Project-Key-Description-Text'>
								{ProjectData.Description}
							</p>
						</div>
					</div>
					{/* Languages Section */}
					{ProjectLanguages && Object.keys(ProjectLanguages).length > 0 && (
						<div className='Project-Key-Languages'>
							<HeadingThree
								Title={Object.keys(ProjectLanguages).length > 1
									? 'Languages'
									: 'Language'
								}
							/>
							<div className='Project-Key-Languages-Container'>
								{ProjectLanguages.map((Language, Index) => (
									<SkillTag key={Index} SkillKey={Language} />
								))}
							</div>
						</div>
					)}
					{/* Skills Section */}
					<div>
						<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
					</div>
					{/* Links Section */}
					<div className='Project-Key-Text'>
						<HeadingThree Title='Links' />
						<div className='Project-Key-Links-Container'>
							{/* GitHub Repository */}
							{ProjectData?.RepositoryURL && (
								<Link
									to={ProjectData?.RepositoryURL}
									target='_blank'
									className='Project-Key-Link'
								>
									<Button>
										<div className='Project-Key-Link-Button'>
											<GitHub size={26} />
											<p className='Project-Key-Link-Text'>Repository</p>
										</div>
									</Button>
								</Link>
							)}
							{/* Website */}
							{ProjectData?.DeploymentURL && (
								<Link
									to={ProjectData?.DeploymentURL}
									target='_blank'
									className='Project-Key-Link'
								>
									<Button>
										<div className='Project-Key-Link-Button'>
											<UpArrow size={26} />
											<p className='Project-Key-Link-Text'>Deployment</p>
										</div>
									</Button>
								</Link>
							)}
						</div>
					</div>
					{/* Divider */}
					{!!FeaturesData || (ProjectData.RelatedMaterials && ProjectData.RelatedMaterials.length > 0) ? (
						<div className='Project-Key-Divider' />
					) : ( <></> )}
					{/* Features Section */}
					{!!FeaturesData && (
						<>
							<Accordion type='single' collapsible>
								<AccordionItem value='Item-1'>
									<AccordionTrigger>
										<div className='Project-Key-Features'>
											<Plus size={26} className='Project-Key-Features-Icon' />
											<p className='Project-Key-Features-Text'>Features</p>
										</div>
									</AccordionTrigger>
									<AccordionContent className='Project-Key-Features-Content'>
										<Reader Content={FeaturesData} />
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</>
					)}
					{/* Related Materials Section */}
					{ProjectData.RelatedMaterials && ProjectData.RelatedMaterials.length > 0 && (
						<>
							<MaterialsList MaterialKeys={ProjectData.RelatedMaterials} />
						</>
					)}
				</div>
			</div>
		</main>
	)
}