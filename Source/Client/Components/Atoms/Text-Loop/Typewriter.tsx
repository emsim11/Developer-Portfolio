import { FC } from 'react'
import TypewriterComponent from 'typewriter-effect'

type TypeWriterTextLoopProps = {
    LoopItems: string[]
    ClassName: string
}

export const TypeWriterTextLoop: FC<TypeWriterTextLoopProps> = ({
    LoopItems,
    ClassName,
}) => {
    return (
        <div className={ClassName}>
			<TypewriterComponent
				options={{
					strings: LoopItems,
					autoStart: true,
					loop: true,
				}}
			/>
        </div>
    )
}