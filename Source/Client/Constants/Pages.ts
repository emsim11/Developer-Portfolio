import { NavigationItem } from '@/Interfaces/Layout'

export const HOME_PAGE: NavigationItem = {
	Label: 'Home',
	Path: '/',
	Description: `
		Welcome to the homepage for my developer portfolio!
		This page contains information about me, my past
		projects, and my contact information.
	`,
}

export const ABOUT_PAGE: NavigationItem = {
	Label: 'About',
	Path: '/About',
	Description: `
		Read a summary about me, my journey, and my aspirations!
	`,
}

export const BLOG_PAGE: NavigationItem = {
	Label: 'Blog',
	Path: '/Blog',
	Description: `
		Explore my collection of blog posts about various topics!
		Use the search bar to find a specific blog post or filter
		all posts by category.
	`,
}

export const CERTIFICATE_PAGE: NavigationItem = {
	IsMain: true,
	Label: 'Certificates',
	Path: '/Certificates',
	Description: `
		Explore my collection of certificates and qualifications
		that I have earned! Use filters to refine your search by
		issuer and/or category.
	`,
}

export const EDUCATION_PAGE: NavigationItem = {
	IsMain: true,
	Label: 'Education',
	Path: '/Education',
	Description: `
		Explore my education history and qualifications, and
		view the modules that I have studied!
	`,
}

export const EXPERIENCE_PAGE: NavigationItem = {
	IsMain: true,
	Label: 'Experience',
	Path: '/Experience',
	Description: `
		Dive into my professional journey! Discover the roles
		that I have embraced, projects that I have spearheaded,
		and impacts that I've made.
	`,
}

export const MORE_PAGE: NavigationItem = {
	IsMain: true,
	Label: 'More',
	Path: '/More',
	Description: `
		Navigate to all of the pages on my portfolio website!
		This will show additional pages that are not displayed
		in the Navigation.
	`,
}

export const PROJECT_PAGE: NavigationItem = {
	IsMain: true,
	Label: 'Projects',
	Path: '/Projects',
	Description: `
		Discover my portfolio of projects, both current and
		archived! Use filters to narrow down projects by
		category, programming language, and/or technology.
	`,
}

export const SKILL_PAGE: NavigationItem = {
	Label: 'Skills',
	Path: '/Skills',
	Description: `
		Explore my collection of skills on various topics! It is
		possible to navigate to projects, certificates, and blogs
		directly from here.
	`,
}

export const NAVIGATION_ITEMS: Array<NavigationItem> = [
	HOME_PAGE,
	ABOUT_PAGE,
	BLOG_PAGE,
	CERTIFICATE_PAGE,
	EDUCATION_PAGE,
	EXPERIENCE_PAGE,
	PROJECT_PAGE,
	MORE_PAGE,
	SKILL_PAGE,
]