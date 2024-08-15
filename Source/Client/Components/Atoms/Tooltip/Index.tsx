import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import './Index.scss'

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = ({ children }: { children: ReactNode }) => (
    <TooltipProvider>
        <TooltipPrimitive.Root>
			<TooltipPrimitive.Trigger>
				{children}
			</TooltipPrimitive.Trigger>
        </TooltipPrimitive.Root>
    </TooltipProvider>
)

export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipContent = forwardRef<
    ElementRef<typeof TooltipPrimitive.Content>,
    ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...Props }, Ref) => (
    <TooltipPrimitive.Content
        ref={Ref}
        sideOffset={sideOffset}
        className={`Tooltip ${className}`}
        {...Props}
    />
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName