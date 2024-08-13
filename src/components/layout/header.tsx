import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { ArrowRight } from 'lucide-react'

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
        <section className='flex items-center gap-x-2'>
          <ThemeToggle />
          <Link
            href='/dashboard'
            className={cn(
              buttonVariants({ variant: 'default', size: 'sm' }),
              'flex items-center gap-'
            )}
          >
            Inicia sesión <ArrowRight className='size-4' />
          </Link>
        </section>
      </nav>
    </header>
  )
}
