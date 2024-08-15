import { create as Create } from 'zustand'

interface NavStore {
	IsOpen: boolean
	Toggle: () => void
	Open: () => void
	Close: () => void
}

export const UseNavStore = Create<NavStore>((Set) => ({
	IsOpen: false,
	Toggle: () => Set((State) => ({ IsOpen: !State.IsOpen })),
	Open: () => Set({ IsOpen: true }),
	Close: () => Set({ IsOpen: false }),
}))