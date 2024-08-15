import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { CoursesDatabaseMap } from '@/Constants/Courses'
import { EDUCATION_PAGE } from '@/Constants/Pages'
import { Course } from '@/Interfaces/Course'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { Tag } from '@/Components/Atoms/Tag/Index'

interface CourseItemProps {
	CourseKey: string
}

export const CourseItem: FC<CourseItemProps> = ({ CourseKey }) => {
	const BasePath: string = EDUCATION_PAGE.Path
	let CourseData: Course = CoursesDatabaseMap[CourseKey]
	CourseData = {
		...CourseData,
		Certificate: `${BasePath}/${CourseKey}.pdf`,
	}
	return (
		<div className='Course-Item'>
			{/* Certificate Image */}
			{CourseData.Certificate && (
				<Link to={`Education/${CourseKey}`}>
					<div className='Course-Item-Image-Container'>
						<AspectRatio ratio={1 / 1.4} className='Course-Item-Aspect-Ratio'>
							<img
								key={CourseKey}
								src={CourseData.Certificate}
								alt={`${CourseData.Name} Certificate Image`}
								loading='lazy'
								className='Course-Item-Image'
							/>
						</AspectRatio>
					</div>
				</Link>
			)}
			<div className='Course-Item-Certificate-Info'>
				{/* Certificate Title */}
				<Link to={`Education/${CourseKey}`}>
					<h1 className='Course-Item-Certificate-Title'>
						{CourseData.Name}
					</h1>
				</Link>
				<p className='Course-Item-Certificate-Grade'>
					{CourseData.Grade}
				</p>
				<div className='Course-Item-Certificate-University'>
					<Tag>{CourseData.University}</Tag>
				</div>
			</div>
		</div>
	)
}