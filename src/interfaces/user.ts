export interface User {
  id: string
  username: string | null
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
  limitLinks: number
  createdAt: Date
  updatedAt: Date
}
