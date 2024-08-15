import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRightCircle as UpArrow} from 'react-icons/bs'

import './Index.scss'
import { Certificate } from '@/Interfaces/Certificate'
import { CertificatesDatabaseMap } from '@/Constants/Certificates'
import { PageNotFound } from '@/App/Error/Index'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { CategorizeAndGroupSkills, FilterSkillsByType } from '@/Utilities/Skills'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { CERTIFICATE_PAGE } from '@/Constants/Pages'
import { HeadingThree, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { AspectRatio } from '@/Components/Atoms/Aspect-Ratio/Index'
import { StringList } from '@/Components/Atoms/String-List/Index'
import { SkillsTableSection } from '@/Components/Molecules/Skills-Table-Section/Index'
import { Tag } from '@/Components/Atoms/Tag/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { MaterialsList } from '../Materials-List/Index'

/**
 * Generates the metadata for the certificates page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the certificates page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
// export async function generateMetadata(
//   { params, searchParams }: CertificatesPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // Read route params
//   const certificateKey: string = params.certificateKey;
//   const certificate: CertificateInterface =
//     certificateDatabaseMap[certificateKey];

//   if (!certificate) {
//     notFound();
//   }

//   // Create metadata based on the certificate details
//   return {
//     title: `${developerName} - Certificates: ${certificate?.name}`,
//     description: certificate?.description,
//     category: `${CERTIFICATES_PAGE.label}`,
//     creator: developerName,
//   };
// }

// /**
//  * Generates the metadata for the skill page.
//  * This includes the title and description of the page.
//  * This is used for SEO purposes.
//  *
//  * @param props The props for the skill page.
//  * @param parent The parent metadata that is being resolved.
//  * @returns The metadata for the skill page.
//  * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
//  */
// export const generateStaticParams = async () => {
//   return Object.keys(certificateDatabaseMap).map((certificateKey) => ({
//     certificateKey,
//   }));
// };

interface CertificatePageProps {
  	Params: { CertificateKey: string }
  	SearchParams: { [Key: string]: string | string[] | undefined }
};

export const CertificatePage: FC<CertificatePageProps> = ({ Params }) => {
	const CertificateKey: string = Params.CertificateKey
	const CertificateData: Certificate = CertificatesDatabaseMap[CertificateKey]
	if (!CertificateData) {
		return (
			<PageNotFound />
		)
	}
	const Technologies: SkillsDatabase[] = FilterSkillsByType(
		CertificateData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technology,
	)
	const GeneralSkills: SkillsDatabase[] = FilterSkillsByType(
		CertificateData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technical,
	)
	const SoftSkills: SkillsDatabase[] = FilterSkillsByType(
		CertificateData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Soft,
	)
	/* Simplified Grouping Of Skill Types For Certificates */
	const AllGroupedSkills: GroupedSkillsCategory[] = [
		CategorizeAndGroupSkills(
			Technologies,
			SkillsDatabaseMap,
			SkillTypes.Technology,
			'Technologies',
		),
		CategorizeAndGroupSkills(
			GeneralSkills,
			SkillsDatabaseMap,
			SkillTypes.Technical,
			'Technical Skills',
		),
		CategorizeAndGroupSkills(
			SoftSkills,
			SkillsDatabaseMap,
			SkillTypes.Soft,
			'Soft Skills',
		),
	]
	const CertificateImage = `/Content${CERTIFICATE_PAGE.Path}/${CertificateKey}`
	return (
		<main>
			<div className='Certificate-Page'>
				<h1>{CertificateData.Name}</h1>
				<h2>{CertificateData.Description}</h2>
				<h3>Skills For Certificate:</h3>
				{CertificateData.Skills.map((Skill) => (
					<p key={Skill}>{SkillsDatabaseMap[Skill]?.Name}</p>
				))}
			</div>
			<div className='Certificate'>
				<HeadingTwo Title={CertificateData.Name} />
				<div className=''>
					{/* Certificate Image */}
					{CertificateImage && (
						<div className='Certificate-Image-Container'>
							<AspectRatio ratio={4 /3} className='Certificate-Image-Aspect-Ratio'>
								<img
									src={CertificateImage}
									alt={`${CertificateData.Name} Certificate Image`}
									className='Certificate-Image'
								/>
							</AspectRatio>
						</div>
					)}
					{/* Credential ID */}
					{/* <div className='Certificate-Credentials'>
						<p className='Certificate-Credentials-Text'>{CertificateKey}</p>
					</div> */}
					<div className='Certificate-Data'>
						{/* Certificate Description */}
						{CertificateData.Description && (
							<div className='Certificate-Description'>
								<div className='Certificate-Description-Title'>
									<HeadingThree Title='Description' />
								</div>
								<p className='Certificate-Description-Text'>{CertificateData.Description}</p>
							</div>
						)}
						<div>
							{/* Learning Outcomes */}
							{CertificateData.LearningOutcomes && (
								<>
									<div className='Certificate-Learning-Outcomes'>
										<HeadingThree Title='Learning Objectives' />
									</div>
									<StringList Items={CertificateData.LearningOutcomes} />
								</>
							)}
						</div>
						<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
						<div className='Certificate-Issuer'>
							<div>
								<div className='Certificate-Description-Title'>
									<HeadingThree Title='Certificate Issuer' />
								</div>
								<div className='Certificate-Issuer-Tag'>
									<Tag>{CertificateData.Issuer}</Tag>
								</div>
							</div>
							<div>
								<div className='Certificate-Description-Title'>
									<HeadingThree Title='Links' />
								</div>

								{/* Links */}
								<div className='Certificate-Links'>
									{/* Issuer Page */}
									{CertificateData.CertificateURL && (
										<Link
											to={CertificateData.CertificateURL}
											target='_blank'
											className='Certificate-Link'
										>
											<Button Style='Primary'>
												<div className='Certificate-Link-Container'>
													<UpArrow size={26} />
													<p>Issuer Page</p>
												</div>
											</Button>
										</Link>
									)}
								</div>
							</div>
						</div>
						{CertificateData.RelatedMaterials && CertificateData.RelatedMaterials.length > 0 && (
							<>
								{/* Divider */}
								<div className='Certificate-Divider' />
								<MaterialsList MaterialKeys={CertificateData.RelatedMaterials} />
							</>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}