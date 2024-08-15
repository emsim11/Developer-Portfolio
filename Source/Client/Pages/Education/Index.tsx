import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { Metadata } from '@/Interfaces/Layout'
import { DeveloperName } from '@/Constants/Developer'
import { EDUCATION_PAGE } from '@/Constants/Pages'
import { CoursesDatabaseKeys, CoursesDatabaseMap } from '@/Constants/Courses'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { Grid } from '@/Components/Atoms/Grid/Index'
import { CourseItem } from '@/Components/Molecules/Course-Item/Index'

const EducationMetadata: Metadata = {
	Title: `${DeveloperName} = ${EDUCATION_PAGE.Label}`,
	Description: EDUCATION_PAGE.Description,
	Category: `${EDUCATION_PAGE.Label}`,
	Creator: DeveloperName,
	Keywords: Object.values(CoursesDatabaseMap).map((Course) => Course.Name),
}

export const Education: FC = () => {
	const Keywords = Array.isArray(EducationMetadata.Keywords) ? EducationMetadata.Keywords.join(', ') : EducationMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{EducationMetadata.Title}</title>
					<meta name='Description' content={EducationMetadata.Description} />
					<meta name='Category' content={EducationMetadata.Category} />
					<meta name='Creator' content={EducationMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				{/* Invisible Div For SEO */}
				<div className='Education-Page'>
					<h1>Educational Background & Credentials:</h1>
					<ul>
						{Object.values(CoursesDatabaseMap).map((Course) => (
							<li key={Course.Name}>
								{Course.Name} From {Course.University} With {Course.Grade}.
							</li>
						))}
					</ul>
				</div>
				<section id='Education'>
					<div className='Education'>
						<HeadingOne Title={EDUCATION_PAGE.Label} />
						<PageDescription Description={EDUCATION_PAGE.Description} />
						{/* List Of Courses & Qualifications */}
						<div className='Education-Courses'>
							<Grid
								Items={CoursesDatabaseKeys.map((CourseKey) => (
									<CourseItem key={CourseKey} CourseKey={CourseKey} />
								))}
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}