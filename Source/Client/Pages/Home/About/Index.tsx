import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { GetMarkdownFromFileSystem } from '@/Utilities/Media'
import { Reader } from '@/Components/Atoms/Reader/Index'
import { LanguagesSection } from './Languages/Index'
import { TechnologiesSection } from './Technologies/Index'

export const HomepageAbout: FC = () => {
	const [AboutMeContent, SetAboutMeContent] = useState<string | undefined>(undefined)
	useEffect(() => {
		const FetchAboutMeContent = async () => {
			const Content = await GetMarkdownFromFileSystem(`/Content/About/Short.md`)
			SetAboutMeContent(Content || 'This is a placeholder for the "About Me" short text.')
		}
		FetchAboutMeContent()
	}, [])
	console.log(AboutMeContent)
	return (
		<section id='About-Me' className='Home-Section-Wrapper'>
			<h1 className='About-Title'>
				About Me
				<hr className='About-Horizontal-Rule'></hr>
			</h1>
			<div className='About'>
				{/* About Me Short Description */}
				<div className='About-Description'>
					<h1 className='About-Description-Title'>
						Get To Know Me!
					</h1>
					<div className='About-Description-Container'>
						<Reader Content={AboutMeContent} />
						<Link to={`/About`} className='About-Page-Link'>
							{`Read More About Me!`}
						</Link>
					</div>
				</div>
				{/* About Me Languages & Technologies */}
				<div className='About-Skills'>
					<LanguagesSection />
					<div className='About-Section' />
					<TechnologiesSection />
				</div>
			</div>
		</section>
	)
}