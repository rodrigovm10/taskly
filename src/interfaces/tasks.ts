export interface Tasks {
  title: string
  description: string
}

export interface Task {
  id: string
  title: string
  description: string
  createAt: Date
  createdBy: string
  completed: boolean
}
