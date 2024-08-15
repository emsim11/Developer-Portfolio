import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { DeveloperName } from '@/Constants/Developer'
import { HOME_PAGE, MORE_PAGE, NAVIGATION_ITEMS } from '@/Constants/Pages'
import { NavigationItem } from '@/Interfaces/Layout'
import { PageNavItem } from '@/Components/Atoms/Page-Nav-Item/Index'
import { Grid } from '@/Components/Atoms/Grid/Index'

const MoreMetadata = {
	Title: `${DeveloperName} - All Pages`,
	Description: MORE_PAGE.Description,
}

type MorePageProps = {
	Params?: { CourseKey: string }
	SearchParams?: { [Key: string]: string | string[] | undefined }
}

export const More: FC<MorePageProps> = ({ Params, SearchParams }) => {
	const IgnoredPages: Array<NavigationItem> = [HOME_PAGE, MORE_PAGE]
	return (
		<>
			<HelmetProvider>
				<div>
					<Helmet>
						<title>{MoreMetadata.Title}</title>
						<meta name='Description' content={MoreMetadata.Description} />
					</Helmet>
				</div>
			</HelmetProvider>
			<main>
				<section id='Pages'>
					<div className='More-Page'>
						<Grid
							Items={NAVIGATION_ITEMS.filter((Item) => !IgnoredPages.includes(Item)).map((Item) => (
								<PageNavItem key={Item.Label} Item={Item} />
							))}
						/>
					</div>
				</section>
			</main>
		</>
	)
}