import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { UserButton } from '../header/user-button'

export async function Header() {
  const session = await auth()

  return (
    <header className='border border-b-2 pb-2'>
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
          {session?.user ? (
            <UserButton />
          ) : (
            <Link
              href='/dashboard'
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'flex items-center gap-'
              )}
            >
              Inicia sesión <ArrowRight className='size-4' />
            </Link>
          )}
        </section>
      </nav>
    </header>
  )
}
