import type {Post} from '@/types'

export async function getPostsBySearch(query: string): Promise<Post[]> {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`,
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
