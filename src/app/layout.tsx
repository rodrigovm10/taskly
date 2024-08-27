import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header, Footer } from '@/components/layout'
import { Toaster } from 'sonner'
import SubHeader from '@/components/header/sub-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taskly',
  description: 'Administrador de tareas'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {' '}
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SubHeader />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
