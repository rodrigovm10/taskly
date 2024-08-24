import { Tasks } from '@/interfaces/tasks'
import { z } from 'zod'

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: 'El título de la tarea es requerido',
      invalid_type_error: 'El título de la tarea debe ser un texto'
    })
    .min(5, { message: 'El titulo de la tarea debe tener un mínimo de 5 caracteres.' }),
  description: z.string({
    required_error: 'La descripción de la tarea es requerido',
    invalid_type_error: 'La descripción de la tarea debe ser un texto'
  })
})

export const editTaskSchema = z.object({
  id: z.string(),

  title: z
    .string({
      invalid_type_error: 'El título de la tarea debe ser un texto'
    })
    .min(5, { message: 'El titulo de la tarea debe tener un mínimo de 5 caracteres.' }),
  description: z.string({
    invalid_type_error: 'La descripción de la tarea debe ser un texto'
  })
})

export const validateCreateTask = (values: Tasks) => {
  return createTaskSchema.safeParse(values)
}

export const validateEditTask = (values: Tasks) => {
  return editTaskSchema.safeParse(values)
}
