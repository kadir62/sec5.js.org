import { HTMLAttributes, ReactNode } from 'react'

const AltLink = ({
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
      className="shadow-lg h-12 p-4 flex flex-row items-center justify-center bg-gray-800/20 dark:bg-gray-400/20 border border-zinc-700 hover:text-white rounded-md hover:bg-zinc-700 hover:dark:bg-zinc-700 transition-colors font-mono gap-x-4 relative transform sm:left-0 md:left-1/2 lg:left-0"
    >
      {children}
    </a>
  )
}

export default AltLink
