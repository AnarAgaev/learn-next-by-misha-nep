'use client'

import {Box, Link as ChakraLink, Container, HStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import {usePathname} from 'next/navigation'
import {ColorModeButton} from '@/components/ui/color-mode'

export type NavLinks = {
	id: number
	url: string
	label: string
}[]

type Props = {
	navLinks: NavLinks
}

export default function TheHeader(props: Props) {
	const pathName = usePathname()

	return (
		<Container fluid maxW="7xl" mt="5">
			<Box as="nav">
				<HStack justify="space-between">
					<HStack as="ul" gap="6">
						{props.navLinks.map((link) => {
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
										pointerEvents={isActiveLink ? 'none' : 'initial'}
									>
										<NextLink href={link.url}>{link.label}</NextLink>
									</ChakraLink>
								</Box>
							)
						})}
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
