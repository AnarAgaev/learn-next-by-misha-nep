import {Box, Link as ChakraLink, Container, HStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import {ColorModeButton} from '@/components/ui/color-mode'

export default function TheHeader() {
	return (
		<Container fluid maxW="7xl" mt="5">
			<Box as="nav">
				<HStack justify="space-between">
					<HStack as="ul" gap="6">
						<Box as="li">
							<ChakraLink asChild {...linkStyles}>
								<NextLink href="/">Home</NextLink>
							</ChakraLink>
						</Box>
						<Box as="li">
							<ChakraLink asChild {...linkStyles}>
								<NextLink href="/about">About</NextLink>
							</ChakraLink>
						</Box>
						<Box as="li">
							<ChakraLink asChild {...linkStyles}>
								<NextLink href="/blog">Blog</NextLink>
							</ChakraLink>
						</Box>
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
