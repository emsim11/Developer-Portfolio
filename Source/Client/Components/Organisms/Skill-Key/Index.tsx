import { FC } from 'react'

import './Index.scss'
import { Skill } from '@/Interfaces/Skill'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { SkillsDatabase } from '@/Enums/Skill'
import { PageNotFound } from '@/App/Error/Index'
import { FilterMaterialBySkill } from '@/Utilities/Materials'
import { MaterialKey, MaterialsDatabaseMap } from '@/Constants/Materials'
import { HeadingOne, HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { PageDescription } from '@/Components/Atoms/Page-Description/Index'
import { MaterialsList } from '../Materials-List/Index'
import { RelatedSkillsSection } from '../Related-Skills-Section/Index'

// export async function generateMetadata(
// 	{ params, searchParams }: ProjectPageProps,
// 	parent: ResolvingMetadata
//   ): Promise<Metadata> {
// 	const skillKey: string = params.skillKey;
// 	const skill: SkillInterface | undefined =
// 	  skillDatabaseMap[skillKey as SkillDatabaseKeys];

// 	if (!skill) {
// 	  notFound();
// 	}

// 	return {
// 	  title: `${developerName} - Skills: ${skill?.name}`,
// 	  description: skill.name,
// 	};
//   }

//   /**
//    * Generates the static paths for the skills.
//    * These are then used to pre-render the projects pages.
//    * This Incremental Static Regeneration allows the projects to be displayed without a server.
//    * This improves the performance of the website.
//    *
//    * @returns A list of all the keys for the static pages that need to be generated.
//    * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
//    */
//   export const generateStaticParams = async () => {
// 	return skillDatabaseKeys.map((skillKey) => ({ skillKey }));
//   };

interface SkillPageProps {
	Params: { SkillKey: string }
	SearchParams: { [Key: string]: string | string[] | undefined }
}

export const SkillPage: FC<SkillPageProps> = ({ Params }) => {
	const SkillKey: string = Params.SkillKey
	const SkillData: Skill = SkillsDatabaseMap[SkillKey as SkillsDatabase]
	if (!SkillData) {
		return (
			<PageNotFound />
		)
	}
	const FilteredMaterials: string[] = FilterMaterialBySkill(
		SkillKey as SkillsDatabase,
		MaterialKey,
		MaterialsDatabaseMap,
	)
	return (
		<main>
			<div className='Skill-Page'>
				<h1>{SkillData.Name}</h1>
				<h2>Skills For Certificate:</h2>
				{SkillData?.RelatedSkills?.map((Skill) => (
					<p key={Skill}>{SkillsDatabaseMap[Skill].Name}</p>
				))}
			</div>
			<div>
				<HeadingOne Title={SkillData.Name} />
				<PageDescription
					Description={`
						This page displays all of the materials related to ${SkillData.Name}.
						This may include blogs, certificates, projects, university modules, and work experience,
						along with sub-skills.
					`}
				/>
				{/* Material Section */}
				<div className='Skill-Page-Materials' />
				<HeadingTwo Title='Material' />
				<MaterialsList MaterialKeys={FilteredMaterials} IsCollapsible={false} />

				{/* Skills Section */}
				<RelatedSkillsSection SkillKey={SkillKey as SkillsDatabase} />
			</div>
		</main>
	)
}