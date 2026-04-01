'use client'

export default function ErrorPost({error}: {error: Error}) {
	return (
		<>
			<h1>Oops!</h1>
			<br />
			<p>
				There's an Error,
				<br />
				<br />
				Here's:
				<br />
				<i>{error.message}</i>
			</p>
		</>
	)
}
