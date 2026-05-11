import {NextResponse} from 'next/server'

import {posts} from '../posts'

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url)

	const query = searchParams.get('query')
	const limit = searchParams.get('limit')

	let responsePosts = posts

	if (query) {
		responsePosts = responsePosts.filter((post) =>
			post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
		)
	}

	if (limit) {
		console.log('parseInt(limit, 10)', parseInt(limit, 10))
		responsePosts = responsePosts.slice(0, parseInt(limit, 10))
	}

	return NextResponse.json(responsePosts)
}

export async function POST(request: Request) {
	const body = await request.json()

	console.log(body)

	return NextResponse.json({body})
}
