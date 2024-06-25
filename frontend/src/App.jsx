import { Layout } from './layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
