import type {Metadata} from 'next'
import {BlogList} from '@/components'

export const metadata: Metadata = {
	title: 'Blog posts',
}

export default function BlogPage() {
	return <BlogList />
}
