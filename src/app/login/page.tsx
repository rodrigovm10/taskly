import { SocialButton } from '@/components/login/social-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <Card className='p-7'>
      <CardHeader>
        <CardTitle className='text-center'>Inicia sesión en Taskly</CardTitle>
        <CardDescription>Inicia sesión con tu proveedor favorito</CardDescription>
      </CardHeader>
      <CardContent>
        <SocialButton />
      </CardContent>
    </Card>
  )
}
