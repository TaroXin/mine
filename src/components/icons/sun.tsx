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

export default function Sun(props: IconProps) {
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
          <g><path strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" d="m9.15 9.15 2.228 2.228M3 24h3.15m3 14.85 2.228-2.228M38.85 38.85l-2.228-2.228M45 24h-3.15m-3-14.85-2.228 2.228M24 3v3.15" data-follow-stroke="currentColor" stroke={_stroke}/><path strokeLinejoin="round" strokeWidth="4" d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z" data-follow-fill="currentColor" data-follow-stroke="currentColor" fill={_fill} stroke={_stroke}/><path strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" d="M24 45v-3.15" data-follow-stroke="currentColor" stroke={_stroke}/></g>
        </svg>
  )
}
