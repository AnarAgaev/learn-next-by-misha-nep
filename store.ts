import {create} from 'zustand'
import {getAllPosts, getPostsBySearch} from '@/helpers'
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
		const posts = await getAllPosts()
		set({posts, loading: false})
	},

	getPostsBySearch: async ({query}) => {
		set({loading: true})
		const posts = await getPostsBySearch(query)
		set({posts, loading: false})
	},
}))

export default usePosts
