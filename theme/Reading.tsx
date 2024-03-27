const Reading = () => {
  return (
    <div className="group w-full h-full gap-y-1 flex flex-col">
      <div className="h-4 w-[10px] bg-gray-800/20 dark:bg-gray-200/20 rounded-full group-hover:w-full transition-all"></div>
      <div className="h-4 w-[10px] bg-gray-800/20 dark:bg-gray-200/20 rounded-full group-hover:w-[90%] transition-all duration-200"></div>
      <div className="h-4 w-[10px] bg-gray-800/20 dark:bg-gray-200/20 rounded-full group-hover:w-[80%] transition-all duration-300"></div>
      <div className="h-4 w-[10px] bg-gray-800/20 dark:bg-gray-200/20 rounded-full group-hover:w-[70%] transition-all duration-500"></div>
      <div className="h-4 w-[10px] bg-gray-800/20 dark:bg-gray-200/20 rounded-full group-hover:w-[85%] transition-all duration-700"></div>
    </div>
  )
}

export default Reading
