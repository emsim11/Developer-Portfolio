import { FC } from 'react'

import './Index.scss'
import { MaterialsListProps } from '@/Interfaces/Material';
import { StringToSlug } from '@/Utilities/Materials';
import { HeadingTwo } from '@/Components/Atoms/Headings/Index';
import { Grid } from '@/Components/Atoms/Grid/Index';
import { BlogItem } from '@/Components/Atoms/Blog-Item/Index';

export const BlogsList: FC<MaterialsListProps> = ({
	GroupedMaterials: GroupedBlogs,
}) => {
	return (
		<div className='Material-Page-Wrapper'>
			{GroupedBlogs.length > 0 ? (
				GroupedBlogs.map((Group) =>
					Group.GroupName !== 'All' && (
						<section key={Group.GroupName} id={StringToSlug(Group.GroupName)}>
							<div className='Blogs-List'>
								{GroupedBlogs.length > 1 && (
									<>
										<div className='Blogs-List-Title' />
										<HeadingTwo Title={Group.GroupName} />
									</>
								)}
								<Grid
									Items={Group.MaterialKeys.map((BlogKey) => (
										<div key={BlogKey} className='Blogs-List-Grid'>
											<BlogItem key={BlogKey} BlogKey={BlogKey} />
										</div>
									))}
								/>
							</div>
						</section>
					)
				)
			) : (
				<div className='Blogs-List-None-Found'>
					<h2 className='Blogs-List-None-Found-Title'>
						No Matching Blogs
					</h2>
				</div>
			)}
		</div>
	)
}