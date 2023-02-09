import './index.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GithubIcon from '@/components/icons/github'

import headerImage from '@/assets/header.png'

export default function LayoutHeader() {
  const [theme, setTheme] = useState('Dark')
  const navigate = useNavigate()

  const changeTheme = () => {
    setTheme(theme == 'Light' ? 'Dark' : 'Light')
    document.body.className = theme.toLowerCase()
  }

  return (
    <div className="layout-header">
      <div className="layout-header-avatar">
        <img src={headerImage} className="layout-header-avatar__image"/>
        <span>TaroXin</span>
      </div>
      <div className="layout-header-menu">
        <div className="layout-header-menu-item" onClick={() => navigate('/')}>
          Home
        </div>
        <div className="layout-header-menu-item" onClick={() => navigate('/blog')}>
          Blog
        </div>
        <div className="layout-header-menu-item" onClick={() => navigate('/project')}>
          Project
        </div>
        <div className="layout-header-menu-item" onClick={changeTheme}>
          { theme}
        </div>
        <div className="layout-header-menu-item">
          <GithubIcon size={20} onClick={() => { window.open('https://github.com/TaroXin', '_blank') }}/>
        </div>
      </div>
    </div>
  )
}
