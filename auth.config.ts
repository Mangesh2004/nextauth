import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import bcryptjs from "bcryptjs"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"


import type { NextAuthConfig } from "next-auth"
import { getUserbyEmail } from "./data/user"
 
export default { providers: [
    Google({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }),
    Github({
        clientId:process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET
    }),
    Credentials({
        async authorize(credentials){
            const Validatedfields=LoginSchema.safeParse(credentials)

            if (Validatedfields.success) {
                const {email,password}=Validatedfields.data

                const user=await getUserbyEmail(email)
                if (!user || !user.password) {
                    return null
                }
                const passwordMatch=await bcryptjs.compare(password, user.password)
                if (passwordMatch) {
                    return user;
                }
            }
            return null;
        }
    })

] } satisfies NextAuthConfig