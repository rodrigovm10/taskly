import { auth } from '@/auth'
import { createTaskSchema, validateCreateTask } from '@/schemas/tasks'
import { db } from '@/server/db/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const createTask = async (values: z.infer<typeof createTaskSchema>) => {
  const currentUser = await auth()

  const data = validateCreateTask(values)

  if (data.error) {
    return { error: 'Los datos ingresados son incorrectos' }
  }

  if (!currentUser) {
    return { error: 'No estas autenticado. Por favor incia sesión' }
  }

  const newTask = await db.tasks.create({
    data: {
      title: data.data.title,
      description: data.data.description
    }
  })

  revalidatePath('/')
  revalidatePath('/dashboard')

  return { taskId: newTask.id }
}
