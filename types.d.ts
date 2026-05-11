export type Post = {
	userId: number
	id: number
	title: string
	body: string
}

export type PostsStore = {
	posts: Post[]
	loading: boolean
	isError: boolean

	setPosts: (payload: {posts: Post[]}) => void
	getAllPosts: () => void
	getPostsBySearch: (payload: {query: string}) => void
}
