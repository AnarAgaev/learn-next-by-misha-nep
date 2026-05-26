import type {AuthOptions} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		Credentials({
			credentials: {
				email: {label: 'email', type: 'email', required: true},
				password: {label: 'password', type: 'password', required: true},
			},

			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					return null
				}

				const currentUser = USERS.find(
					(user) => user.email === credentials.email,
				)

				if (currentUser && currentUser.password === credentials.password) {
					// biome-ignore lint/correctness/noUnusedVariables: Don't take back user Password
					const {password, ...userWithoutPass} = currentUser

					return userWithoutPass as User
				}

				return null
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
}

interface User {
	id: string
	username: string
	firstName: string
	lastName: string
	email: string
	password: string
	avatar: string
	role: 'user' | 'moderator' | 'admin'
	isActive: boolean
	createdAt: string // ISO дата строка
}

const USERS: User[] = [
	{
		id: '1',
		username: 'alex_k',
		firstName: 'Алексей',
		lastName: 'Ковалёв',
		email: '111@example.com',
		password: '111',
		avatar: 'https://i.pravatar.cc/300?u=alex',
		role: 'user',
		isActive: true,
		createdAt: '2025-01-15T10:00:00Z',
	},
	{
		id: '2',
		username: 'maria_design',
		firstName: 'Мария',
		lastName: 'Смирнова',
		email: '222@example.com',
		password: '222',
		avatar: 'https://i.pravatar.cc/300?u=maria',
		role: 'moderator',
		isActive: true,
		createdAt: '2025-02-20T14:30:00Z',
	},
	{
		id: '3',
		username: 'dmitry_dev',
		firstName: 'Дмитрий',
		lastName: 'Попов',
		email: '333@example.com',
		password: '333',
		avatar: 'https://i.pravatar.cc/300?u=dmitry',
		role: 'admin',
		isActive: true,
		createdAt: '2024-11-10T09:15:00Z',
	},
	{
		id: '4',
		username: 'anna_girl',
		firstName: 'Анна',
		lastName: 'Иванова',
		email: '444@example.com',
		password: '444',
		avatar: 'https://i.pravatar.cc/300?u=anna',
		role: 'user',
		isActive: true,
		createdAt: '2025-03-05T16:45:00Z',
	},
	{
		id: '5',
		username: 'sergey_crypto',
		firstName: 'Сергей',
		lastName: 'Морозов',
		email: '555@example.com',
		password: '555',
		avatar: 'https://i.pravatar.cc/300?u=sergey',
		role: 'user',
		isActive: false,
		createdAt: '2024-12-01T11:20:00Z',
	},
	{
		id: '6',
		username: 'victoria_ph',
		firstName: 'Виктория',
		lastName: 'Петрова',
		email: '666@example.com',
		password: '666',
		avatar: 'https://i.pravatar.cc/300?u=victoria',
		role: 'user',
		isActive: true,
		createdAt: '2025-04-12T08:10:00Z',
	},
	{
		id: '7',
		username: 'nikita_js',
		firstName: 'Никита',
		lastName: 'Соколов',
		email: '777@example.com',
		password: '777',
		avatar: 'https://i.pravatar.cc/300?u=nikita',
		role: 'user',
		isActive: true,
		createdAt: '2025-02-28T13:55:00Z',
	},
	{
		id: '8',
		username: 'elena_hr',
		firstName: 'Елена',
		lastName: 'Фёдорова',
		email: '888@example.com',
		password: '888',
		avatar: 'https://i.pravatar.cc/300?u=elena',
		role: 'moderator',
		isActive: true,
		createdAt: '2024-10-18T17:25:00Z',
	},
	{
		id: '9',
		username: 'pavel_backend',
		firstName: 'Павел',
		lastName: 'Васильев',
		email: '999@example.com',
		password: '999',
		avatar: 'https://i.pravatar.cc/300?u=pavel',
		role: 'user',
		isActive: true,
		createdAt: '2025-01-30T12:40:00Z',
	},
]
