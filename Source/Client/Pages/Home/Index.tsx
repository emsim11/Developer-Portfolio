import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { HomepageAbout } from './About/Index'
import { HomepageHero } from './Hero/Index'
import { HomepageProjects } from './Projects/Index'
import { DeveloperName, DeveloperTitles } from '@/Constants/Developer'
import { HOME_PAGE } from '@/Constants/Pages'

export const Home: FC = () => {
	return (
		<main>
			<HelmetProvider>
				<div>
					<Helmet>
						<title>{DeveloperName}</title>
						<meta name='Description' content={HOME_PAGE.Description} />
						<meta name='Category' content='Homepage' />
						<meta name='Creator' content={DeveloperName} />
						<meta name='Keywords' content={DeveloperTitles.join(', ')} />
					</Helmet>
				</div>
			</HelmetProvider>
			<div className='Home'>
				<p>{`My name is ${DeveloperName} and I am a `}</p>
				{DeveloperTitles.map((Title, Index) => (
					<p key={Index}>{Title}</p>
				))}
				<div className='Home-About-Section'>
					{/* ABOUT MARKDOWN SHORT.MD FILE */}
				</div>
			</div>
			<div className='Home-Container'>
				<HomepageHero />
				<HomepageAbout />
				<HomepageProjects />
			</div>
		</main>
	)
}