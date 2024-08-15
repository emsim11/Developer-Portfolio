import { ComponentProps, ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import './Index.scss'

export const Breadcrumb = forwardRef<
	HTMLElement,
	ComponentPropsWithoutRef<'nav'> & {
		Separator?: ReactNode
	}
>(({ ...Props }, Ref) => <nav ref={Ref} aria-label='Breadcrumb' {...Props} />)

Breadcrumb.displayName = 'Breadcrumb'

export const BreadcrumbList = forwardRef<
	HTMLOListElement,
	ComponentPropsWithoutRef<'ol'>
>(({ className, ...Props }, Ref) => (
	<ol
		ref={Ref}
		className={`Breadcrumb-List ${className}`}
		{...Props}
	/>
))

BreadcrumbList.displayName = 'BreadcrumbList'

export const BreadcrumbItem = forwardRef<
	HTMLLIElement,
	ComponentPropsWithoutRef<'li'>
>(({ className, ...Props }, Ref) => (
	<li
		ref={Ref}
		className={`Breadcrumb-Item ${className}`}
		{...Props}
	/>
))

BreadcrumbItem.displayName = 'BreadcrumbItem'

export const BreadcrumbLink = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<'a'> & {
		asChild?: boolean;
	}
>(({ asChild, className, ...Props }, Ref) => {
	const Comp = asChild ? Slot : 'a'
	return (
		<Comp
			ref={Ref}
			className={`Breadcrumb-Link ${className}`}
			{...Props}
		/>
	)
})

BreadcrumbLink.displayName = 'BreadcrumbLink'

export const BreadcrumbPage = forwardRef<
	HTMLSpanElement,
	ComponentPropsWithoutRef<'span'>
>(({ className, ...Props }, Ref) => (
	<span
		ref={Ref}
		role='link'
		aria-disabled='true'
		aria-current='page'
		className={`Breadcrumb-Page ${className}`}
		{...Props}
	/>
))

BreadcrumbPage.displayName = 'BreadcrumbPage'

export const BreadcrumbSeparator = ({ children, className, ...Props }: ComponentProps<'li'>) => (
	<li
		role='Presentation'
		aria-hidden='true'
		className={`Breadcrumb-Separator ${className}`}
		{...Props}
	>
		{children ?? <ChevronRight />}
	</li>
)

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

export const BreadcrumbEllipsis = ({ className, ...Props}: ComponentProps<'span'>) => (
	<span
		role='presentation'
		aria-hidden='true'
		className={`Breadcrumb-Ellipsis ${className}`}
		{...Props}
	>
		<MoreHorizontal className='Breadcrumb-Ellipsis-Horizontal' />
		<span className="Breadcrumb-Ellipsis-Container">More</span>
	</span>
)

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'