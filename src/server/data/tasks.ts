import { auth } from '@/auth'
import { db } from '@/server/db/db'

export const getAllTasks = async () => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'El usuario no está autenticado' }
  }

  try {
    const tasks = await db.tasks.findMany({
      where: {
        userId: currentUser.user.id
      }
    })

    if (tasks.length === 0) return { error: 'El usuario no tiene tareas creadas' }
    return { tasks }
  } catch (error) {
    console.error('Error mientras se traían las tareas', error)
    throw error
  }
}
