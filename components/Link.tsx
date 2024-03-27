import { HTMLAttributes, ReactNode } from 'react'

const Link = ({
  href,
  children,
  ...props
}: {
  href: string
  children: ReactNode
} & HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      {...props}
      className="shadow-lg bg-black text-white dark:bg-white dark:text-black h-12 p-4 flex flex-row items-center justify-center font-mono uppercase hover:brightness-75 rounded-md"
    >
      {children}
    </a>
  )
}

export default Link
