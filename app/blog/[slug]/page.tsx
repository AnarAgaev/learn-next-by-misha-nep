import {Heading, Text, VStack} from '@chakra-ui/react'
import type {Metadata} from 'next'
import type {Post} from '@/types'

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

export async function generateStaticParams() {
	const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then(
		(res) => res.json(),
	)

	return (posts as Post[]).map((post) => ({
		slug: post.id.toString(), // ! ВСЕГДА СТРОКА И ТОЛЬКО СТРОКА
	}))
}

async function getData(postId: string): Promise<PostDetail> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`,
		// {
		// 	next: {
		// 		revalidate: 60,
		// 	},
		// },
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
