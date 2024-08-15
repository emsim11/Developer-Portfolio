import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { Metadata } from '@/Interfaces/Layout'
import { DeveloperName } from '@/Constants/Developer'
import { BLOG_PAGE } from '@/Constants/Pages'
import { BlogsDatabaseMap } from '@/Constants/Blogs'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { BlogsView } from '@/Components/Organisms/Blogs-View/Index'

const BlogsMetadata: Metadata = {
	Title: `${DeveloperName} = ${BLOG_PAGE.Label}`,
	Description: BLOG_PAGE.Description,
	Category: `${BLOG_PAGE.Label}`,
	Creator: DeveloperName,
	Keywords: Object.values(BlogsDatabaseMap).map((Blog) => Blog.Name),
}

export const Blogs: FC = () => {
	const Keywords = Array.isArray(BlogsMetadata.Keywords) ? BlogsMetadata.Keywords.join(', ') : BlogsMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{BlogsMetadata.Title}</title>
					<meta name='Description' content={BlogsMetadata.Description} />
					<meta name='Category' content={BlogsMetadata.Category} />
					<meta name='Creator' content={BlogsMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				{/* Invisible Div For SEO */}
				<div className='Blogs-Page'>
					<h1>Blogs & Articles:</h1>
					<ul>
						{Object.values(BlogsDatabaseMap).map((Blog) => (
							<li key={Blog.Name}>
								{Blog.Name}: {Blog.Subtitle}
							</li>
						))}
					</ul>
				</div>
				<section id='Blogs'>
					<div className='Blogs'>
						<HeadingOne Title={BLOG_PAGE.Label} />
						<PageDescription Description={BLOG_PAGE.Description} />
						<BlogsView />
					</div>
				</section>
			</main>
		</>
	)
}