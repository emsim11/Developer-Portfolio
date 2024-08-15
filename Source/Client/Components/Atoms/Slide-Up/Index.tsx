import { FC, ReactNode, useEffect, useRef } from 'react'

import './Index.scss'

interface SlideUpProps {
	Offset?: string
	children?: ReactNode
}

export const SlideUp: FC<SlideUpProps> = ({ Offset = '0px', children }) => {
	const Ref = useRef(null)
	useEffect(() => {
		const Observer = new IntersectionObserver((Entries) => {
			Entries.forEach((Entry) => {
				if (Entry.isIntersecting) {
					Entry.target.classList.remove('Intersecting-Opacity')
					Entry.target.classList.add('Intersecting-Animation')
				}
			})
		}, { rootMargin: Offset })
		if (Ref.current) {
			Observer.observe(Ref.current)
		}
	}, [Offset, Ref])
	return (
		<div ref={Ref} className='Slide-Up-Container'>
			{children}
		</div>
	)
}