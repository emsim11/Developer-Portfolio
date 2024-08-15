import { FC } from 'react'

import { SimpleTextLoop } from './Simple'
import { TypeWriterTextLoop } from './Typewriter'
import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'

type TextLoopProps = {
    LoopItems: string[]
    Implementation: 'Simple' | 'Typewriter'
    ClassName: string
}

export const TextLoop: FC<TextLoopProps> = ({
    LoopItems,
    Implementation,
    ClassName,
}) => {
    const IsMounted: boolean = UseIsMounted();
    return (
        <>
            {IsMounted ? (
                <>
                    {Implementation === 'Typewriter' && (
                        <TypeWriterTextLoop ClassName={ClassName} LoopItems={LoopItems} />
                    )}

                    {Implementation === 'Simple' && (
                        <SimpleTextLoop ClassName={ClassName} LoopItems={LoopItems} Delay={3000} />
                    )}
                </>
            ) : (
                <div className={ClassName}>
                    {LoopItems[1]}
                </div>
            )}
        </>
    )
}