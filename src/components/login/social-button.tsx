import { GithubLogo, GoogleLogo } from '@/components/icons/icons'
import { Button } from '@/components/ui/button'

export function SocialButton() {
  return (
    <section className='space-y-3'>
      <Button
        className='w-full flex gap-x-4'
        variant='outline'
        // disabled={loading}
        // onClick={() => {
        //   handleLogin('github')
        // }}
      >
        <GithubLogo className='w-4' />
        Continua con Github
      </Button>
      <Button
        className='w-full flex gap-x-4'
        variant='outline'
        // disabled={loading}
        // onClick={() => {
        //   handleLogin('google')
        // }}
      >
        <GoogleLogo className='w-4' />
        Continua con Google
      </Button>
    </section>
  )
}
