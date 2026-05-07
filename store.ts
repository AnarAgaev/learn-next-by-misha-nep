import {create} from 'zustand'
import type {PostsStore} from '@/types'

const usePosts = create<PostsStore>()((set, _get) => ({
	posts: [],
	loading: false,
	isError: false,

	setPosts: ({posts}) => {
		set({posts})
	},

	getAllPosts: async () => {
		set({loading: true})

		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_limit=20',
			{
				next: {
					revalidate: 60,
				},
			},
		)

		if (!response.ok) {
			set({loading: false, isError: true})
			return
			// throw new Error('Enable to fetch post list!')
		}

		const posts = await response.json()

		set({posts, loading: false})
	},

	getPostsBySearch: async ({query}) => {
		set({loading: true})

		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(query)}`,
			{
				next: {
					revalidate: 60,
				},
			},
		)

		if (!response.ok) {
			set({loading: false, isError: true})
			return
			// throw new Error('Enable to fetch post list by search query!')
		}

		const posts = await response.json()

		set({posts, loading: false})
	},
}))

export default usePosts
