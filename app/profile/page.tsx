import {Heading, VStack} from '@chakra-ui/react'
import {getServerSession} from 'next-auth'
import {authConfig} from '@/configs/auth'

export default async function Profile() {
	const session = await getServerSession(authConfig)
	console.log('session', session)

	return (
		<VStack>
			<Heading>Profile</Heading>
			<pre>{session ? JSON.stringify(session) : 'No session'}</pre>
		</VStack>
	)
}
