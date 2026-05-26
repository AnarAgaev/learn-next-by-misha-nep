import type {Post} from '@/types'

export async function getPostsBySearch(query: string): Promise<Post[]> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?query=${encodeURIComponent(query)}`,
		{
			// next: {
			// 	revalidate: 60,
			// },
		},
	)

	if (!response.ok) {
		throw new Error('Enable to fetch post list!')
	}

	const posts = await response.json()

	return posts as Post[]
}
