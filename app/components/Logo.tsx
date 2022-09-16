import clsx from 'clsx'
import logo from '~/assets/images/ehh_logo.png'

export function Logo({ className = 'w-20 h-auto' }) {
  className = clsx(className)
  return (
    <img
      src={logo}
      alt="East Hull Harriers logo"
      height="116"
      width="80"
      className={className}
    />
  )
}
