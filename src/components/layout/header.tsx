import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

export function Header() {
  return (
    <header>
      <nav className='flex w-full items-center justify-between container mt-4'>
        <section className='hover:opacity-100 opacity-80 transition-all'>
          <Link
            href='/'
            className='flex gap-x-4'
          >
            Taskly
          </Link>
        </section>
        <section>
          <Link
            href='/dashboard'
            className={buttonVariants({ variant: 'default' })}
          >
            Inicia sesión
          </Link>
        </section>
      </nav>
    </header>
  )
}
