import './index.scss'

import headerImage from '@/assets/header.png'

export default function Home() {
  return (
    <div className="home">
      <img src={headerImage} className="home-avatar"/>
      <div className="home-description">
        <p className="home-description-title">杨鑫、泰罗凹凸曼、TaroXin</p>
        <p className="home-description-subtitle">👆都是名字👆</p>
        <p className="home-description-subtitle">前端工程师，全栈开发探索者，理想主义者</p>
      </div>

      <section className="home-content">
        <p className="home-content-title">擅长的技术</p>
        <p className="home-content-info">
          <img src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=%23ffffff"/>
          <img src="https://img.shields.io/badge/-VSCode-%23007ACC?style=for-the-badge&logo=visual-studio-code" />
          <img src="https://img.shields.io/badge/-VisualStudio-9932CC?style=for-the-badge&logo=visual-studio" />
          <img src="https://img.shields.io/badge/-Docker-%232081e8?style=for-the-badge&logo=docker&logoColor=fff" />
          <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" />
        </p>
      </section>
    </div>
  )
}
