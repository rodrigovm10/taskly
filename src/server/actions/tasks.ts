'use server'

import { auth } from '@/auth'
import { createTaskSchema, validateCreateTask } from '@/schemas/tasks'
import { db } from '@/server/db/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const createTask = async (values: z.infer<typeof createTaskSchema>) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'No estas autenticado. Por favor incia sesión' }
  }

  const data = validateCreateTask(values)

  if (data.error) {
    return { error: 'Los datos ingresados son incorrectos' }
  }

  const newTask = await db.tasks.create({
    data: {
      userId: currentUser.user.id,
      title: data.data.title,
      description: data.data.description
    }
  })

  revalidatePath('/')
  revalidatePath('/dashboard')

  return { taskId: newTask.id, taskTitle: newTask.title, taskDescription: newTask.description }
}

export const deleteTask = async (id: string) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'No estas autenticado. Por favor incia sesión' }
  }

  if (!id) return { error: 'El id de la tarea es obligatorio.' }

  const taskDeleted = await db.tasks.delete({
    where: {
      id
    }
  })

  revalidatePath('/')
  revalidatePath('/dashboard')

  if (taskDeleted) return { success: 'La tarea fue eliminada' }
}
