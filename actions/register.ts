"use server"

import * as z from "zod"
import { db } from "@/lib/db"

import bcryptjs from "bcryptjs"
import { RegisterSchema } from "@/schemas"
import { getUserbyEmail } from "@/data/user"


export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Invalid fields" }
    }
    const { email, password, name } = validatedFields.data

    const hashedpassword = await bcryptjs.hash(password, 10)

    const existingUser = await getUserbyEmail(email)

    if(existingUser){
        return ({
            error:"Email already taken!"
        })
    }

    await db.user.create({
        data:{
            name,
            email,
            password:hashedpassword
        },
    });

    return { success: "User created" }
}
