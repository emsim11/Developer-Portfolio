import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import './Index.scss'

export const ScrollBar = forwardRef<
	ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...Props }, Ref) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar ref={Ref} orientation={orientation} className={`Scrollbar ${orientation === 'vertical' ? 'Vertical' : 'Horizontal'} ${className ? className : ''} `} {...Props}>
		<ScrollAreaPrimitive.ScrollAreaThumb className='Scroll-Area-Thumb' />
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
))

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export const ScrollArea = forwardRef<
	ElementRef<typeof ScrollAreaPrimitive.Root>,
	ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...Props }, Ref) => (
	<ScrollAreaPrimitive.Root ref={Ref} className={`Scroll-Area ${className ? className : ''}`} {...Props}>
		<ScrollAreaPrimitive.Viewport className='Viewport'>
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
))

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName