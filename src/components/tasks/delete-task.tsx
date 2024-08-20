'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogHeader
} from '@/components/ui/dialog'
import { Loader, Trash } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tasks } from '@prisma/client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { deleteTask } from '@/server/actions/tasks'
import { toast } from 'sonner'

export default function DeleteTask({ task }: { task: Tasks }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteLink = async () => {
    try {
      setIsLoading(true)
      const result = await deleteTask(task.id)

      if (result?.error) toast.error(result.error)

      if (result?.success) toast.error(result.success)
    } catch (error) {
      toast.error('')
    } finally {
      setIsLoading(false)
      setOpen(false)
    }
    console.log('hola')
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Trash className='size-4 hover:opacity-70 cursor-pointer' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar {task.title}</DialogTitle>
          <DialogDescription className='text-red-500'>
            La tarea será eliminada permanentemente. Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button
              disabled={isLoading}
              variant={'ghost'}
              type='button'
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleDeleteLink}
            className={cn(
              isLoading && 'cursor-not-allowed',
              'bg-destructive text-white hover:bg-destructive/70'
            )}
            disabled={isLoading}
          >
            {isLoading && <Loader className='size-4 animate-spin mr-2' />}
            {!isLoading && <Trash className='size-4 mr-2 ' />}
            {isLoading && 'Eliminando...'} {!isLoading && 'Eliminar tarea'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
