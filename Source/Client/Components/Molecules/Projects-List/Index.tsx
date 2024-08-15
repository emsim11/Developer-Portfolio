import { FC } from 'react'

import './Index.scss'
import { MaterialsListProps } from '@/Interfaces/Material'
import { StringToSlug } from '@/Utilities/Materials'
import { HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { ProjectItem } from '../Project-Item/Index'

export const ProjectsList: FC<MaterialsListProps> = ({
	GroupedMaterials: GroupedProjects,
}) => {
	return (
		<div className='Material-Page-Wrapper'>
			{GroupedProjects.length > 0 ? (
				GroupedProjects.map((Group) => Group.GroupName !== 'All' && (
					<section key={Group.GroupName} id={StringToSlug(Group.GroupName)}>
						<div className='Projects-List'>
							{GroupedProjects.length > 1 && (
								<>
									<div className='Projects-List-Container' />
									<HeadingTwo Title={Group.GroupName} />
								</>
							)}
							<div className='Projects-List-Item'>
								{Group.MaterialKeys.map((ProjectKey) => (
									<div key={ProjectKey} className='Project-List-Item-Key'>
										<ProjectItem ProjectKey={ProjectKey} />
									</div>
								))}
							</div>
						</div>
					</section>
				))
			) : (
				<div className='Projects-List-Nothing-Found'>
					<h2 className='Projects-List-Nothing-Found-Title'>
						No Matching Projects
					</h2>
				</div>
			)}
		</div>
	)
}