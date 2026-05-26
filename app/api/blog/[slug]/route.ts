import {NextResponse} from 'next/server'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function GET(
	_request: Request,
	{params}: {params: Promise<{slug: string}>},
) {
	const {slug} = await params

	console.log('${API_URL}/posts/${slug}', `${API_URL}/posts/${slug}`)

	const response = await fetch(
		`${API_URL}/posts/${slug}`,
		// 	{
		// 	next: {revalidate: 60},
		// }
	)

	if (!response.ok) {
		return NextResponse.json(
			{message: `Post ${slug} not found`},
			{status: response.status},
		)
	}

	const post = await response.json()

	return NextResponse.json(post)
}

export async function DELETE(
	_request: Request,
	{params}: {params: Promise<{slug: string}>},
) {
	const {slug} = await params

	const response = await fetch(`${API_URL}/posts/${slug}`, {
		method: 'DELETE',
	})

	if (!response.ok) {
		return NextResponse.json(
			{message: `Unable to delete post ${slug}`},
			{status: response.status},
		)
	}

	return NextResponse.json({status: 'done', slug})
}
