import { Outlet } from 'react-router-dom'
import './app.scss'

import LayoutHeader from '@/components/layout-header'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <LayoutHeader />
      </header>
      <section className="app-content">
        <Outlet />
      </section>
    </div>
  )
}

export default App
