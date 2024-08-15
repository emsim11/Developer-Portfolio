import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

import './Index.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ExtraClasses?: string
	Style?: 'Primary' | 'Secondary' | 'Filled' | 'Outline' | 'Link' | 'Icon' | 'Gradient' | 'Ghost' | 'Destructive'
	Size?: 'Default' | 'Small' | 'Large' | 'Icon-Size'
	children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	ExtraClasses,
	Style = 'Primary',
	Size = 'Default',
	children,
	...Props
}, Ref) => {
	return (
		<button
			className={`${Style} ${Size} ${ExtraClasses ? ExtraClasses : ''}`}
			ref={Ref}
			{...Props}
		>
			{children}
		</button>
	)
})