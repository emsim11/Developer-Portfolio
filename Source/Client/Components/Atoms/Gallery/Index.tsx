import { FC, useEffect, useState } from 'react'
import { LiaImageSolid, LiaVideoSolid } from 'react-icons/lia'

import './Index.scss'
import { Carousel, CarouselAPI, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../Carousel/Index'
import { UseMediaQuery } from '@/Hooks/Use-Media-Query'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Tabs/Index'
import { VideoPlayer } from '../Video-Player/Index'

interface GalleryProps {
	Images?: string[]
	Videos?: string[]
}

export const Gallery: FC<GalleryProps> = ({ Images, Videos }) => {
	const [API, SetAPI] = useState<CarouselAPI>()
	const [Current, SetCurrent] = useState(0)
	const [Count, SetCount] = useState(0)
	const IsMobile: boolean = UseMediaQuery('(max-width: 768px)')
	const IsMounted: boolean = UseIsMounted()
	useEffect(() => {
		if (!API) {
			return
		}
		SetCount(API.scrollSnapList().length)
		SetCurrent(API.selectedScrollSnap() + 1)
		API.on('select', () => {
			SetCurrent(API.selectedScrollSnap() + 1)
		})
	}, [API])
	if (!IsMounted) {
		return null
	}
	/* If No Images Or Videos, Do Not Render Gallery */
	if (!Images && !Videos) {
		return null
	}
	return (
		<div className='Gallery'>
			{/* Media Preview */}
			<div className='Gallery-Container'>
				<Tabs defaultValue='Images' className='Gallery-Container'>
					{/* Images */}
					<TabsContent value='Images' className='Gallery-Container'>
						<Carousel SetAPI={SetAPI} className='Gallery-Carousel-Image'>
							<CarouselContent>
								{Array.from({ length: Images?.length ?? 0 }).map((_, Index) => (
									<CarouselItem key={Index}>
										<img
											key={Index}
											src={Images?.[Index] ?? ''}
											alt='Currently Active'
											width={2000}
											height={1125}
											className='Gallery-Image'
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							{!IsMobile && (
								<>
									<CarouselPrevious />
									<CarouselNext />
								</>
							)}
						</Carousel>
						<div className='Gallery-Slides'>
							Slide {Current} Of {Count}
						</div>
					</TabsContent>
					{/* Video Demos */}
					<TabsContent value='Demo'>
						<Carousel SetAPI={SetAPI} className='Gallery-Carousel-Video'>
							<CarouselContent>
								{Array.from({ length: Videos?.length ?? 0 }).map((_, Index) => (
									<CarouselItem key={Index}>
										<VideoPlayer Source={Videos?.[Index] ?? ''} ExtraClasses='Gallery-Video-Player' />
									</CarouselItem>
								))}
							</CarouselContent>
							{!IsMobile && (
								<>
									<CarouselPrevious />
									<CarouselNext />
								</>
							)}
						</Carousel>
						<div className='Gallery-Slides'>
							Slide {Current} Of {Count}
						</div>
					</TabsContent>
					{/* Tabs List */}
					{Images && Images.length > 0 && Videos && Videos.length > 0 && (
						<div className='Gallery-Tabs'>
							<TabsList className='Gallery-Tabs-List'>
								{/* Images */}
								{Images && Images.length > 0 && (
									<TabsTrigger value='Images' className='Gallery-Tabs-Images'>
										<LiaImageSolid fontSize={20} />
										<span>Images</span>
									</TabsTrigger>
								)}
								{/* Videos */}
								{Videos && Videos.length > 0 && (
									<TabsTrigger value='Demo' className='Gallery-Tabs-Videos'>
										<LiaVideoSolid fontSize={20} />
										<span>Videos</span>
									</TabsTrigger>
								)}
							</TabsList>
						</div>
					)}
				</Tabs>
			</div>
		</div>
	)
}