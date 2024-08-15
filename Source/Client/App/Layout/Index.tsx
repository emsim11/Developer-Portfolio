import { FC, ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { NavBar } from '@/Components/Organisms/Nav-Bar/Index'
import { DeveloperName, DeveloperTitles } from '@/Constants/Developer'
import { HOME_PAGE } from '@/Constants/Pages'
import { Metadata } from '@/Interfaces/Layout'
import { Footer } from '@/Components/Organisms/Footer/Index'

interface LayoutProps {
	children: ReactNode
}

const PageMetadata: Metadata = {
	Title: DeveloperName,
	Description: HOME_PAGE.Description,
	Category: 'Homepage',
	Creator: DeveloperName,
	Keywords: DeveloperTitles,
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const Keywords = Array.isArray(PageMetadata.Keywords) ? PageMetadata.Keywords.join(', ') : PageMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{PageMetadata.Title}</title>
					<meta name='Description' content={PageMetadata.Description} />
					<meta name='Category' content={PageMetadata.Category} />
					<meta name='Creator' content={PageMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<NavBar />
			<main className='Main'>
				<div className='Main-Container'>
					{children}
					<Footer />
				</div>
			</main>
		</>
	)
}