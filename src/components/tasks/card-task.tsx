import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Tasks } from '@prisma/client'
import DeleteTask from './delete-task'
import { EditTask } from './edit-task'
import { CircleCheck, CircleX } from 'lucide-react'
import { TooltipWrapper } from '../commons/tooltip-wrapper'

export function CardTask({ task }: { task: Tasks }) {
  return (
    <Card key={task.id}>
      <CardHeader>
        <div className='flex flex-row justify-between'>
          <CardTitle className='inline-block'>{task.title}</CardTitle>
          <div className='flex gap-x-2 items-center'>
            <DeleteTask task={task} />
            <EditTask task={task} />
            {task.completed ? (
              <TooltipWrapper text='Tarea completada'>
                <CircleCheck className='size-4 hover:opacity-70 ' />
              </TooltipWrapper>
            ) : (
              <TooltipWrapper text='Tarea no completada'>
                <CircleX className='size-4 hover:opacity-70 ' />
              </TooltipWrapper>
            )}
          </div>
        </div>
        <CardDescription className='truncate'>{task.description}</CardDescription>
      </CardHeader>
      <CardFooter className='text-muted-foreground text-xs'>
        {task.createAt.toISOString().split('T')[0]}
      </CardFooter>
    </Card>
  )
}
