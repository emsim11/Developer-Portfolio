import { useEffect, useState } from 'react'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export const GetImagesFromFileSystem = async (FilePath: string): Promise<string[]> => {
    try {
		const Response = await fetch(FilePath)
		const Files = await Response.json()
		return Files.filter((File: string) => File.endsWith('.jpg') || File.endsWith('.png'))
    } catch (Error) {
        console.warn(`Error Reading Directory ${FilePath}:`, Error)
        return []
    }
}

export const GetMarkdownFromFileSystem = async (FilePath: string): Promise<string | null> => {
    try {
		const Response = await fetch(FilePath)
		const Content = await Response.text()
		const ProcessedContent = await remark().use(remarkHtml).process(Content)
		const ProcessedHTML = ProcessedContent.toString()
		return ProcessedHTML
    } catch (Error) {
        console.warn(`Error Reading Markdown File ${FilePath}:`, Error)
        return null
    }
}

export const GetVideosFromFileSystem = async (FilePath: string): Promise<string[]> => {
    try {
		const Response = await fetch(FilePath)
		const Files = await Response.json()
		return Files.filter((File: string) => File.endsWith('.mp4') || File.endsWith('.webm'))
    } catch (Error) {
        console.warn(`Error Reading Directory ${FilePath}:`, Error)
        return []
    }
}

type GetDataFunctionType = () => Promise<any>

export const UseDataFetching = (GetDataFunction: GetDataFunctionType) => {
	const [Data, SetData] = useState(null)
	useEffect(() => {
		const FetchData = async () => {
			const Result = await GetDataFunction()
			SetData(Result)
		}
		FetchData()
	}, [GetDataFunction])
	return Data
}