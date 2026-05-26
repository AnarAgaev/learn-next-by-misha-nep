import type {Post} from '@/types'

export async function getAllPosts(): Promise<Post[]> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?page=1&perPage=10`,
		{
			// cache: 'force-cache',
			// next: {
			// 	revalidate: 10,
			// },
		},
	)

	if (!response.ok) {
		throw new Error('Enable to fetch post list!')
	}

	const posts = await response.json()

	return posts as Post[]
}
