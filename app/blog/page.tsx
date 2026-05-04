import {Box, Link as ChakraLink, Heading, VStack} from '@chakra-ui/react'
import type {Metadata} from 'next'
import NextLink from 'next/link'

interface Post {
	userId: number
	id: number
	title: string
	completed: boolean
}

async function getData(): Promise<Post[]> {
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

export const metadata: Metadata = {
	title: 'Blog | Next app',
}

export default async function BlogPage() {
	const posts = await getData()

	return (
		<VStack w="full" align="start">
			<Heading>Blog</Heading>
			<VStack w="full" align="start" as="ul">
				{posts.map((post) => (
					<Box as="li" key={post.id}>
						<ChakraLink asChild>
							<NextLink href={`/blog/${post.id}`}>{post.title}</NextLink>
						</ChakraLink>
					</Box>
				))}
			</VStack>
		</VStack>
	)
}
