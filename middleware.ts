import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes
} from "@/routes"

const {auth} = NextAuth(authConfig)
 
export default auth((req) => {
  const {nextUrl}=req;
  const isLoggedin=!!req.auth;

  const isApiAuthroute=nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute=publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute=authRoutes.includes(nextUrl.pathname)

  if (isApiAuthroute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedin) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
    }
    return null
  }

  if (!isLoggedin && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login",nextUrl))
  }
  return null;
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    '/(api|trpc)(.*)'],
}