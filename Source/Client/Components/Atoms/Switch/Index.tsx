import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import './Index.scss'

export const Switch = forwardRef<
	ElementRef<typeof SwitchPrimitives.Root>,
	ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...Props }, Ref) => (
	<SwitchPrimitives.Root className={`Switch ${className}`} {...Props} ref={Ref}>
		<SwitchPrimitives.Thumb className='Switch-Thumb' />
	</SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName