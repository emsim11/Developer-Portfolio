import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { Metadata } from '@/Interfaces/Layout'
import { DeveloperName } from '@/Constants/Developer'
import { EXPERIENCE_PAGE } from '@/Constants/Pages'
import { RolesDatabaseMap } from '@/Constants/Roles'
import { CompaniesDatabaseMap } from '@/Constants/Experiences'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { ExperienceView } from '@/Components/Molecules/Experience-View/Index'

const ExperienceMetadata: Metadata = {
	Title: `${DeveloperName} - ${EXPERIENCE_PAGE.Label}`,
	Description: EXPERIENCE_PAGE.Description,
	Category: `${EXPERIENCE_PAGE.Label}`,
	Creator: DeveloperName,
	Keywords: Object.values(RolesDatabaseMap).map((Role) => Role.Name),
}

export const Experience: FC = () => {
	const Keywords = Array.isArray(ExperienceMetadata.Keywords) ? ExperienceMetadata.Keywords.join(', ') : ExperienceMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{ExperienceMetadata.Title}</title>
					<meta name='Description' content={ExperienceMetadata.Description} />
					<meta name='Category' content={ExperienceMetadata.Category} />
					<meta name='Creator' content={ExperienceMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				{/* Invisible Div For SEO */}
				<div className='Experience-Page'>
					<h1>Work Experience & Volunteering:</h1>
					<ul>
						{Object.values(RolesDatabaseMap).map((Role) => (
							<li key={Role.Name}>
								{Role.Name} At {CompaniesDatabaseMap[Role.Company].Name}
							</li>
						))}
					</ul>
				</div>
				<section id='Experience'>
					<div className='Experience'>
						<HeadingOne Title={EXPERIENCE_PAGE.Label} />
						<PageDescription Description={EXPERIENCE_PAGE.Description} />
						<ExperienceView />
					</div>
				</section>
			</main>
		</>
	)
}