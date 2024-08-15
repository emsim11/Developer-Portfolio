import { useEffect, useState } from 'react'

export const UseMediaQuery = (Query: string): boolean => {
	const GetMatches = (Query: string): boolean => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(Query).matches
		}
		return false
	}
	const [Matches, SetMatches] = useState<boolean>(GetMatches(Query))
	const HandleChange = () => {
		SetMatches(GetMatches(Query))
	}
	useEffect(() => {
		const MatchMedia = window.matchMedia(Query)
		HandleChange()
		MatchMedia.addEventListener('change', HandleChange)
		return () => {
			MatchMedia.removeEventListener('change', HandleChange)
		}
	}, [Query])
	return Matches
}