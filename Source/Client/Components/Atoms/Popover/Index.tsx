import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import './Index.scss'

export const Popover = PopoverPrimitive.Root

export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverContent = forwardRef<
	ElementRef<typeof PopoverPrimitive.Content>,
	ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align: Align = 'center', sideOffset: SideOffset = 4, ...Props }, Ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={Ref}
			align={Align}
			sideOffset={SideOffset}
			className={`Popover-Content ${className}`}
			{...Props}
		/>
	</PopoverPrimitive.Portal>
))

PopoverContent.displayName = PopoverPrimitive.Content.displayName