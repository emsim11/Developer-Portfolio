import { FC, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { Metadata } from '@/Interfaces/Layout'
import { DeveloperName, DeveloperTitles } from '@/Constants/Developer'
import { GetMarkdownFromFileSystem } from '@/Utilities/Media'
import { Role } from '@/Interfaces/Role'
import { RolesDatabase } from '@/Enums/Role'
import { CompaniesDatabaseMap } from '@/Constants/Experiences'
import { Course } from '@/Interfaces/Course'
import { CoursesDatabaseMap } from '@/Constants/Courses'
import { RolesDatabaseMap } from '@/Constants/Roles'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { Reader } from '@/Components/Atoms/Reader/Index'
import { SocialButtons } from '@/Components/Molecules/Social-Buttons/Index'
import { DetailsTable } from '@/Components/Atoms/Details-Table/Index'
import { MaterialsList } from '@/Components/Organisms/Materials-List/Index'

export const About: FC = () => {
	const [AboutMeContent, SetAboutMeContent] = useState<string | undefined>(undefined)
	useEffect(() => {
		const FetchAboutMeContent = async () => {
			const Content = await GetMarkdownFromFileSystem(`/Content/About/Long.md`)
			SetAboutMeContent(Content || 'This is a placeholder for the "About Me" text.')
		}
		FetchAboutMeContent()
	}, [])
	console.log(AboutMeContent)
	const AboutMetadata: Metadata = {
		Title: `${DeveloperName} - About Me`,
		Description: AboutMeContent,
		Category: `About ${DeveloperName}`,
		Creator: DeveloperName,
		Keywords: DeveloperTitles,
	}
	const Keywords = Array.isArray(AboutMetadata.Keywords) ? AboutMetadata.Keywords.join(', ') : AboutMetadata.Keywords
	const LatestWorkExperience: Role = Object.values(RolesDatabaseMap)[0]
	const LatestRole: string = LatestWorkExperience.Name
	const LatestCompany: string = CompaniesDatabaseMap[LatestWorkExperience.Company].Name
	const LatestEducation: Course = Object.values(CoursesDatabaseMap)[0]
	const LatestUniversityName: string = LatestEducation.University
	const LatestCourseName: string = LatestEducation.Name
	const FeaturedMaterial: string[] = [
		RolesDatabase.OpenSourceContributor,
	]
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{AboutMetadata.Title}</title>
					<meta name='Description' content={AboutMetadata.Description} />
					<meta name='Category' content={AboutMetadata.Category} />
					<meta name='Creator' content={AboutMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				<div className='About'>
					<HeadingOne Title='About Me' />
				</div>
				{/* Profile Image */}
				<div className='About-Profile'>
					<div className='About-Profile-Container'>
						<img
							src='/Profile.png'
							alt={`Profile Image Of ${DeveloperName}`}
							height={150}
							width={150}
							className='About-Profile-Image'
							loading='eager'
						/>
					</div>
				</div>
				<div className='About-Content'>
					<div className='About-Content-Container'>
						{/* Left Section */}
						<div className='About-Content-Description'>
							<Reader Content={AboutMeContent} Size='Large-Prose' />
						</div>
						{/* Right Section */}
						<div className='About-Developer'>
							{/* Profile Image */}
							<img
								src='/Profile.png'
								alt={`Profile Image Of ${DeveloperName}`}
								height={250}
								width={250}
								className='About-Developer-Image'
								loading='eager'
							/>
							{/* Social Icons */}
							<div className='About-Profile-Container'>
								<SocialButtons IconSize={36} />
							</div>
							{/* Details */}
							<DetailsTable
								Details={[
									{ Heading: 'Name', Value: DeveloperName },
									{ Heading: 'Location', Value: 'Berkeley Heights, New Jersey' },
									{ Heading: 'University', Value: LatestUniversityName },
									{ Heading: 'Degree', Value: LatestCourseName },
									{ Heading: 'Currently Working', Value: LatestCompany },
									{ Heading: 'Current Role', Value: LatestRole },
								]}
								ExtraClasses='About-Developer-Info'
							/>
						</div>
					</div>
				</div>
				<MaterialsList MaterialKeys={FeaturedMaterial} />
			</main>
		</>
	)
}