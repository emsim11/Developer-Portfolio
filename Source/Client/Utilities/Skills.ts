import { GroupByOptions, SkillCategories, SkillsDatabase, SkillTypes } from "@/Enums/Skill"
import { Database } from "@/Interfaces/Layout"
import { GroupedSkillsCategory, Skill, SkillsCategory } from "@/Interfaces/Skill"

/* FILTERS */
export const FilterCategoriesFromSkills = (
	SkillsDatabase: Database<Skill>,
	IgnoredCategories: SkillCategories[],
): SkillsDatabase[] => {
	return Object.keys(SkillsDatabase).filter((Skill) => {
		const FilteredSkill: Skill = SkillsDatabase[Skill]
		return !IgnoredCategories.includes(FilteredSkill.Category)
	}) as SkillsDatabase[]
}

export const FilterNonEmptySkillCategories = (
	GroupedSkills: GroupedSkillsCategory[],
): GroupedSkillsCategory[] => {
	return GroupedSkills.filter(
		({ SkillCategories }) => SkillCategories.length > 0
	)
}

export const FilterSkillsByCategory = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
	SpecificCategory: SkillCategories,
): SkillsDatabase[] => {
	const FilteredSkills: SkillsDatabase[] = []
	SkillKeys.forEach((Skill) => {
		const FilteredSkill: Skill = SkillsDatabase[Skill]
		if (FilteredSkill?.Category === SpecificCategory) {
			FilteredSkills.push(Skill)
		}
	})
	return FilteredSkills
}

export const FilterSkillsExcludingCategory = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
	ExcludedCategory: SkillCategories,
): SkillsDatabase[] => {
	const NonMatchingSkills: SkillsDatabase[] = []
	SkillKeys.forEach((Skill) => {
		const FilteredSkill: Skill = SkillsDatabase[Skill]
		if (FilteredSkill?.Category !== ExcludedCategory) {
			NonMatchingSkills.push(Skill)
		}
	})
	return NonMatchingSkills
}

export const FilterSkillsByType = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
	SkillType: SkillTypes,
): SkillsDatabase[] => {
	const FilteredSkills: SkillsDatabase[] = []
	SkillKeys.forEach((Skill) => {
	const FilteredSkill: Skill = SkillsDatabase[Skill]
		if (FilteredSkill && FilteredSkill.SkillType === SkillType) {
			FilteredSkills.push(Skill)
		}
	})
	return FilteredSkills
}

/* GET */
export const GetSkillsDatabaseFromKeys = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
): Database<Skill> => {
	const FilteredSkills: Database<Skill> = {}
	SkillKeys.forEach((SkillKey) => {
		const Skill: Skill = SkillsDatabase[SkillKey]
		if (Skill) {
			FilteredSkills[SkillKey] = Skill
		}
	})
	return FilteredSkills
}

/* GROUP */
export const CategorizeAndGroupSkills = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
	SkillType: SkillTypes,
	Title: string,
): GroupedSkillsCategory => {
	const SkillCategories: SkillsCategory[] = []
	SkillKeys.forEach((SkillSlug) => {
		const Skill: Skill = SkillsDatabase[SkillSlug]
		if (Skill && Skill.SkillType === SkillType) {
			let CategoryGroup = SkillCategories.find((Category) => {
				Category.SkillCategoryName === Skill.Category
			})
			if (!CategoryGroup) {
				CategoryGroup = { SkillCategoryName: Skill.Category, Skills: [] }
				SkillCategories.push(CategoryGroup)
			}
			CategoryGroup.Skills.push(SkillSlug)
		}
	})
	return { Title, SkillCategories: SkillCategories }
}

export const GroupByCategory = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
): SkillsCategory[] => {
	const Categories: Database<SkillsDatabase[]> = {}
	SkillKeys.forEach((SkillKey) => {
		const Skill: Skill = SkillsDatabase[SkillKey]
		if (Skill) {
			const Category = Skill.Category
			if (!Categories[Category]) {
				Categories[Category] = []
			}
			Categories[Category].push(SkillKey)
		}
	})
	const Result: SkillsCategory[] = Object.keys(Categories).map((Key) => ({
		SkillCategoryName: Key,
		Skills: Categories[Key],
	}))
	return Result
}

export const GroupByLanguage = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
): SkillsCategory[] => {
	const GroupedSkills: { [SkillCategoryName: string]: SkillsDatabase[] } = {}
	const NoLanguageSkills: SkillsDatabase[] = []
	SkillKeys.forEach((SkillKey) => {
		const Skill: Skill = SkillsDatabase[SkillKey]
		if (!Skill) {
			console.warn(`Skill Not Found For Slug: ${SkillKey}`)
			return
		}
		let IsRelatedToProgrammingLanguage = false
		if (Skill.Category === SkillCategories.ProgrammingLanguages) {
			IsRelatedToProgrammingLanguage = true
			if (!GroupedSkills[Skill.Name]) {
				GroupedSkills[Skill.Name] = []
			}
			GroupedSkills[Skill.Name].push(SkillKey)
		} else if (Skill.RelatedSkills && Skill.RelatedSkills.length > 0) {
			Skill.RelatedSkills.forEach((RelatedSkillSlug) => {
				const RelatedSkill = SkillsDatabase[RelatedSkillSlug]
				if (RelatedSkill && RelatedSkill.Category === SkillCategories.ProgrammingLanguages) {
					IsRelatedToProgrammingLanguage = true
					const LanguageName: string = RelatedSkill.Name
					GroupedSkills[LanguageName] = GroupedSkills[LanguageName] || []
					GroupedSkills[LanguageName].push(SkillKey)
				}
			})
		}
		if (!IsRelatedToProgrammingLanguage) {
			NoLanguageSkills.push(SkillKey)
		}
	})
	if (NoLanguageSkills.length > 0) {
		GroupedSkills['No Languages'] = NoLanguageSkills
	}
	return Object.entries(GroupedSkills).map(([SkillCategoryName, Skills]) => ({
		SkillCategoryName,
		Skills,
	}))
}

export const GroupBySkillType = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
): SkillsCategory[] => {
	const SkillTypes: Database<SkillsDatabase[]> = {}
	SkillKeys.forEach((Slug) => {
		const Skill: Skill = SkillsDatabase[Slug]
		if (Skill) {
			const SkillType = Skill.SkillType
			if (!SkillTypes[SkillType]) {
				SkillTypes[SkillType] = []
			}
			SkillTypes[SkillType].push(Slug)
		}
	})
	const Result: SkillsCategory[] = Object.keys(SkillTypes).map((Key) => ({
		SkillCategoryName: Key,
		Skills: SkillTypes[Key],
	}))
	return Result
}

export const GroupSkills = (
	GroupedBy: GroupByOptions,
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
	ExcludedSkillTypes?: SkillTypes[],
): SkillsCategory[] => {
	let OrganizedSkills: SkillsCategory[] = []
	const SkillsRelatedToKeys: { [Key in SkillsDatabase]?: Skill } =
		GetSkillsDatabaseFromKeys(SkillKeys, SkillsDatabase)
	/* Adjust `RecursiveFilter` Function To Filter Out Skills Based On `ExcludedSkillTypes` */
	const FilteredSkillSlugs: SkillsDatabase[] = ExcludedSkillTypes
		? RecursiveFilter(SkillKeys, SkillsRelatedToKeys, ExcludedSkillTypes)
		: SkillKeys
	/* Validate `FilteredSkillSlugs` To Ensure They Exist In `AllSkills` */
	const ValidatedSkillSlugs: SkillsDatabase[] = FilteredSkillSlugs.filter((Slug) => {
		SkillsRelatedToKeys.hasOwnProperty(Slug) /* eslint-disable-line no-prototype-builtins */
	})
	switch (GroupedBy) {
		case 'Language':
			OrganizedSkills = GroupByLanguage(ValidatedSkillSlugs, SkillsRelatedToKeys)
			break
		case 'Category':
			OrganizedSkills = GroupByCategory(ValidatedSkillSlugs, SkillsRelatedToKeys)
			break
		case 'Skill-Type':
			OrganizedSkills = GroupBySkillType(ValidatedSkillSlugs, SkillsRelatedToKeys)
			break
		default:
			OrganizedSkills = [
				{
					SkillCategoryName: 'None',
					Skills: ValidatedSkillSlugs,
				},
			]
			break
	}
	return OrganizedSkills
}

export const RecursiveFilter = (
	SkillKeys: SkillsDatabase[],
	SkillsDatabase: Database<Skill>,
	ExcludedSkillTypes: SkillTypes[] = [],
	ProcessedSkills: Set<SkillsDatabase> = new Set<SkillsDatabase>(),
): SkillsDatabase[] => {
	/* Filtered Skills To Return */
	let FilteredSkills: SkillsDatabase[] = []
	SkillKeys.forEach((SkillKey) => {
		/* If Skill Has Already Been Processed, Skip It To Avoid Infinite Recursion */
		if (ProcessedSkills.has(SkillKey)) return
		const Skills: Skill = SkillsDatabase[SkillKey]
		if (Skills) {
			/* Mark Skill As Processed */
			ProcessedSkills.add(SkillKey)
			/* If Skill's Type Isn't In Excluded List, Add It To Filtered list */
			if (!ExcludedSkillTypes.includes(Skills.SkillType)) {
				FilteredSkills.push(SkillKey)
				/* If Skill Has Related Skills, Recursively Filter Those As Well */
				if (Skills.RelatedSkills && Skills.RelatedSkills.length > 0) {
					const RelatedFilteredSkills = RecursiveFilter(
						Skills.RelatedSkills,
						SkillsDatabase,
						ExcludedSkillTypes,
						ProcessedSkills,
					)
					/* Combine Current Filtered Skills With Those From Related Skills */
					FilteredSkills = FilteredSkills.concat(RelatedFilteredSkills)
				}
			}
		}
	})
	return FilteredSkills
}