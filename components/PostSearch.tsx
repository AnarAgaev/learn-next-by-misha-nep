'use client'

import {Button, Field, HStack, Input, Stack, Text} from '@chakra-ui/react'
import {type FormEventHandler, useState} from 'react'
import useSWRMutation from 'swr/mutation'
import {getPostsBySearch} from '@/helpers'

export const PostSearch = () => {
	const [search, setSearch] = useState<string>('')
	const [isError, setError] = useState<boolean>(false)

	const {trigger, isMutating} = useSWRMutation(
		'posts',
		(_key, {arg}: {arg: string}) => getPostsBySearch(arg),
		{populateCache: true, revalidate: false},
	)

	const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		if (search === '') {
			setError(true)
			return
		}

		await trigger(search)
	}

	return (
		<form onSubmit={onSubmit} style={{width: '100%'}}>
			<Stack
				gap="4"
				align="flex-start"
				maxW="sm"
				border="sm"
				rounded="xl"
				p="4"
				w="full"
			>
				<Field.Root invalid={isError}>
					<Field.Label>Search post</Field.Label>
					<Input
						placeholder="Search post query"
						value={search}
						onChange={(event) => {
							setError(false)
							setSearch(event.target.value)
						}}
					/>
					<Field.ErrorText>Set search query</Field.ErrorText>
				</Field.Root>
				<HStack>
					<Button type="submit" loading={isMutating}>
						Submit
					</Button>
					{isMutating && <Text>Loading...</Text>}
				</HStack>
			</Stack>
		</form>
	)
}
