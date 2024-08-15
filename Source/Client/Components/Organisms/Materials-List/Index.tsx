import { FC } from 'react'
import { GrAppsRounded } from 'react-icons/gr'

import './Index.scss'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/Atoms/Accordion/Index'
import { MaterialTab } from '../Materials-Tab/Index'

export interface MaterialTabsProps {
	MaterialKeys: string[]
	IsCollapsible?: boolean
}

export const MaterialsList: FC<MaterialTabsProps> = ({ MaterialKeys, IsCollapsible = true }) => {
	return IsCollapsible ? (
		<Accordion type='single' collapsible className='Materials-List-Accordion'>
			<AccordionItem value='Item-1'>
				<AccordionTrigger>
					<div className='Materials-List-Icon-Container'>
						<GrAppsRounded size={24} className='Materials-List-Icon' />
						<p className='Materials-List-Related-Materials'>
							Directly Related Material
						</p>
					</div>
				</AccordionTrigger>
				<AccordionContent className='Materials-List-Accordion-Content'>
					<MaterialTab MaterialKeys={MaterialKeys} />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	) : (
		<MaterialTab MaterialKeys={MaterialKeys} />
	)
}