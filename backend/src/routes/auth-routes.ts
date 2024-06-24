import { Router } from 'express'
import { AuthController } from '../controllers'

export class AuthRoutes {
  static get routes(): Router {
    const router = Router()
    const controller = new AuthController()

    router.post('/login', controller.loginUser)
    router.get('/register', controller.loginUser)
    router.get('/logout', controller.loginUser)

    router.get('/protected', controller.loginUser)
    return router
  }
}
