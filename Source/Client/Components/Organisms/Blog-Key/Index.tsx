import { FC, useEffect, useState } from 'react'

import './Index.scss'
import { BLOG_PAGE } from '@/Constants/Pages'
import { Blog } from '@/Interfaces/Blog'
import { BlogsDatabaseMap } from '@/Constants/Blogs'
import { GetMarkdownFromFileSystem } from '@/Utilities/Media'
import { SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { CategorizeAndGroupSkills, FilterSkillsByType } from '@/Utilities/Skills'
import { SkillsDatabaseMap } from '@/Constants/Skills'
import { GroupedSkillsCategory } from '@/Interfaces/Skill'
import { HeadingTwo } from '@/Components/Atoms/Headings/Index'
import { Reader } from '@/Components/Atoms/Reader/Index'
import { SkillsTableSection } from '@/Components/Molecules/Skills-Table-Section/Index'
import { MaterialsList } from '../Materials-List/Index'

// export async function generateMetadata(
//   { params, searchParams }: BlogPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const blogKey: string = params.blogKey;
//   const blog: BlogInterface = blogsDatabaseMap[blogKey];

//   if (!blog) {
//     notFound();
//   }

//   return {
//     title: `${developerName} - Blogs: ${blog?.name}`,
//     description: blog?.subtitle,
//     category: `${BLOG_PAGE.label}`,
//     creator: developerName,
//   };
// }

// /**
//  * Generates the metadata for the blogs page.
//  * This includes the title and description of the page.
//  * This is used for SEO purposes.
//  *
//  * @param props The props for the skill page.
//  * @param parent The parent metadata that is being resolved.
//  * @returns The metadata for the blogs page.
//  * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
//  */
// export const generateStaticParams = async () => {
//   return Object.keys(blogsDatabaseMap).map((blogKey) => ({
//     blogKey,
//   }));
// };

interface BlogPageProps {
	Params: { BlogKey: string }
	SearchParams: { [Key: string]: string | string[] | undefined }
}

export const BlogPage: FC<BlogPageProps> = ({ Params }) => {
	const BlogKey: string = Params.BlogKey
	const BasePath: string = BLOG_PAGE.Path
	const BlogData: Blog = BlogsDatabaseMap[BlogKey]
	const [BlogContent, SetBlogContent] = useState<string | undefined>(undefined)
	useEffect(() => {
		const FetchBlogContent = async () => {
			const Content = await GetMarkdownFromFileSystem(`/Content${BasePath}/${BlogKey}/Blog.md`)
			SetBlogContent(Content || 'This is a placeholder for the "Blog" text.')
		}
		FetchBlogContent()
	}, [])
	console.log(BlogContent?.toString())
	const Technologies: SkillsDatabase[] = FilterSkillsByType(
		BlogData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technology,
	)
	const GeneralSkills: SkillsDatabase[] = FilterSkillsByType(
		BlogData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Technical,
	)
	const SoftSkills: SkillsDatabase[] = FilterSkillsByType(
		BlogData.Skills,
		SkillsDatabaseMap,
		SkillTypes.Soft,
	)
	/* Use New Function To Group All Skill Types */
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
	return (
		<>
			<main>
				<div className='Blog-Page'>
					<h1>{BlogData.Name}</h1>
					<h2>{BlogData.Subtitle}</h2>
					<h3>Skills For Blog:</h3>
					{BlogData.Skills.map((Skill) => (
						<p key={Skill}>{SkillsDatabaseMap[Skill]?.Name}</p>
					))}
				</div>
				<div>
					<div className='Blog-Page-Content'>
						<HeadingTwo Title={BlogData?.Name} />
						<h3 className='Blog-Page-Content-Subtitle'>
							{BlogData?.Subtitle}
						</h3>
					</div>
					<Reader Content={BlogContent} Size='Large-Prose' />
					<div className='Blog-Page-Content-Text' />
					<div className='Blog-Page-Skills'>
						<SkillsTableSection AllGroupedSkills={AllGroupedSkills} />
					</div>
					{BlogData.RelatedMaterials && BlogData.RelatedMaterials.length > 0 && (
						<>
							<MaterialsList MaterialKeys={BlogData.RelatedMaterials} />
						</>
					)}
				</div>
			</main>
		</>
	)
}