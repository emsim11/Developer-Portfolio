import {
	AiFillLinkedin as LinkedIn,
	AiOutlineGithub as GitHub,
	AiOutlineMail as Mail
} from 'react-icons/ai'

import { SocialLink } from '@/Interfaces/Developer'

/* Name Of The Developer */
export const DeveloperName: string = 'Emily Simone'

/* Titles For The Developer */
export const DeveloperTitles: string[] = [
	'Back-End Developer',
	'Database Administrator',
	'Front-End Developer',
	'Full-Stack Developer',
	'User Experience (UX) Designer',
    'User Interface (UI) Designer',
    'Web Developer',
]

/* Developer's Social Network */
export const SocialLinks: SocialLink[] = [
	{
		Name: 'GitHub',
		URL: 'https://github.com/emsim11',
		IconComponent: GitHub,
	},
	{
		Name: 'LinkedIn',
		URL: 'https://www.linkedin.com/in/emily-simone',
		IconComponent: LinkedIn,
	},
	{
		Name: 'Mail',
		URL: 'mailto:emsimone11@gmail.com',
		IconComponent: Mail,
	},
]