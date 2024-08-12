import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Inicia sesión en Taskly</CardTitle>
        <CardDescription>Inicia sesión con tu proveedor favorito</CardDescription>
      </CardHeader>
      <CardContent>{/* <SocialButton /> */}</CardContent>
    </Card>
  )
}
