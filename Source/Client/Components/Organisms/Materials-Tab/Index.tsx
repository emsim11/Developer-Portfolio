import { ComponentType, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import './Index.scss'
import { MaterialTypes } from '@/Enums/Material'
import { Database } from '@/Interfaces/Layout'
import { Material, MaterialGroup, MaterialsListProps } from '@/Interfaces/Material'
import { BlogsDatabaseKeys, BlogsDatabaseMap } from '@/Constants/Blogs'
import { BLOG_PAGE, CERTIFICATE_PAGE, EXPERIENCE_PAGE, PROJECT_PAGE } from '@/Constants/Pages'
import { CertificatesDatabaseKeys, CertificatesDatabaseMap } from '@/Constants/Certificates'
import { CertificatesList } from '@/Components/Molecules/Certificates-List/Index'
import { ProjectsDatabaseKeys, ProjectsDatabaseMap } from '@/Constants/Projects'
import { ProjectsList } from '@/Components/Molecules/Projects-List/Index'
import { ModulesDatabaseKeys, ModulesDatabaseMap } from '@/Constants/Modules'
import { RolesDatabaseKeys, RolesDatabaseMap } from '@/Constants/Roles'
import { GroupMaterialsByMaterialType } from '@/Utilities/Materials'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/Atoms/Tabs/Index'
import { Button } from '@/Components/Atoms/Button/Index'
import { MaterialTabsProps } from '../Materials-List/Index'
import { BlogsList } from '@/Components/Molecules/Blogs-List/Index'
import { ModulesList } from '@/Components/Molecules/Modules-List/Index'
import { WorkList } from '@/Components/Molecules/Work-List/Index'

interface MaterialSection {
	Name: MaterialTypes
	Materials: string[]
	MaterialHashMap: Database<Material>
	BasePath?: string
	ListComponent: ComponentType<MaterialsListProps>
}

export const MaterialTab: FC<MaterialTabsProps> = ({ MaterialKeys }) => {
	const [SelectedTab, SetSelectedTab] = useState('')
	if (!MaterialKeys || MaterialKeys.length === 0) {
		return null
	}
	const Sections: MaterialSection[] = [
		{
			/* Blogs */
			Name: MaterialTypes.Blogs,
			Materials: BlogsDatabaseKeys,
			MaterialHashMap: BlogsDatabaseMap,
			BasePath: BLOG_PAGE.Path,
			ListComponent: BlogsList,
		},
		{
			/* Certificates */
			Name: MaterialTypes.Certificates,
			Materials: CertificatesDatabaseKeys,
			MaterialHashMap: CertificatesDatabaseMap,
			BasePath: CERTIFICATE_PAGE.Path,
			ListComponent: CertificatesList,
		},
		{
			/* Projects */
			Name: MaterialTypes.Projects,
			Materials: ProjectsDatabaseKeys,
			MaterialHashMap: ProjectsDatabaseMap,
			BasePath: PROJECT_PAGE.Path,
			ListComponent: ProjectsList,
		},
		{
			/* University Modules */
			Name: MaterialTypes.UniversityModules,
			Materials: ModulesDatabaseKeys,
			MaterialHashMap: ModulesDatabaseMap,
			ListComponent: ModulesList,
		},
		{
			/* Work Experiences */
			Name: MaterialTypes.WorkExperiences,
			Materials: RolesDatabaseKeys,
			MaterialHashMap: RolesDatabaseMap,
			BasePath: EXPERIENCE_PAGE.Path,
			ListComponent: WorkList,
		},
	]
	/* Filter Out Sections With No Materials */
	const NonEmptySections: MaterialSection[] = Sections.filter(({ Materials, MaterialHashMap, Name }) => {
		const GroupedMaterials: MaterialGroup[] = GroupMaterialsByMaterialType(
			MaterialKeys,
			MaterialHashMap,
			Name,
		)
		return (GroupedMaterials[0] && GroupedMaterials[0].MaterialKeys.length > 0)
	})
	/* Set Default Tab If None Is Selected */
	if (!SelectedTab && NonEmptySections.length > 0) {
		SetSelectedTab(NonEmptySections[0].Name)
	}
	return (
		<Tabs
			value={SelectedTab}
			defaultValue={SelectedTab}
			onValueChange={SetSelectedTab}
			className='Material-Tab'
		>
			<TabsList className='Material-Tabs-List'>
				{NonEmptySections.map(({ Name }) => (
					<TabsTrigger
						key={Name}
						value={Name}
						className='Material-Tabs-Trigger'
					>
						{Name}
					</TabsTrigger>
				))}
			</TabsList>
			{NonEmptySections.map(({ Name, MaterialHashMap, ListComponent, BasePath }) => {
				const GroupedMaterials = GroupMaterialsByMaterialType(
					MaterialKeys,
					MaterialHashMap,
					Name,
				)
				return (
					<TabsContent key={Name} value={Name}>
						<div className='Material-Tabs-Content'>
							<ListComponent GroupedMaterials={GroupedMaterials} />
							{BasePath && (
								<div className='Material-Tabs-Link'>
									<Link to={BasePath}>
										<Button Style='Outline'>
											{`View All ${Name}`}
										</Button>
									</Link>
								</div>
							)}
						</div>
					</TabsContent>
				)
			})}
		</Tabs>
	)
}