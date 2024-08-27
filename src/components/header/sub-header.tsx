'use client'

import { LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export default function SubHeader() {
  const pathname = usePathname()

  return (
    <section className='container flex gap-x-8 mt-2'>
      {LINKS.map(link => (
        <Link
          key={link.id}
          href={link.path}
          className={cn(
            pathname !== link.path
              ? 'dark:text-gray-400 dark:hover:text-white'
              : 'dark:text-white text-black',
            'transition-all'
          )}
        >
          {link.name}
        </Link>
      ))}
    </section>
  )
}
