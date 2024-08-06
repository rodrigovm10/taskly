import { MongoClient, ServerApiVersion } from 'mongodb'
import { MONGO_URI } from '../utils/config'

const uri =
  'mongodb+srv://Rodrigo:p9SddG89gik814oo@cluster0.h4qawrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
export class Database {
  private client: MongoClient

  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    })
  }

  async connect() {
    try {
      console.log('hola')
      await this.client.connect()
      await this.client.db('taskly').command({ ping: 1 })
      console.log('Connected to DB')
    } catch (error) {
      console.error('Error connecting to DB:', error)
    }
  }

  async close() {
    try {
      await this.client.close()
      console.log('Connection to DB closed')
    } catch (error) {
      console.error('Error closing DB connection:', error)
    }
  }
}
