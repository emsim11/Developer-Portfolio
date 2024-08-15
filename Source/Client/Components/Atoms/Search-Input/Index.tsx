import { FC, useEffect, useState } from 'react'
import { Search, SendHorizontal, X } from 'lucide-react'

import './Index.scss'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'

interface SearchInputProps {
	SearchTerm: string
	UpdateSearchTerm: (NewSearchTerm: string) => void
	Placeholder?: string
	ClassName?: string
}

export const SearchInput: FC<SearchInputProps> = ({
	SearchTerm,
	UpdateSearchTerm,
	Placeholder = 'Search',
	ClassName,
	...Props
}) => {
	const [LocalSearchTerm, SetLocalSearchTerm] = useState(SearchTerm)
	const IsMounted: boolean = UseIsMounted()
	useEffect(() => {
		SetLocalSearchTerm(SearchTerm)
	}, [SearchTerm])
	if (!IsMounted) {
		return null
	}
	/* Clear Local Input Field */
	const HandleClearSearch = (): void => {
		SetLocalSearchTerm('')
	}
	const HandleSearch = (): void => {
		UpdateSearchTerm(LocalSearchTerm)
	}
	const IsSearchDisabled: boolean = !LocalSearchTerm
	return (
		<div className='Search-Input'>
			<input
				type='text'
				value={LocalSearchTerm}
				onChange={(Event) => SetLocalSearchTerm(Event.target.value)}
				onKeyDown={(Event) => {
					if (Event.key === 'Enter') {
						HandleSearch()
					}
				}}
				placeholder={Placeholder}
				className={`Search-Input-Value ${ClassName}`}
				{...Props}
			/>
			<Search className='Search-Input-Search' />
			<div className='Search-Input-Container'>
				{LocalSearchTerm && (
					<X onClick={HandleClearSearch} className='Search-Input-Clear-Icon' />
				)}
				<button
					onClick={HandleSearch}
					disabled={IsSearchDisabled}
					className={`Search-Input-Button ${IsSearchDisabled ? 'Search-Disabled' : 'Search-Enabled'}`}
				>
					<SendHorizontal />
				</button>
			</div>
		</div>
	)
}