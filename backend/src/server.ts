import express, { Router } from 'express'

interface Options {
  port?: number
  routes: Router
}

export class Server {
  public readonly app = express()
  public readonly port: number
  private readonly routes: Router

  constructor(options: Options) {
    const { port = 3000, routes } = options

    this.port = port
    this.routes = routes
  }

  async start() {
    // Middleware
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(this.routes)

    this.app.listen(this.port, () => {
      console.log(`Server rurnning on port ${this.port}`)
    })
  }
}
