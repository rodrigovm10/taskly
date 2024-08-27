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
            pathname !== link.path ? 'text-gray-400 hover:text-white' : 'text-white',
            'transition-all'
          )}
        >
          {link.name}
        </Link>
      ))}
    </section>
  )
}
