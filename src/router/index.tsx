import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from '@/pages/app/app'
import Projects from '@/pages/projects'
import Blog from '@/pages/blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
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

export default function () {
  return <RouterProvider router={router}/>
}
