export type Post = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export async function getAllPosts(): Promise<Post[]> {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=20',
		{
			next: {
				revalidate: 60,
			},
		},
	)

	if (!response.ok) {
		throw new Error('Enable to fetch post list!')
	}

	const posts = await response.json()

	return posts as Post[]
}
