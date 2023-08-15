import FileCard from '@/components/files/FileCard'
import FileUpload from '@/components/files/FileUpload'
import { useFiles } from '@/queries/useFiles'

export default function Files() {
	const { files, create, remove } = useFiles()

	return (
		<div className='grid grid-cols-5 gap-4'>
			<FileUpload create={create} />
			{files.map(file => {
				return (
					<FileCard
						file={file}
						key={file.id}
						remove={remove}
					/>
				)
			})}
		</div>
	)
}
