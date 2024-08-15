import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	BsArrowUpRightCircle as UpArrow,
	BsGithub as GitHub,
	BsInfoCircle as Info,
} from 'react-icons/bs'

import './Index.scss'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/Components/Atoms/Tooltip/Index'
import { PROJECT_PAGE } from '@/Constants/Pages'
import { Project } from '@/Interfaces/Project'
import { ProjectsDatabaseMap } from '@/Constants/Projects'


interface ProjectItemProps {
	ProjectKey: string
}

export const ProjectItem: FC<ProjectItemProps> = ({ ProjectKey }) => {
	const BasePath: string = PROJECT_PAGE.Path
	const ProjectData: Project = ProjectsDatabaseMap[ProjectKey]
	console.log(`${BasePath}/${ProjectKey}`)
	console.log(ProjectKey)
	return (
		<div className='Project'>
			<div className='Project-Container'>
				{/* Project Cover */}
				{ProjectData.ThumbnailImage ? (
					<div className='Project-Cover'>
						<Link to={`${BasePath}/${ProjectKey}`}>
							<AspectRatio ratio={8 / 5} className='Project-Aspect-Ratio'>
								<img
									src={ProjectData.ThumbnailImage}
									key={ProjectData.ThumbnailImage}
									alt={`${ProjectData.Name} Cover Image`}
									className='Project-Cover-Image'
								/>
							</AspectRatio>
						</Link>
					</div>
				) : (
					<div>
						<div className='Project-No-Cover' />
					</div>
				)}
				<div className={`Project-Cover-Container ${ProjectData.ThumbnailImage ? 'Project-Image' : 'Project-Image-Full'}`}>
					{/* Project Title */}
					<Link to={`${BasePath}/${ProjectKey}`}>
						<h1 className='Project-Title'>
							{ProjectData.Name}
						</h1>
					</Link>
					{/* Project Description */}
					<p className='Project-Description'>
						{ProjectData.Description}
					</p>
					{/* Project Buttons */}
					<div className='Project-Buttons'>
						{/* Project Page */}
						<Tooltip>
							<TooltipTrigger>
								<Link to={`${BasePath}/${ProjectKey}`}>
									<Info size={30} className='Project-Info-Icon' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>View Project Details</p>
							</TooltipContent>
						</Tooltip>
						{/* Repository */}
						{ProjectData.RepositoryURL && (
							<Tooltip>
								<TooltipTrigger>
									<Link to={ProjectData.RepositoryURL} target='_blank'>
										<GitHub size={30} className='Project-Info-Icon' />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>GitHub Repository For Project</p>
								</TooltipContent>
							</Tooltip>
						)}
						{/* Project Website */}
						{ProjectData.DeploymentURL && (
							<Tooltip>
								<TooltipTrigger>
									<Link to={ProjectData.DeploymentURL} target='_blank'>
										<UpArrow
											size={30}
											className='Project-Info-Icon'
										/>
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>Project Website</p>
								</TooltipContent>
							</Tooltip>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}