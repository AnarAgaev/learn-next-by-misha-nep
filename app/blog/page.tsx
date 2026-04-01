import type {Metadata} from 'next'
import Link from 'next/link'

interface Post {
	userId: number
	id: number
	title: string
	completed: boolean
}

async function getData(): Promise<Post[]> {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 60,
		},
	})

	if (!response.ok) {
		throw new Error('Enable to fetch post list!')
	}

	const posts = await response.json()

	return posts as Post[]
}

export const metadata: Metadata = {
	title: 'Blog | Next app',
}

export default async function Blog() {
	const posts = await getData()

	return (
		<>
			<h1>Blog pages</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
