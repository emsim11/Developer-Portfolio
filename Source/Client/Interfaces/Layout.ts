export interface Database<T> {
	[Key: string]: T
}

export interface Metadata {
	Title: string
	Description: string | undefined
	Category: string
	Creator: string
	Keywords: string | string[]
}

export interface NavigationItem {
	Label: string
	Path: string
	Description: string
	IsMain?: boolean /* If True, Displayed In NavBar */
}