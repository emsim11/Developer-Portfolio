import { useMemo } from 'react'
import Fuse from 'fuse.js'

import { Database } from '@/Interfaces/Layout'
import { Material } from '@/Interfaces/Material'

export const UseFuseSearch = <T extends Material>(
	ItemsMap: Database<T>,
	SearchTerm: string,
	SearchKeys: string[],
): string[] => {
	/* Enhanced Search Options To Handle Nested Arrays */
	const SearchOptions = useMemo(() => ({
		Keys: SearchKeys.map((SearchKey) => {
			if (SearchKey.includes('Skills')) {
				return {
					Name: SearchKey,
					GetFn: (Item: T) => Item.Skills.map((Skill) => Skill.toString())
				}
			}
			return SearchKey
		}),
		threshold: 0.3, /* Fixed Threshold */
		includeScore: true, /* Optional: Include Scoring To Debug Or Refine Searches */
	}), [SearchKeys])
	const ItemsArray: T[] = useMemo(() => Object.values(ItemsMap), [ItemsMap]) /* Convert Hash Map Into Array For Fuse.js */
	const Fuses = useMemo(() => new Fuse(ItemsArray, SearchOptions), [ItemsArray, SearchOptions]) /* Initialize Fuse With Items Array & Search Options */
	/* Perform The Search */
	const SearchedItems = useMemo(() => {
		return SearchTerm
			? Fuses.search(SearchTerm).map((SearchResult) => SearchResult.item)
			: ItemsArray
	}, [Fuses, ItemsArray, SearchTerm])
	/* Create Reverse Lookup Map For ITem Names To Keys */
	const NameToKeyMap = useMemo(() => {
		return Object.keys(ItemsMap).reduce((Accumulator, Key) => {
			const Item = ItemsMap[Key]
			Accumulator[Item.Name] = Key
			return Accumulator
		}, {} as { [Name: string]: string })
	}, [ItemsMap])
	/* Convert Searched Items Back Into Hashmap Using Reverse Lookup */
	const FilteredItemsMap = useMemo(() => {
		return SearchedItems.reduce((Accumulator, Item) => {
			const Key = NameToKeyMap[Item.Name]
			if (Key) {
				Accumulator[Key] = Item
			}
			return Accumulator
		}, {} as Database<T>)
	}, [SearchedItems, NameToKeyMap])
	return Object.keys(FilteredItemsMap)
}