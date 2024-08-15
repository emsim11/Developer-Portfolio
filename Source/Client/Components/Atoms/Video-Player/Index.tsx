import { FC } from 'react'

import './Index.scss'

interface VideoPlayerProps {
	Source: string
	Type?: string
	ExtraClasses?: string
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
	Source,
	Type = 'video/mp4',
	ExtraClasses,
}) => {
	return (
		<video controls className={`Video-Player ${ExtraClasses ? ExtraClasses : ''}`}>
			<source src={Source} type={Type} />
			Your browser does not support the video tag.
		</video>
	)
}