import {Container, HStack} from '@chakra-ui/react'

export default function TheFooter() {
	return (
		<Container fluid maxW="7xl" mb="5" as="footer">
			<HStack as="ul" justify="center" gap="6">
				Footer
			</HStack>
		</Container>
	)
}
