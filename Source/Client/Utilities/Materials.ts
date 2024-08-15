import { ExperienceTypes } from '@/Enums/Experience'
import { MaterialTypes } from '@/Enums/Material'
import { ModulesDatabase } from '@/Enums/Module'
import { SkillCategories, SkillsDatabase, SkillTypes } from '@/Enums/Skill'
import { Certificate } from '@/Interfaces/Certificate'
import { Course } from '@/Interfaces/Course'
import { FilterOption } from '@/Interfaces/Filter'
import { Database } from '@/Interfaces/Layout'
import { Material, MaterialGroup } from '@/Interfaces/Material'
import { Module } from '@/Interfaces/Module'
import { Role } from '@/Interfaces/Role'
import { Skill } from '@/Interfaces/Skill'

/* COURSE */
export const AggregateRelatedMaterialsForCourses = (
	CoursesDatabase: Database<Course>,
	ModulesDatabase: Database<Module>,
): Database<Course> => {
	/* Create New Object To Store Updated Courses With Aggregated Related Materials */
	const UpdatedCoursesDatabase: Database<Course> = {}
	/* Iterate Over Each Course In Database */
	Object.keys(CoursesDatabase).forEach((CourseKey) => {
		const Course: Course = CoursesDatabase[CourseKey]
		/* Start With Existing Related Materials In Course (If Any) */
		let AggregatedMaterials: string[] = Course.RelatedMaterials
			? [...Course.RelatedMaterials]
			: []
		/* Iterate Over Each Module Key In Course */
		Course.Modules.forEach((ModuleKey: ModulesDatabase) => {
			const ModuleData: Module = ModulesDatabase[ModuleKey]
			/* Ensure `ModuleData` Exists & Has Related Materials */
			if (ModuleData && ModuleData.RelatedMaterials) {
				/* Aggregate Related Materials */
				AggregatedMaterials = [
					...AggregatedMaterials,
					...ModuleData.RelatedMaterials,
				]
			}
		})
		/* Remove Duplicate Related Materials If Necessary */
		AggregatedMaterials = Array.from(new Set(AggregatedMaterials))
		/* Update Course Object With Aggregated Related Materials & Add It To Updated Database */
		UpdatedCoursesDatabase[CourseKey] = {
			...Course,
			RelatedMaterials: AggregatedMaterials,
		}
	})
	/* Return Updated Courses Database With Aggregated Related Materials */
	return UpdatedCoursesDatabase
}

export const AggregateSkillsForCourse = (
	Course: Course,
	ModulesDatabase: Database<Module>,
): Course => {
	/* Start With Existing Skills In Course (If Any) */
	let AggregatedSkills: SkillsDatabase[] = [...Course.Skills]
	/* Iterate Over Each Module Key In Course */
	Course.Modules.forEach((ModuleKey) => {
		const ModuleData: Module = ModulesDatabase[ModuleKey]
		/* Ensure `ModuleData` Exists & Has Skills */
		if (ModuleData && ModuleData.Skills) {
			/* Aggregate Skills */
			AggregatedSkills = [...AggregatedSkills, ...ModuleData.Skills]
		}
	})
	/* Remove Duplicate Skills If Necessary */
	AggregatedSkills = Array.from(new Set(AggregatedSkills))
	/* Return Course Object With Aggregated Skills */
	return {
		...Course,
		Skills: AggregatedSkills,
	}
}

export const AggregateSkillsForCourses = (
	CoursesDatabase: Database<Course>,
	ModulesDatabase: Database<Module>,
): Database<Course> => {
	/* Create New Object To Store Updated Courses With Aggregated Skills */
	const UpdatedCoursesDatabase: Database<Course> = {}
	/* Iterate Over Each Course In Database */
	Object.keys(CoursesDatabase).forEach((CourseKey) => {
		const Course: Course = CoursesDatabase[CourseKey]
		/* Start With Existing Skills In Course (If Any) */
		let AggregatedSkills: SkillsDatabase[] = [...Course.Skills]
		/* Iterate Over Each Module Key In Course */
		Course.Modules.forEach((ModuleKey: ModulesDatabase) => {
			const ModuleData: Module = ModulesDatabase[ModuleKey]
			/* Ensure `ModuleData` Exists & Has Skills */
			if (ModuleData && ModuleData.Skills) {
				/* Aggregate Skills */
				AggregatedSkills = [...AggregatedSkills, ...ModuleData.Skills]
			}
		})
		/* Remove Duplicate Skills If Necessary */
		AggregatedSkills = Array.from(new Set(AggregatedSkills))
		/* Update Course Object With Aggregated Skills & Add It To Updated Database */
		UpdatedCoursesDatabase[CourseKey] = {
			...Course,
			Skills: AggregatedSkills,
		}
	})
	/* Return Updated Courses Database With Aggregated Skills */
	return UpdatedCoursesDatabase
}

export const FindCourseKeyForModule = (
	ModuleKey: ModulesDatabase,
	CoursesDatabase: Database<Course>,
): string | null => {
	/* Iterate Through Courses To Find One Related To Specified Module */
	for (const [CourseKey, Course] of Object.entries(CoursesDatabase)) {
		if (Course.Modules.includes(ModuleKey)) {
			return CourseKey /* Return Key Of Course Related To Specified Module */
		}
	}
	return null /* Return Null If No Related Course Is Found */
}

/* FILTER */
export const FilterCertificatesByIssuer = (
    Issuer: string,
    MaterialsKeys: string[],
    CertificatesMap: Database<Certificate>,
): string[] => {
    return MaterialsKeys.reduce<string[]>((Accumulator, Key) => {
        const FilteredCertificate: Certificate = CertificatesMap[Key]
        if (FilteredCertificate && StringToSlug(FilteredCertificate.Issuer) === StringToSlug(Issuer)) {
            Accumulator.push(Key)
        }
        return Accumulator
    }, [])
}

export const FilterMaterialByArchivedStatus = <T extends Material>(
    IsArchived: boolean,
    MaterialKeys: string[],
    MaterialsDatabase: Database<T>,
): string[] => {
    return MaterialKeys.reduce<string[]>((Acc, Key) => {
        const FilteredMaterial: T = MaterialsDatabase[Key]
        const ShouldBeIncluded: boolean = IsArchived ? true : !FilteredMaterial.Archived
        if (ShouldBeIncluded) {
            Acc.push(Key)
        }
        return Acc
    }, [])
}

export const FilterMaterialByCategory = <T extends Material>(
    Category: string,
    MaterialKeys: string[],
    MaterialsDatabase: Database<T>,
): string[] => {
    const FilteredMaterialSlugs = MaterialKeys.reduce((Acc: string[], Key) => {
        const FilteredMaterial = MaterialsDatabase[Key]
        if (FilteredMaterial && StringToSlug(FilteredMaterial.Category) === StringToSlug(Category)) {
            Acc.push(Key)
        }
        return Acc
    }, [])
    return FilteredMaterialSlugs
}

export const FilterMaterialBySkill = <T extends Material>(
    SkillKey: SkillsDatabase,
    MaterialKeys: string[],
    MaterialDatabase: Database<T>,
): string[] => {
    const FilteredMaterialSlugs: string[] = []
    MaterialKeys.forEach((Key) => {
        const FilteredMaterial: T = MaterialDatabase[Key]
        if (FilteredMaterial && FilteredMaterial.Skills.includes(SkillKey)) {
            FilteredMaterialSlugs.push(Key)
        }
    })
    return FilteredMaterialSlugs
}

export const FilterMaterialBySkillCategory = <T extends Material>(
    MaterialKeys: string[],
    MaterialsDatabase: Database<T>,
    SkillCategory: string,
    SkillsDatabase: Database<Skill>,
): string[] => {
    const FilteredMaterialSlugs: string[] = []
    const TargetCategorySlug = StringToSlug(SkillCategory)

    for (const MaterialKey of MaterialKeys) {
        const FilteredMaterial: T = MaterialsDatabase[MaterialKey]
        for (const SkillSlug of FilteredMaterial.Skills) {
            const FilteredSkill: Skill = SkillsDatabase[SkillSlug]
            if (FilteredSkill && StringToSlug(FilteredSkill.Category) === TargetCategorySlug) {
                FilteredMaterialSlugs.push(MaterialKey)
                break
            }
        }
    }
    return FilteredMaterialSlugs
}

/* FILTER OPTIONS */
export const GenerateFilterOptionsByCategory = <T extends Material>(MaterialsDatabase: Database<T>): FilterOption[] => {
    return [
        { ParamValue: 'All', ParamName: 'All' },
        ...Object.values(MaterialsDatabase)
			.map((Material) => ({
				ParamValue: StringToSlug(Material.Category),
				ParamName: Material.Category,
			}))
			.filter((Value, Index, Self) =>
				Self.findIndex((Value) => Value.ParamValue === Value.ParamValue) === Index
			),
    ]
}

export const GenerateFilterOptionsByRoleType = <T extends Role>(RoleDatabase: Database<T>): FilterOption[] => {
    return [
        { ParamValue: 'All', ParamName: 'All' },
        ...Object.values(RoleDatabase)
			.map((Role) => ({
				ParamValue: StringToSlug(Role.Type),
				ParamName: Role.Type,
			}))
			.reduce((Unique, Item) => {
				if (!Unique.some((Option) => Option.ParamValue === Item.ParamValue)) {
					Unique.push(Item)
				}
				return Unique
			}, [] as FilterOption[])
			.sort((A, B) => A.ParamName.localeCompare(B.ParamName)),
    ]
}

export const GenerateFilterOptionsBySkillCategories = <T extends Material>(
    MaterialsDatabase: Database<T>,
    SkillDatabase: Database<Skill>,
): FilterOption[] => {
    return [
        { ParamValue: 'All', ParamName: 'All' },
        ...Object.values(MaterialsDatabase)
			.flatMap((Material) =>
				Material.Skills.flatMap((SkillSlug) => {
					const Skill = SkillDatabase[SkillSlug]
					return Skill
						? [{
							ParamValue: StringToSlug(Skill.Category),
							ParamName: Skill.Category,
						}]
						: []
				})
			)
			.reduce((Unique, Item) => {
				if (!Unique.some((Value) => Value.ParamValue === Item.ParamValue)) {
					Unique.push(Item)
				}
				return Unique;
			}, [] as FilterOption[])
			.sort((A, B) => A.ParamName.localeCompare(B.ParamName)),
    ]
}

export const GenerateFilterOptionsBySkillType = <T extends Material>(
    MaterialsDatabase: Database<T>,
    SkillsDatabase: Database<Skill>,
    SkillType: SkillTypes,
    ExcludeCategory?: SkillCategories,
): FilterOption[] => {
    return [
        { ParamValue: 'All', ParamName: 'All' },
        ...Object.values(MaterialsDatabase)
			.flatMap((Material) =>
				Material.Skills
					.map((SkillKey) => ({
						Skill: SkillsDatabase[SkillKey],
						ParamValue: SkillKey,
					}))
					.filter(({ Skill }) =>
						Skill &&
						Skill.SkillType === SkillType &&
						(!ExcludeCategory || Skill.Category !== ExcludeCategory)
					)
			)
			.map(({ Skill, ParamValue: SkillKey }) => ({
				ParamValue: SkillKey,
				ParamName: Skill.Name,
			}))
			.reduce((Unique, Item) => {
				if (!Unique.some((Object) => Object.ParamValue === Item.ParamValue)) {
					Unique.push(Item)
				}
				return Unique;
			}, [] as FilterOption[])
			.sort((A, B) => A.ParamName.localeCompare(B.ParamName)),
    ]
}

export const GenerateFilterOptionsForProgrammingLanguages = <T extends Material>(
    MaterialsDatabase: Database<T>,
    SkillsDatabase: Database<Skill>,
): FilterOption[] => {
    return [
        { ParamValue: 'All', ParamName: 'All' },
        ...Object.values(MaterialsDatabase)
			.flatMap((Material) => Material.Skills.flatMap((SkillSlug) => {
				const Skill = SkillsDatabase[SkillSlug]
				return Skill && Skill.Category === SkillCategories.ProgrammingLanguages
					? [{ ParamValue: SkillSlug, ParamName: Skill.Name }]
					: []
			}))
			.reduce((Unique, Option) => {
				if (!Unique.some((Value) => Value.ParamValue === Option.ParamValue)) {
					Unique.push(Option)
				}
				return Unique
			}, [] as FilterOption[])
			.sort((A, B) => A.ParamName.localeCompare(B.ParamName)),
    ]
}

export const GenerateIssuerFilterOptions = (CertificatesDatabase: Database<Certificate>): FilterOption[] => {
    return [
        { ParamValue: 'All', ParamName: 'All' },
        ...Object.values(CertificatesDatabase)
			.map((Certificate) => ({
				ParamValue: StringToSlug(Certificate.Issuer),
				ParamName: Certificate.Issuer,
			}))
			.filter((Item, Index, Self) =>
				Self.findIndex((Value) => Value.ParamValue === Item.ParamValue) === Index
			)
            .sort((A, B) => A.ParamName.localeCompare(B.ParamName)),
    ]
}

/* GENERAL */
export const AddNestedSkillsMaterialsList = <T extends Material>(
	MaterialsDatabase: Database<T>,
	SkillDatabase: Database<Skill>,
	IgnoredCategories: SkillCategories[],
	SkillTypeToAdd?: SkillTypes,
	SkillTypeToCheck?: SkillTypes,
): Database<T> => {
	Object.keys(MaterialsDatabase).forEach((Material) => {
		const AddedMaterial: T = MaterialsDatabase[Material]
		const SkillsToAddToSet: Set<SkillsDatabase> = new Set(AddedMaterial.Skills)
		AddedMaterial.Skills.forEach((Skill) => {
			const AddedSkill = SkillDatabase[Skill]
			if (AddedSkill && !IgnoredCategories.includes(AddedSkill.Category)) {
				if (!SkillTypeToCheck || AddedSkill.SkillType === SkillTypeToCheck) {
					AddedSkill.RelatedSkills?.forEach((RelatedSkill) => {
						const RelatedSkills = SkillDatabase[RelatedSkill]
						if (!IgnoredCategories.includes(RelatedSkills.Category)) {
							if (!SkillTypeToAdd || RelatedSkills.SkillType === SkillTypeToAdd) {
								SkillsToAddToSet.add(RelatedSkill)
							}
						}
					})
				}
			}
		})
		AddedMaterial.Skills = Array.from(SkillsToAddToSet)
	})
	return MaterialsDatabase
}

export const CheckForArchivedMaterials = (
	Databases: Database<Material>,
): boolean => {
	for (const DatabaseKey in Databases) {
		if (Databases[DatabaseKey].Archived) {
			return true
		}
	}
	return false
}

export const CountMaterialsBySkill = <T extends Material>(
	SkillKey: SkillsDatabase,
	MaterialsDatabase: Database<T>,
): number => {
	let Count: number = 0
	for (const MaterialKey in MaterialsDatabase) {
		const CountedMaterial: T = MaterialsDatabase[MaterialKey]
		if (CountedMaterial && CountedMaterial.Skills.includes(SkillKey)) {
			Count++
		}
	}
	return Count
}

export const GenerateURL = (
	Params: FilterOption[],
	BasePath: string,
): string => {
	const ParamsObject = Params.reduce<Record<string, string>>((Accumulator, Param) => {
		const Key: string = Param.ParamName
		const Value: string = Param.ParamValue
		Accumulator[Key] = Value.trim() /* Ensure Only Last Value Is Kept */
		return Accumulator
	}, {})
	/* Convert Object Back Into An Array Of Tuples */
	const UniqueParams: [string, string][] = Object.entries(ParamsObject)
	/* Encode Each Parameter & Construct Query String */
	const QueryString: string = UniqueParams
		.map(([Key, Value]) => `${Key}=${encodeURIComponent(Value)}`)
		.join('&')
	return `${BasePath}?${QueryString}`
}

export const IsSkillAssociatedWithMaterial = (
	SkillKey: SkillsDatabase,
	MaterialsDatabase: Database<Material>,
): boolean => {
	for (const MaterialKey in MaterialsDatabase) {
		if (MaterialsDatabase[MaterialKey].Skills.includes(SkillKey)) {
			return true
		}
	}
	return false
}

export const SkillHasMaterial = <T extends Material>(
	SkillKey: SkillsDatabase,
	MaterialsDatabase: Database<T>,
): boolean => {
	return CountMaterialsBySkill(SkillKey, MaterialsDatabase) >= 2
}

export const StringToSlug = (Input: string): string => {
	return Input.replace(/\s+/g, '-')
}

/* GROUP */
export function GroupMaterialsByCategory<T extends Material>(
	MaterialsKeys: string[],
	MaterialsDatabase: Database<T>,
): MaterialGroup[] {
	return MaterialsKeys.reduce<MaterialGroup[]>((Groups, Slug) => {
		const Material: T = MaterialsDatabase[Slug]
		if (!Material) return Groups /* Skip If Material Isn't Found In Map */
		/* Find Index Of Group That Matches Current Material's Category */
		const GroupIndex = Groups.findIndex((Group) => Group.GroupName === Material.Category)
		/* If Group Doesn't Exist, Create New Group With Material's Slug Added */
		if (GroupIndex === -1) {
			Groups.push({
				GroupName: Material.Category,
				MaterialKeys: [Slug], /* Initialize With Current Material's Slug */
			})
		} else {
			/* If Group Exists, Add Current Material's Slug To Group's Materials Array */
			Groups[GroupIndex].MaterialKeys.push(Slug)
		}
		return Groups
	}, [])
}

export function GroupMaterialsByMaterialType<T extends Material>(
	MaterialsKeys: string[],
	MaterialsDatabase: Database<T>,
	GroupName: MaterialTypes,
): MaterialGroup[] {
	/* Filter `MaterialKeys` To Ensure They Exist In The `MaterialsMap` */
	const ValidMaterialsKeys: string[] = MaterialsKeys.filter((Key) => {
		Key in MaterialsDatabase
	})
	/* Return Array With A Single `MaterialGroup` Object */
	return [
		{
			GroupName,
			MaterialKeys: ValidMaterialsKeys,
		},
	]
}

/* EXPERIENCE */
export const AddCompanyThumbnail = (Key: string): string => {
	return `./Public/Companies/${Key}/Logo.png`
}

export function FilterRolesByType<T extends Role>(
	TargetType: ExperienceTypes,
	RoleKeys: string[],
	RolesDatabase: Database<T>,
): string[] {
	const FilteredRoles: string[] = []
	RoleKeys.forEach((Key) => {
		const Role: T = RolesDatabase[Key]
		if (Role && StringToSlug(Role.Type) === StringToSlug(TargetType)) {
			FilteredRoles.push(Key)
		}
	})
	return FilteredRoles
}

/* PROJECTS */
export const AddProjectThumbnail = (ProjectKey: string,): string => {
	return `./Public/Content/Projects/${ProjectKey}/Cover.png`
}