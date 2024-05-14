import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const User = prisma.users

export default prisma