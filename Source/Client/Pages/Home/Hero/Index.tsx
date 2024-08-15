import { FC } from 'react'
import { HiArrowDown } from 'react-icons/hi'

import './Index.scss'
import { DeveloperName, DeveloperTitles } from '@/Constants/Developer'
import { TextLoop } from '@/Components/Atoms/Text-Loop/Index'
import { SocialButtons } from '@/Components/Molecules/Social-Buttons/Index'
import { Button } from '@/Components/Atoms/Button/Index'

export const HomepageHero: FC = () => {
	return (
		<section id='Home' className='Home-Section-Wrapper'>
			<div className='Hero'>
				<div className='Profile-Image'>
					{/* Developer Picture */}
					<img
						src='/Profile.png'
						alt='Profile Image Of The Developer'
						className='Developer-Profile-Image'
						width={335}
						height={335}
					/>
				</div>
				<div className='Hero-Container'>
					{/* Developer Name */}
					<div className='Developer-Info'>
						<h2 className='Welcome'>
							{`Hi, I'm`}
						</h2>
						<h1 className='Developer-Name'>
							{DeveloperName}
						</h1>
					</div>
					{/* Developer Roles */}
					<TextLoop
						LoopItems={DeveloperTitles}
						Implementation='Typewriter'
						ClassName='Developer-Roles'
					/>
					{/* Developer Social Links */}
					<SocialButtons
						IconSize={40}
						ExtraClasses='Hero-Social-Buttons'
					/>
					{/* Homepage Section Links */}
					<div className='Homepage-Sections'>
						<div className='Homepage-Sections-Container'>
							<a href='#Projects-Section' className='Homepage-Section'>
								<Button Style='Gradient' ExtraClasses='Homepage-Section'>
									Projects
								</Button>
							</a>
							<a href='#About-Me' className='Homepage-Section'>
								<Button Style='Ghost' ExtraClasses='Homepage-Section'>
									About
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Jump To About Button */}
			<div className='About-Section-Button'>
				<a href='#About-Me'>
					<HiArrowDown size={35} className='About-Section-Button-Icon' />
				</a>
			</div>
		</section>
	)
}