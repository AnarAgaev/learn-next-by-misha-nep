import {cookies, headers} from 'next/headers'
import {redirect} from 'next/navigation'
import {NextResponse} from 'next/server'

export async function DELETE(
	request: Request,
	{params}: {params: Promise<{slug: string}>},
) {
	const {slug} = await params

	// Getting Headers or Cookies fo the request
	const headerList = await headers()
	const userKey = headerList.get('user_api_secret_key')
	const type = headerList.get('Content-Type')

	const cookieList = await cookies()
	const cookie1 = cookieList.get('Cookie_1')

	// Request to DB for delete slug post

	// After valid delete request we can redirect user to the some page, etc. home
	// redirect('/blog')

	return NextResponse.json({
		status: 'done',
		slug: slug,
		headers: {userKey, type},
		cookies: {cookie1},
		secretUserKey: process.env.SECRET_KEY || 'not available',
	})
}
