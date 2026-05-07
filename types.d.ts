export type Post = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export type PostsStore = {
	posts: Post[]
	loading: boolean
	isError: boolean

	setPosts: (payload: {posts: Post[]}) => void
	getAllPosts: () => void
	getPostsBySearch: (payload: {query: string}) => void
}
