'use client'

import {Box, Link as ChakraLink, Text, VStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import {useEffect} from 'react'
import {useShallow} from 'zustand/shallow'
import usePosts from '@/store'

export const Posts = () => {
	const [posts, loading, getAllPosts] = usePosts(
		useShallow((state) => [state.posts, state.loading, state.getAllPosts]),
	)

	useEffect(() => {
		getAllPosts()
	}, [getAllPosts])

	return (
		<>
			{loading ? (
				<Text>Loading ...</Text>
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
		</>
	)
}
