import { FC } from 'react'

import './Index.scss'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'
import { SkillsDatabase } from '@/Enums/Skill'
import { HeadingThree } from '@/Components/Atoms/Headings/Index'
import { LanguagesModal } from '@/Components/Organisms/Languages-Modal/Index'

export const LanguagesSection: FC = () => {
	const IsMounted: boolean = UseIsMounted()
	if (!IsMounted) {
		return null
	}
	const MainLanguages: SkillsDatabase[] = [
		SkillsDatabase.JavaScript,
		SkillsDatabase.Python,
	]
	return (
		<>
			<HeadingThree Title='Languages' />
			<div className='Languages'>
				{MainLanguages.map((LanguageData, Index) => (
					<LanguagesModal key={Index} LanguageIdentifier={LanguageData} />
				))}
			</div>
		</>
	)
}