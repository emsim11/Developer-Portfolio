import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { DeveloperName } from '@/Constants/Developer'
import { PROJECT_PAGE } from '@/Constants/Pages'
import { ProjectsDatabaseMap } from '@/Constants/Projects'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { ProjectsView } from '@/Components/Molecules/Projects-View/Index'

const ProjectsMetadata = {
	Title: `${DeveloperName} - ${PROJECT_PAGE.Label}`,
	Description: PROJECT_PAGE.Description,
	Category: `${PROJECT_PAGE.Label}`,
	Creator: DeveloperName,
	Keywords: Object.values(ProjectsDatabaseMap).map((Project) => Project.Name),
}

export const Projects: FC = () => {
	const Keywords = Array.isArray(ProjectsMetadata.Keywords) ? ProjectsMetadata.Keywords.join(', ') : ProjectsMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{ProjectsMetadata.Title}</title>
					<meta name='Description' content={ProjectsMetadata.Description} />
					<meta name='Category' content={ProjectsMetadata.Category} />
					<meta name='Creator' content={ProjectsMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				<div className='Projects-Page'>
					<h1>Projects:</h1>
					<ul>
						{Object.values(ProjectsDatabaseMap).map((Project) => (
							<li key={Project.Name}>
								{Project.Name}: {Project.Description}
							</li>
						))}
					</ul>
				</div>
				<section id='Projects' className='Projects-Page-Content'>
					<div className='Projects-Page-Content-Container'>
						<HeadingOne Title={PROJECT_PAGE.Label} />
						<PageDescription Description={PROJECT_PAGE.Description} />
						<ProjectsView />
					</div>
				</section>
			</main>
		</>
	)
}