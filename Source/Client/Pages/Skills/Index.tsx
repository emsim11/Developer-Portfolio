import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { Metadata } from '@/Interfaces/Layout'
import { DeveloperName } from '@/Constants/Developer'
import { SKILL_PAGE } from '@/Constants/Pages'
import { SkillsDatabaseKeys, SkillsDatabaseMap } from '@/Constants/Skills'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { SkillsList } from '@/Components/Molecules/Skills-List/Index'

const SkillsMetadata: Metadata = {
	Title: `${DeveloperName} - Skills`,
	Description: SKILL_PAGE.Description,
	Category: `${SKILL_PAGE.Label}`,
	Creator: DeveloperName,
	Keywords: Object.values(SkillsDatabaseMap).map((Skill) => Skill.Name),
}

export const Skills: FC = () => {
	const Keywords = Array.isArray(SkillsMetadata.Keywords) ? SkillsMetadata.Keywords.join(', ') : SkillsMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{SkillsMetadata.Title}</title>
					<meta name='Description' content={SkillsMetadata.Description} />
					<meta name='Category' content={SkillsMetadata.Category} />
					<meta name='Creator' content={SkillsMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				{/* Invisible Div For SEO */}
				<div className='Skills-Page'>
					<h1>Skills:</h1>
					<ul>
						{Object.values(SkillsDatabaseMap).map((Skill) => (
							<li key={Skill.Name}>{Skill.Name}</li>
						))}
					</ul>
				</div>
				<section id='Skills'>
					<div className='Skills'>
						<HeadingOne Title='Skills' />
						<PageDescription Description={SKILL_PAGE.Description} />
						<SkillsList Skills={SkillsDatabaseKeys} />
					</div>
				</section>
			</main>
		</>
	)
}