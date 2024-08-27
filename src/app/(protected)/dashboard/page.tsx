import { CardTask } from '@/components/tasks/card-task'
import { CreateTask } from '@/components/tasks/create-task'
import { Input } from '@/components/ui/input'
import { getAllTasks } from '@/server/data/tasks'
import { Search } from 'lucide-react'

export default async function DashboardPage() {
  const tasks = await getAllTasks()

  return (
    <main className='container space-y-4'>
      <section className='flex w-full mb-3 items-center space-x-2 justify-between mt-4'>
        <CreateTask />
      </section>
      <section className='w-full grid gap-3 lg:grid-cols-3'>
        {tasks.tasks?.map(task => (
          <CardTask
            key={task.id}
            task={task}
          />
        ))}
      </section>
    </main>
  )
}
