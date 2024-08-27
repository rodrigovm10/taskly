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
import { Tasks } from '@prisma/client'
import { Loader, Settings } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { editTaskSchema } from '@/schemas/tasks'
import { z } from 'zod'
import { editTask } from '@/server/actions/tasks'
import { Checkbox } from '../ui/checkbox'

export function EditTask({ task }: { task: Tasks }) {
  const form = useForm<z.infer<typeof editTaskSchema>>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed
    }
  })
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values: z.infer<typeof editTaskSchema>) => {
    console.log(values)
    try {
      setIsLoading(true)
      const result = await editTask(values)

      if (result?.error) {
        toast.error(result.error)
      }

      toast.success('Tarea Actualizada', {
        description: `Nombre: ${result?.taskEdited?.title} \n Descripción: ${result?.taskEdited?.description}`,
        duration: 10000
      })

      form.reset()
      setOpen(false)
    } catch (error) {
      toast.error('Un error inesperado ha ocurrido. Intentalo de nuevo!')
    } finally {
      setIsLoading(true)
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild>
          <Settings className='size-4 hover:opacity-70 cursor-pointer' />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar tarea</DialogTitle>
            <DialogDescription>{task.title}</DialogDescription>
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
              <FormField
                control={form.control}
                name='completed'
                render={({ field }) => (
                  <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                    <FormControl>
                      <div className='flex gap-x-4'>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </div>
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <FormLabel>Completar Tarea</FormLabel>
                      <FormDescription>
                        Completa la tarea si es que ya quedó finalizada :).
                      </FormDescription>
                    </div>
                    <FormMessage className='text-red-700' />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose>
                  <Button
                    disabled={isLoading}
                    variant={'ghost'}
                    type='button'
                  >
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  className={cn(isLoading && 'cursor-not-allowed', 'text-white')}
                  disabled={isLoading}
                >
                  {isLoading && <Loader className='size-4 animate-spin mr-2' />}
                  {isLoading && 'Editando...'} {!isLoading && 'Editar tarea'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}
