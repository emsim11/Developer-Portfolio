import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

import './Index.scss'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = forwardRef<
	ElementRef<typeof AccordionPrimitive.Item>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...Props }, Ref) => (
	<AccordionPrimitive.Item
		ref={Ref}
		className={`Accordion-Item ${className ? className : ''}`}
		{...Props}
	/>
))

AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = forwardRef<
	ElementRef<typeof AccordionPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...Props }, Ref) => (
	<AccordionPrimitive.Header className='Accordion-Header'>
		<AccordionPrimitive.Trigger
			ref={Ref}
			className={`Accordion-Trigger ${className ? className : ''}`}
			{...Props}
		>
			{children}
			<ChevronDown className='Accordion-Trigger-Icon' />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export const AccordionContent = forwardRef<
	ElementRef<typeof AccordionPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...Props }, Ref) => (
	<AccordionPrimitive.Content
		ref={Ref}
		className='Accordion-Content'
		{...Props}
	>
		<div className={`Accordion-Content-Container ${className ? className : ''}`}>
			{children}
		</div>
	</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName