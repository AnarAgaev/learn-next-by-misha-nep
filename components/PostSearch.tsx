'use client'

import {Button, Field, Input, Stack} from '@chakra-ui/react'
import {type FormEventHandler, useState} from 'react'
import {getPostsBySearch} from '@/helpers'
import type {Post} from '@/types'

type Props = {
	onSearch: (posts: Post[]) => void
}

export const PostSearch = ({onSearch}: Props) => {
	const [search, setSearch] = useState<string>('')
	const [isError, setError] = useState<boolean>(false)

	const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()

		if (search === '') {
			setError(true)
			return
		}

		const posts = await getPostsBySearch(search)

		onSearch(posts)
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
				<Button type="submit">Submit</Button>
			</Stack>
		</form>
	)
}
