import Button from './Button'

const ConfigText = `export default {
  allowComments: true,
  allowNonWritedChangelog: false,
  allowNoVersion: false,
  allowNoFormat: false,
  ignoredChecks: []
}
`

const Homepage = () => {
  return (
    <main className="flex flex-col h-full w-full items-center bg-grid">
      <div className="min-h-[768px] max-w-[1000px] w-full flex flex-col items-center text-center px-2 gap-y-16">
        <h1 className="text-4xl md:text-6xl font-bold mt-[100px]">
          Make your workspace secure and safe without having problems
        </h1>
        <h3 className="text-xl text-alt">
          Elevate your workspace security effortlessly with tools like{' '}
          <code className="bg-blue-300/20 p-1 rounded-md text-blue-400">
            Comment checking
          </code>
          ,{' '}
          <code className="bg-blue-300/20 p-1 rounded-md text-blue-400">
            Version comparing
          </code>{' '}
          and more...
        </h3>
        <div className="flex flex-col md:flex-row gap-12">
          <Button href="/docs" variant="primary">
            Get Started
          </Button>
          <Button href="/docs/configuration" variant="secondary">
            Configuration
          </Button>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-[#080808] w-full h-auto flex flex-col md:flex-row min-h-[500px] rounded-t-lg justify-around items-center p-8 gap-y-12">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h2 className="text-4xl font-black">Easy to use</h2>
          <h3 className="text-2xl text-alt">
            &quot;Easy-to-use JavaScript CLIs streamline the process of
            executing commands and tasks within a project. They offer simplified
            interfaces that allow developers to interact with their applications
            effortlessly.&quot;
          </h3>
        </div>
        <pre className="p-4 bg-black rounded-lg border border-gray-800 text-white max-w-full overflow-scroll">
          <code className="flex flex-col text-yellow-400">
            <p className="text-primary">$ pnpx sec5</p>
            <p className="text-primary">
              [SEC5 INFO] CHANGELOG.md and package.json version matches
            </p>
            <p>[SEC5 WARN] Founded 2 comments in:</p>
            <p>C:\Users\k4dir\Desktop\Projeler\sec5\bin\sec5.js</p>
            <p>C:\Users\k4dir\Desktop\Projeler\sec5\src\todoCheck.ts</p>
            <p className="text-primary">
              [SEC5 INFO] Codes are formatted correctly with Prettier
            </p>
            <p className="text-primary">
              [SEC5 INFO] Codes are writed correctly for rules with eslint
            </p>
          </code>
        </pre>
      </div>
      <div className="bg-gray-200 dark:bg-[#080808] w-full h-auto flex flex-col md:flex-row-reverse min-h-[500px] rounded-t-lg justify-around items-center p-8 gap-y-12">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <h2 className="text-4xl font-black">Configurabile</h2>
          <h3 className="text-2xl text-alt">
            &quot;JavaScript CLIs with configurable settings provide flexibility
            to tailor the tool to specific project requirements. Users can
            adjust configurations such as file paths, environment variables, or
            project-specific settings, optimizing the CLI for their needs.&quot;
          </h3>
        </div>
        <pre className="p-4 bg-black rounded-lg border border-gray-800 text-white max-w-full overflow-scroll">
          <code className="flex flex-col text-yellow-400">
            <p className="text-primary">$ cat secure.config.js</p>
            {ConfigText}
          </code>
        </pre>
      </div>
      <div className="flex flex-col gap-y-12 py-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-[100px]">
          And more...
        </h1>
        <div className="flex flex-col md:flex-row">
          <Button href="/docs" variant="primary">
            Discover now →
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Homepage
