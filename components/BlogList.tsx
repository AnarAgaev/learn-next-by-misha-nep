'use client'

import {Text} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {PostSearch, Posts} from '@/components'
import {getAllPosts} from '@/helpers'
import type {Post} from '@/types'

export function BlogList() {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		getAllPosts()
			.then(setPosts)
			.finally(() => setLoading(false))
	}, [])

	return (
		<>
			<PostSearch onSearch={setPosts} />
			{loading ? <Text>Loading...</Text> : <Posts posts={posts} />}
		</>
	)
}
