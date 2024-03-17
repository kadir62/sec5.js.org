import { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  href?: string
  children: ReactNode
}

const PrimaryButton = ({
  children,
  href
}: {
  children: ReactNode
  href: string
}) => {
  return (
    <a
      href={href}
      className="bg-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-500 transition-colors text-white"
    >
      {children}
    </a>
  )
}

const SecondaryButton = ({
  children,
  href
}: {
  children: ReactNode
  href: string
}) => {
  return (
    <a
      href={href}
      className="bg-gray-600 px-8 py-3 rounded-lg text-lg hover:bg-gray-500 transition-colors text-white"
    >
      {children}
    </a>
  )
}

const Button = ({ variant = 'primary', href = '', children }: ButtonProps) => {
  if (variant === 'primary')
    return <PrimaryButton href={href}>{children}</PrimaryButton>
  if (variant === 'secondary')
    return <SecondaryButton href={href}>{children}</SecondaryButton>
}

export default Button
