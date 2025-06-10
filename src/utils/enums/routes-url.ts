export const RoutesUrls = {
    BASE_URL: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]