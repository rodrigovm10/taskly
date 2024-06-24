import { Server } from './server'
import Database from './database/db-connection'
import { PORT } from './utils/config'
import { AppRoutes } from './routes'
;(() => {
  main()
})()

async function main() {
  new Server({ port: Number(PORT), routes: AppRoutes.routes }).start()
}
