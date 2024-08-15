import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { DeveloperName } from '@/Constants/Developer'
import { Button } from '@/Components/Atoms/Button/Index'
import { MORE_PAGE } from '@/Constants/Pages'

const PageNotFoundMetadata = {
	Title: `${DeveloperName} - Page Not Found`,
	Description: 'The page you are looking for does not exist. Navigate back to the Homepage.'
}

export const PageNotFound: FC = () => {
	return (
		<>
			<HelmetProvider>
				<div>
					<Helmet>
						<title>{PageNotFoundMetadata.Title}</title>
						<meta name='Description' content={PageNotFoundMetadata.Description} />
					</Helmet>
				</div>
			</HelmetProvider>
			<div className='Page-Not-Found'>
				<div className='Page-Not-Found-Container'>
					<h1 className='Page-Not-Found-Title'>
						404
					</h1>
					<h1 className='Page-Not-Found-Subtitle'>
						Page Does Not Exist
					</h1>
				</div>
				<h2 className='Page-Not-Found-Text'>
					This page does not seem to exist.
					Navigate back to the Homepage or view all pages.
				</h2>
				<div className='Page-Not-Found-Links'>
					<Link to={'/'} className='Page-Not-Found-Link'>
						<Button Style='Gradient' ExtraClasses='Page-Not-Found-Link'>
							Home
						</Button>
					</Link>
					<br />
					<Link to={MORE_PAGE.Path} className='Page-Not-Found-Link'>
						<Button Style='Ghost' ExtraClasses='Page-Not-Found-Link'>
							All Pages
						</Button>
					</Link>
				</div>
			</div>
		</>
	)
}