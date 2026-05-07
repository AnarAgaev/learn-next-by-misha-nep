import {Heading, VStack} from '@chakra-ui/react'
import type {Metadata} from 'next'
import {BlogList} from '@/components'

export const metadata: Metadata = {
	title: 'Blog posts',
}

export default function BlogPage() {
	return (
		<VStack w="full" align="start" gap="5">
			<Heading>Blog</Heading>
			<BlogList />
		</VStack>
	)
}
