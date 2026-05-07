import {Heading, VStack} from '@chakra-ui/react'
import type {Metadata} from 'next'
import {PostSearch, Posts} from '@/components'

export const metadata: Metadata = {
	title: 'Blog posts',
}

export default function BlogPage() {
	return (
		<VStack w="full" align="start" gap="6">
			<Heading>Blog</Heading>
			<PostSearch />
			<Posts />
		</VStack>
	)
}
