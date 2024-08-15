import { ComponentProps, createContext, forwardRef, HTMLAttributes, KeyboardEvent, useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaViewportRefType, type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import './Index.scss'
import { Button } from '../Button/Index'

export type CarouselAPI = UseEmblaCarouselType[1]

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>

type CarouselOptions = UseCarouselParameters[0]

type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	Options?: CarouselOptions
	Plugins?: CarouselPlugin
	Orientation?: 'Horizontal' | 'Vertical'
	SetAPI?: (API: CarouselAPI) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[0]
	scrollPrevious: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
} & CarouselProps

const CarouselContext = createContext<CarouselContextProps | null>(null)

const UseCarousel = () => {
	const Context = useContext(CarouselContext)
	if (!Context) {
		throw new Error('UseCarousel() Must Be Used Within A <Carousel />')
	}
	return Context
}

export const Carousel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CarouselProps>(
    ({
        Orientation = 'Horizontal',
        Options,
        SetAPI,
        Plugins,
        className,
        children,
        ...Props
    }, Ref) => {
        const [CarouselRef, API] = useEmblaCarousel(
            {
                ...Options,
                axis: Orientation === 'Horizontal' ? 'x' : 'y',
            },
            Plugins,
        )
        const [CanScrollPrevious, SetCanScrollPrevious] = useState(false)
        const [CanScrollNext, SetCanScrollNext] = useState(false)
        const OnSelect = useCallback((API: CarouselAPI) => {
            if (!API) {
                return
            }
            SetCanScrollPrevious(API.canScrollPrev())
            SetCanScrollNext(API.canScrollNext())
        }, [])
        const ScrollPrevious = useCallback(() => {
            API?.scrollPrev()
        }, [API])
        const ScrollNext = useCallback(() => {
            API?.scrollNext()
        }, [API])
        const HandleKeyDown = useCallback((Event: KeyboardEvent<HTMLDivElement>) => {
            if (Event.key === 'ArrowLeft') {
                Event.preventDefault()
                ScrollPrevious()
            } else if (Event.key === 'ArrowRight') {
                Event.preventDefault()
                ScrollNext()
            }
        }, [ScrollPrevious, ScrollNext])
        useEffect(() => {
            if (!API || !SetAPI) {
                return
            }
            SetAPI(API)
        }, [API, SetAPI])
        useEffect(() => {
            if (!API) {
                return
            }
            OnSelect(API)
            API?.on('reInit', OnSelect)
            API?.on('select', OnSelect)
            return () => {
                API?.off('select', OnSelect)
            }
        }, [API, OnSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef: CarouselRef,
                    api: API as unknown as EmblaViewportRefType,
                    Options,
                    Orientation: Orientation || (Options?.axis === 'y' ? 'Vertical' : 'Horizontal'),
                    scrollPrevious: ScrollPrevious,
                    scrollNext: ScrollNext,
                    canScrollPrev: CanScrollPrevious,
                    canScrollNext: CanScrollNext,
                }}
            >
                <div
                    ref={Ref}
                    onKeyDownCapture={HandleKeyDown}
                    className={`Carousel ${className ? className : ''}`}
                    role='region'
                    aria-roledescription='carousel'
                    {...Props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    }
)

Carousel.displayName = 'Carousel'

export const CarouselContent = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...Props}, Ref) => {
	const { carouselRef, Orientation} = UseCarousel()
	return (
		<div ref={Ref} className='Carousel-Content'>
			<div
				ref={Ref}
				className={`Carousel-Content-Container ${Orientation === 'Horizontal' ? 'Carousel-Content-Horizontal' : 'Carousel-Content-Vertical'} ${className ? className : ''}`}
				{...Props}
			/>
		</div>
	)
})

CarouselContent.displayName = 'CarouselContent'

export const CarouselItem = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement>
>(({ className, ...Props}, Ref) => {
	const { Orientation } = UseCarousel()
	return (
		<div
			ref={Ref}
			role='group'
			aria-roledescription='slide'
			className={`Carousel-Item ${Orientation === 'Horizontal' ? 'Carousel-Item-Horizontal' : 'Carousel-Item-Vertical'} ${className ? className : ''}`}
			{...Props}
		/>
	)
})

CarouselItem.displayName = 'CarouselItem'

export const CarouselPrevious = forwardRef<
	HTMLButtonElement,
	ComponentProps<typeof Button>
>(({ className, Style = 'Icon', Size = 'Icon-Size', ...Props}, Ref) => {
	const { Orientation, scrollPrevious, canScrollPrev } = UseCarousel()
	return (
		<Button
			ref={Ref}
			Style={Style}
			Size={Size}
			ExtraClasses={`Carousel-Previous ${Orientation === 'Horizontal' ? 'Carousel-Previous-Horizontal' : 'Carousel-Previous-Vertical'} ${className ? className : ''}`}
			disabled={!canScrollPrev}
			onClick={scrollPrevious}
			{...Props}
		>
			<ArrowLeft className='Carousel-Arrow' />
			<span className='Carousel-Span'>Previous Slide</span>
		</Button>
	)
})

CarouselPrevious.displayName = 'CarouselPrevious'

export const CarouselNext = forwardRef<
	HTMLButtonElement,
	ComponentProps<typeof Button>
>(({ className, Style = 'Icon', Size = 'Icon-Size', ...Props}, Ref) => {
	const { Orientation, scrollNext, canScrollNext } = UseCarousel()
	return (
		<Button
			ref={Ref}
			Style={Style}
			Size={Size}
			ExtraClasses={`Carousel-Next ${Orientation === 'Horizontal' ? 'Carousel-Next-Horizontal' : 'Carousel-Next-Vertical'} ${className ? className : ''}`}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...Props}
		>
			<ArrowRight className='Carousel-Arrow' />
			<span className='Carousel-Span'>Next Slide</span>
		</Button>
	)
})

CarouselNext.displayName = 'CarouselNext'