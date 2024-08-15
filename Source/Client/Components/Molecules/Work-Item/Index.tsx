import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	BsArrowUpRightCircle as UpArrow,
	BsInfoCircle as Info
} from 'react-icons/bs'

import './Index.scss'
import { EXPERIENCE_PAGE } from '@/Constants/Pages'
import { Role } from '@/Interfaces/Role'
import { Company } from '@/Interfaces/Experience'
import { CompaniesDatabaseMap } from '@/Constants/Experiences'
import { RolesDatabaseMap } from '@/Constants/Roles'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/Components/Atoms/Tooltip/Index'

interface WorkItemProps {
	RoleKey: string
}

export const WorkItem: FC<WorkItemProps> = ({ RoleKey }) => {
	const BasePath: string = EXPERIENCE_PAGE.Path
	const RoleData: Role = RolesDatabaseMap[RoleKey]
	const CompanyData: Company = CompaniesDatabaseMap[RoleData.Company]
	const RolePage: string = `${BasePath}/${RoleKey}`
	return (
		<div className='Work-Item'>
			{/* Logo */}
			<div className='Work-Item-Company'>
				{CompanyData.Logo && (
					<div className='Work-Item-Company-Link'>
						<Link to={RolePage}>
							<AspectRatio ratio={1 / 1} className='Work-Item-Aspect-Ratio'>
								<img
									src={CompanyData.Logo}
									alt={`Logo For ${CompanyData.Name}`}
									loading='eager'
									className='Work-Item-Company-Logo'
								/>
							</AspectRatio>
						</Link>
					</div>
				)}
			</div>
			{/* Details */}
			<div className='Work-Item-Details'>
				<Link to={RolePage}>
					<h2 className='Work-Item-Title'>
						{RoleData.Name}
					</h2>
				</Link>
				<div className='Work-Item-Website'>
					{CompanyData.Website ? (
						<Link
							to={CompanyData.Website}
							target='_blank'
							className='Work-Item-Website-Link'
						>
							{CompanyData.Name}
						</Link>
					) : (
						<span>{CompanyData.Name}</span>
					)}
					<span>{CompanyData.Location}</span>
				</div>
				<div className='Work-Item-Info'>
					<p className='Work-Item-Dates'>{`${RoleData.StartDate} - ${RoleData.EndDate}`}</p>
					<p className='Work-Item-Role-Type'>{RoleData.Type}</p>
				</div>
				<div className='Work-Item-Credentials'>
					{/* Link to Credential Page */}
					<Tooltip>
						<TooltipTrigger>
							<Link to={RolePage}>
								<Info size={30} className='Work-Item-Info-Icon' />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>View Role Details</p>
						</TooltipContent>
					</Tooltip>
					{/* Link To Credential */}
					{CompanyData.Website && (
						<Tooltip>
							<TooltipTrigger>
								<Link to={CompanyData.Website} target='_blank'>
									<UpArrow size={30} className='Work-Item-Arrow-Icon' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Navigate To Company Website</p>
							</TooltipContent>
						</Tooltip>
					)}
				</div>
			</div>
		</div>
	)
}