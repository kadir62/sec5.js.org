type LinkContainerProps = {
  title: string
  description: string
  href: string
}

const LinkContainer = ({ title, description, href }: LinkContainerProps) => {
  return (
    <a
      href={href}
      className="flex flex-col max-w-[700px] p-4 rounded-lg hover:bg-slate-600/20 gap-y-2 transition-colors"
    >
      <h1 className="text-lg font-semibold">{title}</h1>
      <h3>{description}</h3>
    </a>
  )
}

export default LinkContainer
