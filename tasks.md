# Реализовано в проекте

## Роутинг (App Router)

- [x] Корневой layout (`app/layout.tsx`) — обёртка всех страниц с `<TheHeader>` и `<TheFooter>`
- [x] Главная страница (`app/page.tsx`)
- [x] Страница Blog (`app/blog/page.tsx`)
- [x] Динамический маршрут поста (`app/blog/[slug]/page.tsx`)
- [x] Страница About (`app/about/page.tsx`)
- [x] Вложенный layout для About (`app/about/layout.tsx`) — своя навигация по подразделам
- [x] Подстраница Team (`app/about/team/page.tsx`)
- [x] Подстраница Contacts (`app/about/contacts/page.tsx`)
- [x] Страница Pricing (`app/pricing/page.tsx`)

## Компоненты

- [x] `TheHeader` — навигация с `next/link` (Home, Blog, About, Pricing)
- [x] `TheFooter` — заглушка футера

## Данные и серверные компоненты

- [x] Серверный async-компонент Blog — fetch списка постов с `jsonplaceholder` + ISR (`revalidate: 60`)
- [x] Серверный async-компонент Post — fetch одного поста по `slug` + ISR
- [x] `generateMetadata` для динамического заголовка страницы поста

## Loading / Error states

- [x] `app/blog/loading.tsx` — UI загрузки для Blog (Next.js Suspense-based streaming)
- [x] `app/blog/error.tsx` — Error Boundary для Blog (`'use client'`)

## Метаданные

- [x] Глобальные метаданные в корневом layout (title, description)
- [x] Метаданные страницы Blog
- [x] Метаданные страницы About
- [x] Метаданные страницы Pricing
- [x] Динамические метаданные страницы поста через `generateMetadata`

## Стилизация

- [x] Глобальные стили (`app/globals.scss`) — CSS-переменные, dark mode, `.container`, стили хедера
- [x] CSS Modules для страницы Pricing (`app/pricing/page.module.scss`) — карточки тарифов
- [x] Подключение Google Font Montserrat через `next/font/google`
- [x] Адаптивные hover-эффекты через `@media (hover: hover)`

## Конфигурация

- [x] TypeScript
- [x] Biome (линтер + форматтер, замена ESLint/Prettier)
- [x] Бандлер Bun (`bun.lock`)
