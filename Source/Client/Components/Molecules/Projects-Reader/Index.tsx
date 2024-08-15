import { UseIsMounted } from '@/Hooks/Use-Is-Mounted'
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { IoReaderOutline } from 'react-icons/io5'

type TabbedReaderProps = {
	Content: {
		Blog?: string
		Features?: string
	}
}

export const ProjectsReader: FC<TabbedReaderProps> = ({ Content }) => {
	const HasBlog: boolean = !!Content.Blog
	const HasFeatures: boolean = !!Content.Features
	const IsMounted: boolean = UseIsMounted()
	const [View, SetView] = useState<'Features' | 'Reflection'>('Features')
	const Message: MutableRefObject<string> = useRef(`View Features & Read Reflective Blog`)
	useEffect(() => {
		if (HasBlog && !HasFeatures) {
			SetView('Reflection')
			Message.current = `Read Reflective Blog`
		} else if (!HasBlog && HasFeatures) {
			SetView('Features')
			Message.current = `View Features`
		}
	}, [HasBlog, HasFeatures])
	if (!IsMounted) {
		return null
	}
	if (!HasBlog && !HasFeatures) {
		return null
	}
}

  const tabStyle: string = `
    text-2xl md:text-2xl font-bold
    data-[state=inactive]:text-neutral-400 dark:data-[state=inactive]:text-neutral-600
    data-[state=active]:shadow-none data-[state=active]:bg-transparent
    transition-all duration-500`;

  return (
    <Accordion type="single" collapsible className="mt-16">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger
          className="
            rounded-xl px-3
            border
            border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            bg-neutral-50 dark:bg-neutral-950
            shadow-sm hover:shadow-md
            transition-all duration-500 ease-in-out"
        >
          <div className="flex items-center space-x-3">
            <IoReaderOutline size={26} className="text-neutral-500" />
            <p
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                font-semibold
                "
            >
              {message.current}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-2">
          <div className="flex flex-col">
            <Tabs defaultValue={view} className="w-full">
              {/* Options */}
              {hasFeatures && hasBlog && (
                <div>
                  <TabsList
                    className="
                      mt-6 md:-ml-4
                      w-full md:w-auto
                      bg-transparent
                      flex-col md:flex-row
                      "
                  >
                    <TabsTrigger value="features" className={tabStyle}>
                      Features
                    </TabsTrigger>
                    <TabsTrigger value="reflection" className={tabStyle}>
                      Reflection
                    </TabsTrigger>
                  </TabsList>
                </div>
              )}
              {/* Content */}
              <TabsContent value="features">
                {!(hasFeatures && hasBlog) && <HeadingThree title="Features" />}
                <Reader content={content.features} size="lg:prose-md" />
              </TabsContent>
              <TabsContent value="reflection">
                {!(hasFeatures && hasBlog) && (
                  <HeadingThree title="Reflection" />
                )}
                <p className="text-neutral-600 dark:text-neutral-300 text-lg py-4">
                  This reflection provides insights into the journey of building
                  this project
                </p>
                <Reader content={content.blog} size="lg:prose-lg" />
              </TabsContent>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};