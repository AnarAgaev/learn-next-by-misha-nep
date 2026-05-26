import {NextResponse} from 'next/server'
import type {Post} from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url)

	const query = searchParams.get('query')
	const page = searchParams.get('page') ?? '1'
	const perPage = searchParams.get('perPage') ?? '10'

	// Build json-server URL: full-text search or paginated list
	const target = query
		? `${API_URL}/posts?title:contains=${encodeURIComponent(query)}`
		: `${API_URL}/posts?_page=${page}&_per_page=${perPage}`

	const response = await fetch(
		target,
		// {next: {revalidate: 60}}
	)

	if (!response.ok) {
		return NextResponse.json(
			{message: 'Unable to fetch posts from json-server'},
			{status: response.status},
		)
	}

	const data = await response.json()

	// Paginated requests return {data: Post[]}, search returns Post[]
	const posts: Post[] = Array.isArray(data) ? data : data.data

	return NextResponse.json(posts)
}

export async function POST(request: Request) {
	const body = await request.json()

	const response = await fetch(`${API_URL}/posts`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(body),
	})

	if (!response.ok) {
		return NextResponse.json(
			{message: 'Unable to create post'},
			{status: response.status},
		)
	}

	const created = await response.json()

	return NextResponse.json(created, {status: 201})
}
