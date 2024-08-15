import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { PROJECT_PAGE } from '@/Constants/Pages'
import { ProjectsDatabase } from '@/Enums/Project'
import { HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { SlideUp } from '@/Components/Atoms/Slide-Up/Index'
import { ProjectItem } from '@/Components/Molecules/Project-Item/Index'
import { Button } from '@/Components/Atoms/Button/Index'

export const HomepageProjects: FC = () => {
	const BasePath: string = PROJECT_PAGE.Path
	const DisplayedProjects: string[] = [
		ProjectsDatabase.CodeQuiz,
	]
	return (
		<section id='Projects-Section' className='Home-Section-Wrapper'>
			<HeadingTwo Title='Projects' />
			<div className='Projects'>
				{DisplayedProjects.map((ProjectSlug, Index) => ( /* eslint-disable-line @typescript-eslint/no-unused-vars */
					<div key={ProjectSlug}>
						<SlideUp Offset='-150px 0px -150px 0px'>
							<ProjectItem ProjectKey={ProjectSlug} />
						</SlideUp>
					</div>
				))}
			</div>
			<div className='All-Projects'>
				<Link to={BasePath}>
					<Button Style='Outline'>View All Projects</Button>
				</Link>
			</div>
		</section>
	)
}