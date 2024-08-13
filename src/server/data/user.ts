import { db } from '@/server/db/db'

export const getUserById = async ({ id }: { id?: string }) => {
  try {
    const user = await db.user.findFirst({
      where: {
        id
      }
    })

    if (!user) return

    return user
  } catch (error) {}
}
