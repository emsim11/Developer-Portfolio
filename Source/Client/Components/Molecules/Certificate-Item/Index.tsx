import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
	BsArrowUpRightCircle,
	BsInfoCircle,
} from 'react-icons/bs'

import './Index.scss'
import { CERTIFICATE_PAGE } from '@/Constants/Pages'
import { Certificate } from '@/Interfaces/Certificate'
import { CertificatesDatabaseMap } from '@/Constants/Certificates'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { Tag } from '@/Components/Atoms/Tag/Index'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/Components/Atoms/Tooltip/Index'

interface CertificateItemProps {
	CertificateKey: string
}

export const CertificateItem: FC<CertificateItemProps> = ({ CertificateKey }) => {
	const BasePath: string = CERTIFICATE_PAGE.Path
	let CertificateData: Certificate = CertificatesDatabaseMap[CertificateKey]
	const CustomCertificatePage: string = `${BasePath}/${CertificateKey}`
	const IssuerCertificatePage: string = CertificateData.CertificateURL
	CertificateData = {
		...CertificateData,
		CertificateImage: `./Public/Content${BasePath}/${CertificateKey}`,
	}
	return (
		<div className='Certificate-Item'>
			{/* Certificate Image */}
			{CertificateData.CertificateImage && (
				<Link to={CustomCertificatePage}>
					<div className='Certificate-Item-Image-Container'>
						<AspectRatio ratio={4 / 3} className='Certificate-Item-Image-Ratio'>
							<img
								key={CertificateKey}
								src={CertificateData.CertificateImage}
								alt={`${CertificateData.Name} Certificate Image`}
								loading='lazy'
								className='Certificate-Item-Image-Container'
							/>
						</AspectRatio>
					</div>
				</Link>
			)}
			<div className='Certificate-Title'>
				{/* Certificate Title */}
				<Link to={CustomCertificatePage}>
					<h1 className='Certificate-Title-Header'>
						{CertificateData.Name}
					</h1>
				</Link>
				<div className='Certificate-Issuer'>
					<Tag>{CertificateData.Issuer}</Tag>
				</div>
				{/* Link To Credential Page */}
				<div className='Certificate-Credentials'>
					<Tooltip>
						<TooltipTrigger>
							<Link to={CustomCertificatePage}>
								<BsInfoCircle size={30} className='Certificate-Credentials-Icon' />
							</Link>
						</TooltipTrigger>
						<TooltipContent>
							<p>View Certificate Details</p>
						</TooltipContent>
					</Tooltip>
					{/* Link To Credential */}
					{CertificateData.CertificateURL && (
						<Tooltip>
							<TooltipTrigger>
								<Link to={IssuerCertificatePage} target='_blank'>
									<BsArrowUpRightCircle size={30} className='Certificate-Providers-Icon' />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>View On Certificate Provider's Site</p>
							</TooltipContent>
						</Tooltip>
					)}
				</div>
			</div>
		</div>
	)
}