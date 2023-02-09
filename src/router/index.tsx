import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from '@/pages/app'
import Project from '@/pages/projects'
import Blog from '@/pages/blog'
import Home from '@/pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'project',
        element: <Project />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
], {
  basename: '/mine',
})

export default function Router() {
  return <RouterProvider router={router} />
}
