import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-6 pt-16 text-center md:pt-24 lg:pt-32 gap-y-6 md:gap-y-10'>
      <h1 className='text-5xl md:text-6xl font-bold'>Un lugar donde podrás anotar tus tareas</h1>
      <span className='md:w-[80%] text-black/50 dark:text-gray-400/50 hover:text-black dark:hover:text-white transition-all text-lg md:text-xl text-balance'>
        Taskly es un administrador de tareas{' '}
        <span className='text-black dark:text-white'>
          podrás crear, eliminar, editar tus tareas de forma eficiente.
        </span>
      </span>
      <div className='flex gap-x-3'>
        <Link
          href='/dashboard'
          className={buttonVariants({ variant: 'outline' })}
        >
          Crear una tarea
        </Link>
        <Link
          href='/dashboard'
          className={buttonVariants({ variant: 'default' })}
        >
          Iniciar
        </Link>
      </div>
    </main>
  )
}
