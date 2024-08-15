import { forwardRef, InputHTMLAttributes } from 'react'

import './Index.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...Props }, Ref) => {
		return (
			<input
				type={type}
				className={`Input ${className}`}
				ref={Ref}
				{...Props}
			/>
		)
	}
)

Input.displayName = 'Input'