import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { BlogsDatabaseMap } from '@/Constants/Blogs'
import { BLOG_PAGE } from '@/Constants/Pages'
import { Blog } from '@/Interfaces/Blog'

interface BlogItemProps {
	BlogKey: string
}

export const BlogItem: FC<BlogItemProps> = ({ BlogKey }) => {
	const BasePath: string = BLOG_PAGE.Path
	const BlogData: Blog = BlogsDatabaseMap[BlogKey]
	return (
		<>
			<Link to={`${BasePath}/${BlogKey}`}>
				<div className='Blog-Item'>
					<h2 className='Blog-Item-Title'>
						{BlogData.Name}
					</h2>
					<p className='Blog-Item-Subtitle'>
						{BlogData.Subtitle}
					</p>
				</div>
			</Link>
		</>
	)
}