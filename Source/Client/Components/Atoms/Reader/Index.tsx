import { FC } from 'react'
import Markdown from 'markdown-to-jsx'

import './Index.scss'

type ReaderProps = {
	Content: string | undefined
	ExtraClasses?: string
	Size?: 'Base-Prose' | 'Small-Prose' | 'Medium-Prose' | 'Large-Prose'
}

export const Reader: FC<ReaderProps> = ({ Content, Size = 'Large-Prose', ExtraClasses }) => {
	return (
		<article className={`Reader ${Size || ''} ${ExtraClasses || ''}`}>
			{Content && <Markdown>{Content}</Markdown>}
		</article>
	)
}