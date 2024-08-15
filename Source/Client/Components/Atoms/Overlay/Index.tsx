import { FC, ReactNode } from 'react'

import './Index.scss'

interface OverlayProps {
	ExtraClasses?: string
	IsOpen: boolean
	Toggle: () => void
	children: ReactNode
}

export const Overlay: FC<OverlayProps> = ({ ExtraClasses, IsOpen, Toggle, children})=> {
	return (
		<div className={`Overlay ${ExtraClasses ? ExtraClasses : ''} ${IsOpen ? 'Open' : 'Closed'}`}>
			{children}
		</div>
	)
}