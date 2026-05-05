'use client'

import {Box, Link as ChakraLink, Heading, Text, VStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import {useEffect, useState} from 'react'
import type {Post} from '@/helpers'
import {getAllPosts} from '@/helpers'

export function BlogList() {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		getAllPosts()
			.then(setPosts)
			.finally(() => setLoading(false))
	}, [])

	return (
		<VStack w="full" align="start">
			<Heading>Blog</Heading>
			{loading ? (
				<Text>Loading...</Text>
			) : (
				<VStack w="full" align="start" as="ul">
					{posts.map((post) => (
						<Box as="li" key={post.id}>
							<ChakraLink asChild>
								<NextLink href={`/blog/${post.id}`}>{post.title}</NextLink>
							</ChakraLink>
						</Box>
					))}
				</VStack>
			)}
		</VStack>
	)
}
