'use client'

import type {IconButtonProps, SpanProps} from '@chakra-ui/react'
import {ClientOnly, IconButton, Skeleton, Span} from '@chakra-ui/react'
import * as React from 'react'
import {LuMoon, LuSun} from 'react-icons/lu'

export interface ColorModeProviderProps {
	children: React.ReactNode
	defaultTheme?: 'light' | 'dark'
}

type ColorMode = 'light' | 'dark'

const ColorModeContext = React.createContext<{
	colorMode: ColorMode
	setColorMode: (mode: ColorMode) => void
	toggleColorMode: () => void
} | null>(null)

export function ColorModeProvider({
	children,
	defaultTheme = 'light',
}: ColorModeProviderProps) {
	const [colorMode, setColorModeState] = React.useState<ColorMode>(() => {
		if (typeof window === 'undefined') return defaultTheme
		return (localStorage.getItem('theme') as ColorMode) ?? defaultTheme
	})

	React.useEffect(() => {
		const root = document.documentElement
		root.classList.remove('light', 'dark')
		root.classList.add(colorMode)
		localStorage.setItem('theme', colorMode)
	}, [colorMode])

	const setColorMode = React.useCallback((mode: ColorMode) => {
		setColorModeState(mode)
	}, [])

	const toggleColorMode = React.useCallback(() => {
		setColorModeState((prev) => (prev === 'light' ? 'dark' : 'light'))
	}, [])

	return (
		<ColorModeContext value={{colorMode, setColorMode, toggleColorMode}}>
			{children}
		</ColorModeContext>
	)
}

export type {ColorMode}

export interface UseColorModeReturn {
	colorMode: ColorMode
	setColorMode: (colorMode: ColorMode) => void
	toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
	const ctx = React.useContext(ColorModeContext)
	if (!ctx)
		throw new Error('useColorMode must be used within ColorModeProvider')
	return ctx
}

export function useColorModeValue<T>(light: T, dark: T) {
	const {colorMode} = useColorMode()
	return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
	const {colorMode} = useColorMode()
	return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, 'aria-label'> {}

export const ColorModeButton = React.forwardRef<
	HTMLButtonElement,
	ColorModeButtonProps
>(function ColorModeButton(props, ref) {
	const {toggleColorMode} = useColorMode()
	return (
		<ClientOnly fallback={<Skeleton boxSize="9" />}>
			<IconButton
				onClick={toggleColorMode}
				variant="ghost"
				aria-label="Toggle color mode"
				size="sm"
				ref={ref}
				{...props}
				css={{
					_icon: {
						width: '5',
						height: '5',
					},
				}}
			>
				<ColorModeIcon />
			</IconButton>
		</ClientOnly>
	)
})

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
	function LightMode(props, ref) {
		return (
			<Span
				color="fg"
				display="contents"
				className="chakra-theme light"
				colorPalette="gray"
				colorScheme="light"
				ref={ref}
				{...props}
			/>
		)
	},
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
	function DarkMode(props, ref) {
		return (
			<Span
				color="fg"
				display="contents"
				className="chakra-theme dark"
				colorPalette="gray"
				colorScheme="dark"
				ref={ref}
				{...props}
			/>
		)
	},
)
