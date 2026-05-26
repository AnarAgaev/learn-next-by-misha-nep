import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {getAllPosts, getPostsBySearch} from '@/helpers'
import type {PostsStore} from '@/types'

const usePosts = create<PostsStore>()(
	devtools(
		(set, _get) => ({
			posts: [],
			loading: false,
			initialized: false,
			isError: false,

			getAllPosts: async () => {
				set({loading: true}, false, 'getAllPosts/pending')
				const posts = await getAllPosts()
				set(
					{posts, loading: false, initialized: true},
					false,
					'getAllPosts/fulfilled',
				)
			},

			getPostsBySearch: async ({query}) => {
				set({loading: true}, false, 'getPostsBySearch/pending')
				const posts = await getPostsBySearch(query)
				set({posts, loading: false}, false, 'getPostsBySearch/fulfilled')
			},
		}),
		{name: 'PostsStore'},
	),
)

export default usePosts
