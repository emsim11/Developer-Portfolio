import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'

import './Index.scss'
import { Dialog, DialogContent } from '../Dialog/Index'

export const Command = forwardRef<
	ElementRef<typeof CommandPrimitive>,
	ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...Props }, Ref) => (
  	<CommandPrimitive
    	ref={Ref}
    	className={`Command ${className}`}
    	{...Props}
  	/>
))

Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

export const CommandDialog = ({ children, ...Props }: CommandDialogProps) => {
	return (
		<Dialog {...Props}>
			<DialogContent className='Command-Dialog-Content'>
				<Command className='Command-Dialog-Content-Command'>
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export const CommandInput = forwardRef<
	ElementRef<typeof CommandPrimitive.Input>,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...Props }, Ref) => (
	<div className='Command-Input' cmdk-input-wrapper=''>
		<Search className='Command-Input-Search' />
		<CommandPrimitive.Input
			ref={Ref}
			className={`Command-Input-Search-Container ${className}`}
			{...Props}
		/>
	</div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

export const CommandList = forwardRef<
	ElementRef<typeof CommandPrimitive.List>,
	ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...Props }, Ref) => (
  	<CommandPrimitive.List
    	ref={Ref}
    	className={`Command-List ${className}`}
    	{...Props}
  	/>
))

CommandList.displayName = CommandPrimitive.List.displayName

export const CommandEmpty = forwardRef<
	ElementRef<typeof CommandPrimitive.Empty>,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((Props, Ref) => (
  	<CommandPrimitive.Empty
    	ref={Ref}
    	className='Command-Empty'
    	{...Props}
  	/>
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

export const CommandGroup = forwardRef<
	ElementRef<typeof CommandPrimitive.Group>,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...Props }, Ref) => (
  	<CommandPrimitive.Group
		ref={Ref}
		className={`Command-Group ${className}`}
		{...Props}
  	/>
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

export const CommandSeparator = forwardRef<
	ElementRef<typeof CommandPrimitive.Separator>,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...Props }, Ref) => (
  	<CommandPrimitive.Separator
		ref={Ref}
		className={`Command-Separator ${className}`}
		{...Props}
  	/>
))

CommandSeparator.displayName = CommandPrimitive.Separator.displayName

export const CommandItem = forwardRef<
	ElementRef<typeof CommandPrimitive.Item>,
	ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...Props }, Ref) => (
	<CommandPrimitive.Item
		ref={Ref}
		className={`Command-Item ${className}`}
		{...Props}
	/>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

export const CommandShortcut = ({ className, ...Props}: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={`Command-Shortcut ${className}`}
			{...Props}
		/>
	)
}

CommandShortcut.displayName = 'CommandShortcut'