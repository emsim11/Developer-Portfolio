import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react'
import { X } from 'lucide-react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import './Index.scss'

export const Dialog = DialogPrimitive.Root

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = DialogPrimitive.Portal

export const DialogClose = DialogPrimitive.Close

export const DialogOverlay = forwardRef<
	ElementRef<typeof DialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...Props }, Ref) => (
	<DialogPrimitive.Overlay ref={Ref} className={`Dialog-Overlay ${className}`} {...Props} />
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...Props }, Ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content ref={Ref} className={`Dialog-Content ${className}`} {...Props}>
			{children}
			<DialogPrimitive.Close className='Close'>
				<X className='Close-Icon' />
				<span className='Close-Span'>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

export const DialogHeader = ({ className, ...Props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={`Dialog-Header ${className}`} {...Props} />
)

DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = ({ className, ...Props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={`Dialog-Footer ${className}`} {...Props} />
)

DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = forwardRef<
	ElementRef<typeof DialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...Props }, Ref) => (
	<DialogPrimitive.Title ref={Ref} className={`Dialog-Title ${className}`} {...Props} />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

export const DialogDescription = forwardRef<
	ElementRef<typeof DialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...Props }, Ref) => (
	<DialogPrimitive.Description ref={Ref} className={`Dialog-Description ${className}`} {...Props} />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName