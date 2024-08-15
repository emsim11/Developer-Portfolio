import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import './Index.scss'

export const Tabs = TabsPrimitive.Root

export const TabsList = forwardRef<
	ElementRef<typeof TabsPrimitive.List>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...Props }, Ref) => (
	<TabsPrimitive.List
		ref={Ref}
		className={`Tabs-List ${className}`}
		{...Props}
	/>
))

TabsList.displayName = TabsPrimitive.List.displayName

export const TabsTrigger = forwardRef<
	ElementRef<typeof TabsPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...Props }, Ref) => (
	<TabsPrimitive.Trigger
		ref={Ref}
		className={`Tabs-Trigger ${className}`}
		{...Props}
	/>
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

export const TabsContent = forwardRef<
	ElementRef<typeof TabsPrimitive.Content>,
	ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...Props }, Ref) => (
	<TabsPrimitive.Content
		ref={Ref}
		className={`Tabs-Content ${className}`}
		{...Props}
	/>
))

TabsContent.displayName = TabsPrimitive.Content.displayName