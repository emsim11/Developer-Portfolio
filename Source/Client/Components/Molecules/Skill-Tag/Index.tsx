import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Tag } from '../../Atoms/Tag/Index'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/Components/Atoms/Tooltip/Index'
import { MaterialsDatabaseMap } from '@/Constants/Materials'
import { Skill } from '@/Interfaces/Skill'
import { SkillsDatabase } from '@/Enums/Skill'
import { IsSkillAssociatedWithMaterial } from '@/Utilities/Materials'

interface SkillTagProps {
	SkillKey: SkillsDatabase
	Hide?: boolean
}

export const SkillTag: FC<SkillTagProps> = ({ SkillKey, Hide }) => {
	const { pathname } = useLocation()
	const CurrentPath: string = pathname
	const Skill: Skill = SkillsDatabase[SkillKey]
	const HasMaterial: ConstrainBoolean = IsSkillAssociatedWithMaterial(
		SkillKey,
		MaterialsDatabaseMap,
	)
	if (Hide || !Skill) {
		return <></>
	}
	const SkillLink: string = HasMaterial ? `/Skills/${SkillKey}` : CurrentPath
	return HasMaterial ? (
		<Tooltip>
			<TooltipTrigger>
				<Link to={SkillLink}>
					<Tag HasHover={true}>{Skill.Name}</Tag>
				</Link>
			</TooltipTrigger>
			<TooltipContent>
				<p>{`Navigate To All Material Related To ${Skill.Name}`}</p>
			</TooltipContent>
		</Tooltip>
	) : (
		<Tag HasHover={false}>{Skill.Name}</Tag>
	)
}