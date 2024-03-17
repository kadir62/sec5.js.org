const NotFound = () => {
  return (
    <div className="w-full h-screen bg-[#121212] text-white flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-4xl font-bold">404: Not Found</h1>
      <a
        href="/"
        className="text-sky-400 hover:text-sky-500 hover:underline text-lg"
      >
        Get back to homepage
      </a>
    </div>
  )
}

export default NotFound
