import { Request, Response } from 'express'

export class AuthController {
  constructor() {}

  loginUser = (req: Request, res: Response) => {
    res.json('loginUser controller')
  }
}
