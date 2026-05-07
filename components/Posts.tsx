import {Box, Link as ChakraLink, VStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import type {Post} from '@/types'

type Props = {posts: Post[]}

export const Posts = ({posts}: Props) => {
	return (
		<VStack w="full" align="start" as="ul">
			{posts.map((post) => (
				<Box as="li" key={post.id}>
					<ChakraLink asChild>
						<NextLink href={`/blog/${post.id}`}>{post.title}</NextLink>
					</ChakraLink>
				</Box>
			))}
		</VStack>
	)
}
