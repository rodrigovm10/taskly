'use server'

import { db } from '@/server/db/db'
import { auth } from '@/auth'
import { revalidatePath } from 'next/cache'

export const deleteAccount = async ({ userId }: { userId?: string }) => {
  const currentUser = await auth()

  if (!currentUser) {
    return { error: 'No estas autenticado. Por favor incia sesión.' }
  }

  if (!userId) {
    return { error: 'Id de usuario es obligatorio' }
  }

  const result = await db.user.delete({
    where: {
      id: userId
    }
  })

  if (!result) {
    return { error: 'El usuario no pudo ser eliminado. Intentalo de nuevo' }
  }

  revalidatePath('/')
  return { success: 'Tu cuenta fue eliminada.' }
}

interface UpdateUserNameProps {
  userId?: string
  newName: string
}
export const updateUserName = async ({ userId, newName }: UpdateUserNameProps) => {
  const currentUser = await auth()
  console.log(currentUser)

  if (!currentUser) {
    return { error: 'No estas autenticado. Por favor incia sesión.' }
  }

  if (!newName) {
    return { error: 'El nuevo nombre es obligatorio.' }
  }

  const result = await db.user.update({
    where: {
      id: userId
    },
    data: {
      name: newName
    }
  })

  if (!result) {
    return { error: 'Nombre de usuario no puede ser actualizado. Por favor intentelo de nuevo.' }
  }

  revalidatePath('/')
  revalidatePath('/dashboard')
  return { newName: result.name }
}
