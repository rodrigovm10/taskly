'use client'

import { useSearchParams } from 'next/navigation'

import { GithubLogo, GoogleLogo } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT_URL } from '@/routes'
import { toast } from 'sonner'

export function SocialButton() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const callbackUrl = searchParams.get('callbackUrl')

  const handleLogin = async (provider: string) => {
    try {
      setIsLoading(true)
      await signIn(provider, {
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT_URL
      })
    } catch (err) {
      toast.error('Ha ocurrido un error mientrás se intentaba inciar sesión. Intentelo de nuevo!')
    }
  }

  return (
    <section className='space-y-3'>
      <Button
        className='w-full flex gap-x-4'
        variant='outline'
        disabled={isLoading}
        onClick={() => {
          handleLogin('github')
        }}
      >
        <GithubLogo className='w-4' />
        Continua con Github
      </Button>
      <Button
        className='w-full flex gap-x-4'
        variant='outline'
        disabled={isLoading}
        onClick={() => {
          handleLogin('google')
        }}
      >
        <GoogleLogo className='w-4' />
        Continua con Google
      </Button>
    </section>
  )
}
