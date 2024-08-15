import { FC } from 'react'

import './Index.scss'
import { StringToSlug } from '@/Utilities/Materials'
import { MaterialsListProps } from '@/Interfaces/Material'
import { HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { Grid } from '@/Components/Atoms/Grid/Index'
import { CertificateItem } from '../Certificate-Item/Index'

export const CertificatesList: FC<MaterialsListProps> = ({ GroupedMaterials: GroupedCertificates }) => {
	return (
		<div className='Material-Page-Wrapper'>
			{GroupedCertificates.length > 0 ? (
				GroupedCertificates.map((Group) => Group.GroupName !== 'All' && (
					<section key={Group.GroupName} id={StringToSlug(Group.GroupName)}>
						<div className='Certificates-List'>
							{GroupedCertificates.length > 1 && (
								<>
									<div className='Certificates-List-Header' />
									<HeadingTwo Title={Group.GroupName} />
								</>
							)}
							<Grid
								Items={Group.MaterialKeys.map((CertificateKey) => (
									<div className='Certificates-List-Grid' key={CertificateKey}>
										<CertificateItem CertificateKey={CertificateKey} />
									</div>
								))}
							/>
						</div>
					</section>
				))
			) : (
				<div className='Certificates-List-Empty'>
					<h2 className='Certificates-List-Empty-Header'>No Matching Certificates</h2>
				</div>
			)}
		</div>
	)
}