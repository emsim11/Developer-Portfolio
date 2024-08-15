export interface FilterArchive {
	ParamName: string
	ShowArchived: boolean
	HasArchivedMaterials: boolean
}

export interface FilterCategory {
	Options: FilterOption[]
	SectionName: string
	URLParam: string
	SelectedValue: string
}

export interface FilterOption {
	ParamName: string
	ParamValue: string
}

export interface FilterSearch {
	SearchParamName: string
	SearchTerm: string
}