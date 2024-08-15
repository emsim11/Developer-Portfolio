import { FC, useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'

import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'

interface SimpleTextLoopProps {
    LoopItems: string[]
    Delay: number
    ClassName: string
}

export const SimpleTextLoop: FC<SimpleTextLoopProps> = ({
    LoopItems,
    Delay,
    ClassName,
}) => {
    const [CurrentItemIndex, SetCurrentItemIndex] = useState<number>(0)
    const IsMounted: boolean = UseIsMounted()
    useEffect(() => {
        const Interval = setInterval(() => {
            SetCurrentItemIndex((PreviousIndex) => (PreviousIndex + 1) % LoopItems.length)
        }, Delay)
        return () => clearInterval(Interval)
    }, [LoopItems, Delay])
    if (!IsMounted) {
        return null
    }
    return (
        <Motion.span
            key={CurrentItemIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
                opacity: 0,
                y: 10,
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                },
            }}
            transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: 0.5,
            }}
            style={{ transitionProperty: 'opacity, transform' }}
            className={ClassName}
        >
            {LoopItems[CurrentItemIndex]}
        </Motion.span>
    )
}