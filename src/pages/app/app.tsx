import { Outlet, useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import './app.scss'

function App() {
  const navigate = useNavigate()
  const changeTheme = (theme: string) => {
    document.body.className = theme
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Outlet />

        <div className='btn-group'>
          <button onClick={() => changeTheme('dark')}>暗色主题</button>
          <button onClick={() => changeTheme('light')}>亮色主题</button>
        </div>

        <div className='btn-group'>
          <button onClick={() => navigate('/projects')}>Projects</button>
          <button onClick={() => navigate('/blog')}>Blog</button>
        </div>

      </header>
    </div>
  )
}

export default App
