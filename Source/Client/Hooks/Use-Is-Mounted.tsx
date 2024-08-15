import { useEffect, useState } from 'react'

export const UseIsMounted = () => {
	const [IsMounted, SetIsMounted] = useState(false)
	useEffect(() => {
		SetIsMounted(true)
		return () => SetIsMounted(false)
	}, [])
	return IsMounted
}