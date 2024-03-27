const Prettier = () => {
  return (
    <div className="group w-full h-full gap-y-1 flex flex-row hover:flex-col justify-between items-start text-gray-800/50 dark:text-gray-300/50 hover:text-black hover:dark:text-white transition-all opacity-75 text-4xl font-bold font-mono">
      <p>{'{'}</p>
      <div className="h-4 bg-gray-800/20 dark:bg-gray-200/20 rounded-full w-[70%] transition-all group-hover:ml-12"></div>
      <p>{'}'}</p>
    </div>
  )
}

export default Prettier
