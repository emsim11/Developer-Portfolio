import { CertificateCategories, CertificateIssuers } from '@/Enums/Certificate'
import { Material } from './Material'

export interface Certificate extends Material {
	Description?: string
	Issuer: CertificateIssuers
	Category: CertificateCategories
	CertificateURL: string
	CertificateImage?: string
	LearningOutcomes?: string[]
}