'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader, Plus, ClipboardList } from 'lucide-react'

import { useState } from 'react'
import { z } from 'zod'
import { createTaskSchema } from '@/schemas/tasks'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createTask } from '@/server/actions/tasks'
import { toast } from 'sonner'

export function CreateTask() {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof createTaskSchema>) => {
    try {
      setIsLoading(true)
      const result = await createTask(values)
      const { error, taskDescription, taskTitle } = result

      if (error) {
        toast.error(error)
      }

      toast.success('Tarea creada', {
        description: `Nombre: ${taskTitle} \n Descripción: ${taskDescription}`,
        duration: 10000
      })

      form.reset()
      setOpen(false)
    } catch (err) {
      toast.error('An unexpected error has ocurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className='size-4' /> <span>Crear Tarea</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crea una nueva tarea</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-5'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre:</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='Ir a correr...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-red-700' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción:</FormLabel>
                  <FormControl>
                    <div className='flex gap-x-4'>
                      <Input
                        disabled={isLoading}
                        placeholder='El día de mañana ir a correr a las 9:00'
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className='text-red-700' />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose>
                <Button
                  className='w-full'
                  disabled={isLoading}
                  type='button'
                  variant={'ghost'}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button type='submit'>
                {isLoading && <Loader className='size-4 animate-spin mr-2' />}
                {!isLoading && <ClipboardList className='size-4 mr-2 ' />}
                Crear Tarea
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
