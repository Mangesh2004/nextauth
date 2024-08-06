/**
 * An array of routes that are accessible to public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes=[
    "/"
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect the logged in users to /settings page
 * @type {string[]}
 */

export const authRoutes=[
    "/auth/login",
    "/auth/register"
];
/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix="/api/auth"

export const DEFAULT_LOGIN_REDIRECT="/settings"