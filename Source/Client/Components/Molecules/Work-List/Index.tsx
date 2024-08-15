import { FC } from 'react'

import './Index.scss'
import { MaterialsListProps } from '@/Interfaces/Material';
import { StringToSlug } from '@/Utilities/Materials';
import { HeadingTwo } from '@/Components/Atoms/Headings/Index';
import { WorkItem } from '../Work-Item/Index';

export const WorkList: FC<MaterialsListProps> = ({ GroupedMaterials: GroupedRoles }) => {
	return (
		<div className='Material-Page-Wrapper'>
			{GroupedRoles.length > 0 ? (
				GroupedRoles.map((Group) =>
					Group.GroupName !== 'All' && (
						<section key={Group.GroupName} id={StringToSlug(Group.GroupName)}>
							<div className='Work-List'>
								{GroupedRoles.length > 1 && (
									<>
										<div className='Work-List-Title' />
										<HeadingTwo Title={Group.GroupName} />
									</>
								)}
								<div className='Work-List-Container'>
									{Group.MaterialKeys.map((RoleKey) => (
										<div key={RoleKey} className='Work-List-Role'>
											<WorkItem RoleKey={RoleKey} />
										</div>
									))}
								</div>
							</div>
						</section>
					))
				) : (
					<div className='Work-List-Nothing-Found'>
						<h2 className='Work-List-Nothing-Found-Title'>
							No Matching Jobs
						</h2>
					</div>
				)}
		</div>
	)
}