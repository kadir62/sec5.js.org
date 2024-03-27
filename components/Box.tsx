import { HTMLAttributes, ReactNode } from 'react'

const Box = ({
  title,
  description,
  image,
  href,
  ...props
}: {
  title: string
  description: string
  image?: ReactNode
  href: string
} & HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg bg-gray-200/50 dark:bg-black/50 border border-zinc-300 dark:border-zinc-700 backdrop-blur-3xl items-start justify-start text-start gap-y-2 hover:border-zinc-500 hover:dark:border-zinc-500 transition-colors"
      {...props}
    >
      {image}
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-gray-800/50 dark:text-gray-300/50">{description}</p>
    </a>
  )
}

export default Box
