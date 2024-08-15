import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { MaterialGroup } from '@/Interfaces/Material'
import { EDUCATION_PAGE } from '@/Constants/Pages'
import { HeadingFour, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { Grid } from '@/Components/Atoms/Grid/Index'
import { FindCourseKeyForModule } from '@/Utilities/Materials'
import { CoursesDatabaseMap } from '@/Constants/Courses'
import { Tag } from '@/Components/Atoms/Tag/Index'
import { ModulesDatabaseMap } from '@/Constants/Modules'
import { ModulesDatabase } from '@/Enums/Module'

interface ModulesListProps {
	GroupedMaterials: MaterialGroup[]
	HeadingSize?: 'HeadingTwo' | 'HeadingFour'
}

export const ModulesList: FC<ModulesListProps> = ({
	GroupedMaterials: GroupedModules,
	HeadingSize = 'HeadingTwo',
}) => {
	const BasePath: string = EDUCATION_PAGE.Path
	const HeadingComponent = HeadingSize === 'HeadingTwo' ? HeadingTwo : HeadingFour
	return (
		<div>
			{GroupedModules.map((Group, Index) => (
				<div key={Index} className='Modules-List'>
					{GroupedModules.length > 1 && (
						<HeadingComponent Title={`University ${Group.GroupName}`} />
					)}
					<Grid
						Gap={1}
						Items={Group.MaterialKeys.map((ModuleKey, Index) => {
							const CourseKey = FindCourseKeyForModule(
								ModuleKey as ModulesDatabase,
								CoursesDatabaseMap,
							)
							return (
								<div key={Index} className='Modules-List-Grid'>
									<Link key={Index} to={`${BasePath}/${CourseKey}/${ModuleKey}`}>
										<Tag HasHover>{ModulesDatabaseMap[ModuleKey].Name}</Tag>
									</Link>
								</div>
							)
						})}
					/>
				</div>
			))}
		</div>
	)
}