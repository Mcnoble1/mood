// helper function to get user by clerkId

import { prisma } from "./db";
import { auth } from "@clerk/nextjs/server";

prisma
export const getUserByClerkId = async () => {
    const {userId} = await auth()
    const user =  await prisma.user.findUniqueOrThrow({
        where: {
            clerkId: userId,
        },
     });

    return user
}