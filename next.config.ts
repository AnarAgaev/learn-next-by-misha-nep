import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	experimental: {
		optimizePackageImports: ['@chakra-ui/react'],
	},
	// env: {
	// 	BASE_URL: process.env.BASE_URL,
	// },
}

export default nextConfig
