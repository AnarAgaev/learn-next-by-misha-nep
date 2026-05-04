import {Heading, Text, VStack} from '@chakra-ui/react'
import type {Metadata} from 'next'

interface PostProps {
	params: Promise<{slug: string}>
}

interface PostDetail {
	userId: number
	id: number
	title: string
	body: string
}

export async function generateMetadata({params}: PostProps): Promise<Metadata> {
	const {slug} = await params

	const post = await getData(slug)

	return {
		title: post.title,
	}
}

async function getData(postId: string): Promise<PostDetail> {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			next: {
				revalidate: 60,
			},
		},
	)

	const post = await response.json()

	return post
}

export default async function PostPage({
	params,
}: PostProps): Promise<React.ReactNode> {
	const {slug} = await params

	const post = await getData(slug)

	return (
		<VStack align="start">
			<Heading>{post.title}</Heading>
			<Text>{post.body}</Text>
		</VStack>
	)
}
