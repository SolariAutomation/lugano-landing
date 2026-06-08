'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number // ms
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const translate =
    direction === 'up' ? 'translate-y-6' :
    direction === 'left' ? '-translate-x-6' :
    direction === 'right' ? 'translate-x-6' : ''

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translate}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
