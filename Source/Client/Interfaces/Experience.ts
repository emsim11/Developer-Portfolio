import { RolesDatabase } from '@/Enums/Role'

export interface Company {
	Name: string
	Website?: string
	Location: string
	Logo?: string
	Positions: RolesDatabase[]
}