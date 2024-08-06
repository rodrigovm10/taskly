import { Router } from 'express'

export class ClassRoutes {
  static get routes(): Router {
    const router = Router()

    router.get('/', () => {
      console.log('hola')
    })

    router.post('/', () => {
      console.log('hola')
    })

    router.put('/:id', () => {
      console.log('hola')
    })

    router.delete('/:id', () => {
      console.log('hola')
    })

    return router
  }
}
