import { Server } from './server'

import { AppRoutes } from './routes'
import { PORT } from './utils/config'
import { Database } from './database/db-connection'
;(() => {
  main()
})()

async function main() {
  const db = new Database()
  try {
    await db.connect()
  } catch (error) {
    console.error('Error en la aplicación:', error)
  } finally {
    await db.close()
  }
  new Server({ port: Number(PORT), routes: AppRoutes.routes }).start()
}
