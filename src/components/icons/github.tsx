import React, { useEffect, useRef } from 'react'
import styles from './style.css'
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number
  width?: string | number
  height?: string | number
  spin?: boolean
  rtl?: boolean
  color?: string
  fill?: string
  stroke?: string
}

export default function Github(props: IconProps) {
  const root = useRef<SVGSVGElement>(null)
  const { size = '1em', width, height, spin, rtl, color, fill, stroke, className, ...rest } = props
  const _width = width || size
  const _height = height || size
  const _stroke = stroke || color
  const _fill = fill || color
  useEffect(() => {
    if (!_fill) {
      (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-fill]').forEach((item) => {
        item.setAttribute('fill', item.getAttribute('data-follow-fill') || '')
      })
    }
    if (!_stroke) {
      (root.current as SVGSVGElement)?.querySelectorAll('[data-follow-stroke]').forEach((item) => {
        item.setAttribute('stroke', item.getAttribute('data-follow-stroke') || '')
      })
    }
  }, [_stroke, color, _fill])
  return (
        <svg
          ref={root}
          width={_width}
          height={_height}
          viewBox="0 0 48 48"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className || ''} ${spin ? styles.spin : ''} ${rtl ? styles.rtl : ''}`.trim()}
          {...rest}
        >
          <g><path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4ZM0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z" clipRule="evenodd" fillRule="evenodd" data-follow-fill="currentColor" fill={_fill}/><path d="M19.183 45.472c-.193-.25-.193-2.475 0-6.674-2.072.072-3.38-.072-3.927-.431-.819-.539-1.64-2.2-2.367-3.371-.728-1.17-2.343-1.356-2.995-1.618-.652-.261-.816-1.328 1.797-.522 2.613.807 2.74 3.005 3.565 3.518.825.514 2.796.29 3.689-.122.893-.412.827-1.944.987-2.551.201-.567-.509-.693-.524-.697-.873 0-5.454-.997-6.713-5.433-1.258-4.437.363-7.337 1.228-8.584.576-.83.525-2.602-.153-5.313 2.463-.315 4.365.46 5.703 2.326.002.01 1.756-1.043 4.527-1.043 2.772 0 3.755.858 4.514 1.043.76.185 1.366-3.266 6.053-2.326-.979 1.923-1.798 4.326-1.173 5.314.626.987 3.08 4.127 1.573 8.583-1.006 2.97-2.982 4.781-5.929 5.433-.337.108-.506.282-.506.522 0 .36.456.399 1.114 2.086.44 1.124.471 4.336.096 9.635-.951.242-1.691.405-2.22.488-.937.147-1.955.23-2.955.261-1 .032-1.347.029-2.73-.1a19.799 19.799 0 0 1-2.654-.424Z" clipRule="evenodd" fillRule="evenodd" data-follow-fill="currentColor" fill={_fill}/></g>
        </svg>
  )
}
