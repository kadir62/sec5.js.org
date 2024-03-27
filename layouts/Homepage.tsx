import AltLink from '@/components/AltLink'
import Box from '@/components/Box'
import Link from '@/components/Link'
import Comment from '@/theme/Comment'
import Comparing from '@/theme/Comparing'
import Eslint from '@/theme/Eslint'
import Prettier from '@/theme/Prettier'
import Reading from '@/theme/Reading'

const Homepage = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
      <main className="my-40 mx-6 flex flex-col items-center text-center gap-y-12">
        <div className="flex flex-col gap-y-20">
          <h1 className="text-title font-black">
            Enhance Code Security and Manageability
          </h1>
          <h3 className="text-xl text-gray-600 dark:text-gray-400">
            Simplify your development process and elevate code quality with
            ease.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
          <Link href="/docs">Get Started</Link>
          <AltLink href="/docs/config">Configure</AltLink>
          <button
            onClick={() => navigator.clipboard.writeText('npm install -g sec5')}
            className="shadow-lg h-12 p-4 flex flex-row items-center justify-center bg-gray-800/20 dark:bg-gray-400/20 border border-zinc-700 hover:text-white rounded-md hover:bg-zinc-700 hover:dark:bg-zinc-700 transition-colors font-mono gap-x-4 relative transform sm:left-0 md:left-1/2 lg:left-0"
          >
            <p>npm install -g sec5</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="currentColor"
            >
              <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-y-12 mt-48 px-12 w-full">
          <div
            className="w-full h-auto py-2 bg-gray-200  border border-zinc-700 dark:bg-[#080808] flex flex-col rounded-xl text-lg font-mono shadow-blue-900/20 shadow-md text-start"
            data-aos="fade-up"
          >
            <div className="w-full p-3 flex flex-row items-center justify-start gap-x-6 overflow-x-auto border-b border-zinc-700">
              Sec5
            </div>
            <div className="text-blue-600 p-6 flex flex-col items-start justify-start">
              <p className="text-green-600 text-xl mb-4">$ pnpx sec5</p>
              <p>[SEC5 INFO] No comments found.</p>
              <p>[SEC5 INFO] CHANGELOG.md and package.json version match.</p>
              <p>[SEC5 INFO] Codes are formatted correctly with Prettier</p>
              <p>
                [SEC5 INFO] Codes are writed correctly for rules with eslint
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 mt-48 px-12 w-full">
          <h1 className="text-title font-medium font-mono">Why</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full items-stretch">
            <Box
              title="Built-in optimization"
              description="Read files chunk by chunk for perfect DX and faster performance"
              href="/docs"
              image={<Reading />}
            />
            <Box
              title="Version comparing"
              description="Compare versions between package.json and changelog"
              href="/docs"
              image={<Comparing />}
            />
            <Box
              title="Comment checking"
              description="Check comments in code to avoid unnecessary bugs"
              href="/docs"
              image={<Comment />}
            />
            <Box
              title="Prettier"
              description="Check your code's style with Prettier for more clean code"
              href="/docs"
              image={<Prettier />}
            />
            <Box
              title="Eslint"
              description="Check your code with Eslint for better code quality"
              href="/docs"
              image={<Eslint />}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage
