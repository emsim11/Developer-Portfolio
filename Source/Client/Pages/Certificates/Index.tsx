import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Index.scss'
import { Metadata } from '@/Interfaces/Layout'
import { DeveloperName } from '@/Constants/Developer'
import { CERTIFICATE_PAGE } from '@/Constants/Pages'
import { CertificatesDatabaseMap } from '@/Constants/Certificates'
import { HeadingOne } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { CertificatesView } from '@/Components/Molecules/Certificates-View/Index'

const CertificatesMetadata: Metadata = {
	Title: `${DeveloperName} - ${CERTIFICATE_PAGE.Label}`,
	Description: CERTIFICATE_PAGE.Description,
	Category: `${CERTIFICATE_PAGE.Label}`,
	Creator: DeveloperName,
	Keywords: Object.values(CertificatesDatabaseMap).map((Certificate) => Certificate.Name),
}

export const Certificates: FC = () => {
	const Keywords = Array.isArray(CertificatesMetadata.Keywords) ? CertificatesMetadata.Keywords.join(', ') : CertificatesMetadata.Keywords
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{CertificatesMetadata.Title}</title>
					<meta name='Description' content={CertificatesMetadata.Description} />
					<meta name='Category' content={CertificatesMetadata.Category} />
					<meta name='Creator' content={CertificatesMetadata.Creator} />
					<meta name='Keywords' content={Keywords} />
				</Helmet>
			</HelmetProvider>
			<main>
				{/* Invisible Div For SEO */}
				<div className='Certificates-Page'>
					<h1>Certificates & Online Courses:</h1>
					<ul>
						{Object.values(CertificatesDatabaseMap).map((Certificate) => (
							<li key={Certificate.Name}>
								{Certificate.Name}: {Certificate.Description}
							</li>
						))}
					</ul>
				</div>
				<section id='Certificates' className='Certificates-Page-Container'>
						<div className='Certificates'>
							<HeadingOne Title={CERTIFICATE_PAGE.Label} />
							<PageDescription Description={CERTIFICATE_PAGE.Description} />
							<CertificatesView />
						</div>
				</section>
			</main>
		</>
	)
}