import { useFiles } from '@/queries/useFiles'

export default function Files() {
	const { files, isLoading, create } = useFiles()

	const submitHandler = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData.entries())
		create([data.files])
	}

	return (
		<div>
			files
			{isLoading && 'Loading...'}
			{files.map(file => {
				return (
					<img
          width={100}
						key={file.id}
						src={`${import.meta.env.VITE_APP_BASE_URL}/upload/${file.path}`}
					/>
				)
			})}
			<form onSubmit={submitHandler}>
				<input
					type='file'
					name='files'
				/>
				<button className='block bg-red-400 mt-4'>create</button>
			</form>
		</div>
	)
}
