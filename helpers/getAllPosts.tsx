import type {Post} from '@/types'

export async function getAllPosts(): Promise<Post[]> {
	const response = await fetch(
		// `${process.env.NEXT_PUBLIC_BASE_URL}?_limit=10`,
		`/api/blog?limit=10`,
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
