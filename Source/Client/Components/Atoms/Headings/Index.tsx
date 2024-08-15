import { FC } from 'react'

import './Index.scss'

interface HeadingOneProps {
	Title: string;
	ExtraClasses?: string;
}

export const HeadingOne: FC<HeadingOneProps> = ({ Title, ExtraClasses }) => {
	const ClassName: string = `Heading-One ${ExtraClasses ? ExtraClasses : ''}`
	return (
		<h1 className={ClassName}>
			{Title}
		</h1>
	)
}

interface HeadingTwoProps {
    Title: string;
    ExtraClasses?: string;
}

export const HeadingTwo: FC<HeadingTwoProps> = ({ Title, ExtraClasses }) => {
    const ClassName: string = `Heading-Two ${ExtraClasses}`
    return (
        <h1 className={ClassName}>
            {Title}
            <hr className='Heading-Two-Line-Separator' />
        </h1>
    )
}

interface HeadingThreeProps {
	Title: string;
	ExtraClasses?: string;
}

export const HeadingThree: FC<HeadingThreeProps> = ({ Title, ExtraClasses }) => {
	const ClassName: string = `Heading-Three ${ExtraClasses}`
	return (
		<h2 className={ClassName}>
			{Title}
		</h2>
	)
}

interface HeadingFourProps {
	Title: string;
	ExtraClasses?: string;
}

export const HeadingFour: FC<HeadingFourProps> = ({ Title, ExtraClasses }) => {
	const ClassName: string = `Heading-Four ${ExtraClasses}`
	return (
		<h4 className={ClassName}>
			{Title}
		</h4>
	)
}