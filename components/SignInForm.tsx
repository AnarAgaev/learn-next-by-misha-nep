'use client'

import {Button, Field, Heading, Input, VStack} from '@chakra-ui/react'
import {useRouter} from 'next/navigation'
import {signIn} from 'next-auth/react'
import type {SubmitEventHandler} from 'react'
import {useState} from 'react'

export const SignInForm = () => {
	const router = useRouter()

	const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)

		const response = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		})

		if (response && !response.error) {
			router.push('/profile')
		} else {
			console.log(response)
			setIsError(true)
		}
	}

	const [isError, setIsError] = useState<boolean>(false)

	return (
		<form onSubmit={handleSubmit}>
			<VStack w="50%" margin="0 auto">
				<Heading>Sign In</Heading>
				{/* <Field.Root invalid> */}
				<Field.Root invalid={isError}>
					<Field.Label>Email</Field.Label>
					<Input
						name="email"
						type="email"
						required
						placeholder="me@example.com"
						onInput={() => setIsError(false)}
					/>
					<Field.ErrorText>This is an error text</Field.ErrorText>
				</Field.Root>
				<Field.Root invalid={isError}>
					<Field.Label>Password</Field.Label>
					<Input
						name="password"
						type="password"
						required
						onInput={() => setIsError(false)}
					/>
					<Field.ErrorText>This is an error text</Field.ErrorText>
				</Field.Root>
				<Button type="submit">Sign In</Button>
			</VStack>
		</form>
	)
}
