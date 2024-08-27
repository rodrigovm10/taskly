'use client'

import { toast } from 'sonner'
import { type User } from '@prisma/client'
import { useState, type ChangeEvent } from 'react'
import { updateUserName } from '@/server/actions/user'

export function useUpdateUser({ user }: { user?: User | null }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSaveDisabled, setIsSaveDisabled] = useState(true)
  const [newName, setNewName] = useState('')

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (user?.name === value) {
      setIsSaveDisabled(true)
      setNewName('')
    } else {
      setIsSaveDisabled(false)
      setNewName(value)
    }
  }

  const handleSaveData = async () => {
    try {
      setIsLoading(true)
      const result = await updateUserName({ userId: user?.id, newName })
      const { error } = result
      if (error) {
        toast.error(error)
        return
      }
      setIsSaveDisabled(true)
      toast.success('Perfil actualizado.')
    } catch (err) {
      toast.error('Un error inesperado ha ocurrido. Intentelo de nuevo')
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, isSaveDisabled, handleChangeName, handleSaveData }
}
