import { Router } from 'express'
import { AuthController } from '../controllers'

export class AuthRoutes {
  static get routes(): Router {
    const router = Router()
    const controller = new AuthController()
    router.post('/login', controller.loginUser)

    router.post('/register', () => {
      console.log('hola')
    })

    router.post('/logout', () => {
      console.log('hola')
    })

    router.post('/protected', () => {
      console.log('hola')
    })

    return router
  }
}
