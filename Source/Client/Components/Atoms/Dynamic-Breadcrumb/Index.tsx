import { FC, Fragment } from 'react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../Breadcrumb/Index'

interface DynamicBreadcrumbPair {
	Name: string
	Path?: string
}

interface DynamicBreadcrumbProps {
	Breadcrumbs: DynamicBreadcrumbPair[];
}

export const DynamicBreadcrumb: FC<DynamicBreadcrumbProps> = ({ Breadcrumbs }) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{Breadcrumbs.map((Breadcrumb, Index) => (
					<Fragment key={Index}>
						<BreadcrumbItem>
							{Breadcrumb.Path ? (
								<BreadcrumbLink href={Breadcrumb.Path}>
									{Breadcrumb.Name}
								</BreadcrumbLink>
							) : (
								Breadcrumb.Name /* Display Name Directly If No Path Is Provided */
							)}
						</BreadcrumbItem>
						{Index < Breadcrumbs.length - 1 && <BreadcrumbSeparator />}
					</Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}