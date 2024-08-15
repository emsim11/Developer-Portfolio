import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import './Index.scss'

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuGroup = DropdownMenuPrimitive.Group

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuSub = DropdownMenuPrimitive.Sub

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuSubTrigger = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { Inset?: boolean }
>(({ className, Inset, children, ...Props }, Ref) => (
	<DropdownMenuPrimitive.SubTrigger ref={Ref} className={`SubTrigger ${Inset} ${className}`} {...Props}>
		{children}
		<ChevronRight className='SubTrigger-Icon' />
	</DropdownMenuPrimitive.SubTrigger>
))

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

export const DropdownMenuSubContent = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...Props }, Ref) => (
	<DropdownMenuPrimitive.SubContent ref={Ref} className={`SubContent ${className}`} {...Props} />
))

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

export const DropdownMenuContent = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...Props }, Ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content ref={Ref} sideOffset={sideOffset} className={`Content ${className}`} {...Props} />
	</DropdownMenuPrimitive.Portal>
))

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

export const DropdownMenuItem = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.Item>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { Inset?: boolean }
>(({ className, Inset, ...Props }, Ref) => (
	<DropdownMenuPrimitive.Item ref={Ref} className={`Menu-Item ${Inset} ${className}`} {...Props} />
))

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export const DropdownMenuCheckboxItem = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...Props }, Ref) => (
	<DropdownMenuPrimitive.CheckboxItem ref={Ref} className={`Checkbox-Item ${className}`} checked={checked} {...Props}>
		<span className='Checkbox-Span'>
			<DropdownMenuPrimitive.ItemIndicator>
				<Check className='Checkbox-Icon' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
))

DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

export const DropdownMenuRadioItem = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...Props }, Ref) => (
	<DropdownMenuPrimitive.RadioItem ref={Ref} className={`Radio-Item ${className}`} {...Props}>
		<span className='Radio-Span'>
			<DropdownMenuPrimitive.ItemIndicator>
				<Circle className='Radio-Icon' />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
))

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

export const DropdownMenuLabel = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.Label>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { Inset?: boolean }
>(({ className, Inset, ...Props }, Ref) => (
	<DropdownMenuPrimitive.Label ref={Ref} className={`Label ${Inset} ${className}`} {...Props} />
))

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export const DropdownMenuSeparator = forwardRef<
	ElementRef<typeof DropdownMenuPrimitive.Separator>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...Props }, Ref) => (
	<DropdownMenuPrimitive.Separator ref={Ref} className={`Separator ${className}`} {...Props} />
))

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export const DropdownMenuShortcut = ({ className, ...Props }: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span className={`Shortcut ${className}`} {...Props} />
	)
}

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'