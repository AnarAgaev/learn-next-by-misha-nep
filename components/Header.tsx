'use client'

import {Box, Link as ChakraLink, Container, HStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import {usePathname} from 'next/navigation'
import {signIn, signOut, useSession} from 'next-auth/react'
import {ColorModeButton} from '@/components/ui/color-mode'

export type NavLinks = {
	id: number
	url: string
	label: string
}[]

export function Header() {
	const pathName = usePathname()
	const session = useSession()

	console.log('session', session)

	return (
		<Container fluid maxW="7xl" mt="5">
			<Box as="nav">
				<HStack justify="space-between">
					<HStack as="ul" gap="6">
						{navLinks.map((link) => {
							const isActiveLink =
								link.url === '/'
									? pathName === '/'
									: pathName.startsWith(link.url)

							return (
								<Box key={link.id} as="li">
									<ChakraLink
										asChild
										{...linkStyles}
										color={isActiveLink ? 'orange' : 'inherit'}
										// pointerEvents={isActiveLink ? 'none' : 'initial'}
									>
										<NextLink href={link.url}>{link.label}</NextLink>
									</ChakraLink>
								</Box>
							)
						})}
						{session?.data && (
							<Box as="li">
								<ChakraLink
									asChild
									{...linkStyles}
									color={pathName.startsWith('/profile') ? 'orange' : 'inherit'}
								>
									<NextLink href="/profile">Profile</NextLink>
								</ChakraLink>
							</Box>
						)}
						{!session?.data ? (
							<Box as="li">
								<ChakraLink asChild {...linkStyles}>
									<NextLink href="signin">Sign In</NextLink>
								</ChakraLink>
							</Box>
						) : (
							<Box as="li">
								<ChakraLink asChild {...linkStyles}>
									<NextLink
										href="#"
										onClick={() =>
											signOut({
												callbackUrl: '/',
											})
										}
									>
										Sign Out
									</NextLink>
								</ChakraLink>
							</Box>
						)}
					</HStack>
					<ColorModeButton />
				</HStack>
			</Box>
		</Container>
	)
}

const linkStyles = {
	fontSize: 'md',
	fontWeight: 'bold',
	textDecor: 'none',
	transition: 'opacity .2s linear',
	_hover: {
		opacity: 0.7,
	},
}

const navLinks: NavLinks = [
	{
		id: 1,
		url: '/',
		label: 'Home',
	},
	{
		id: 2,
		url: '/about',
		label: 'About',
	},
	{
		id: 3,
		url: '/blog',
		label: 'Blog',
	},
]
