import Link from 'next/link'

export default function TheHeader() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__list">
					<Link className="header__item" href="/">
						Home
					</Link>
					<Link className="header__item" href="/blog">
						Blog
					</Link>
					<Link className="header__item" href="/about">
						About
					</Link>
				</nav>
			</div>
		</header>
	)
}
