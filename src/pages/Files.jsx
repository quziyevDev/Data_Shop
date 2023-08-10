import FileCard from '@/components/files/FileCard'
import FileUpload from '@/components/files/FileUpload'
import { useFiles } from '@/queries/useFiles'

export default function Files() {
	const { files } = useFiles()

	return (
		<div className='grid grid-cols-5 gap-4'>
			<FileUpload />
			{files.map(file => {
				return (
					<FileCard
						file={file}
						key={file.id}
					/>
				)
			})}
		</div>
	)
}
