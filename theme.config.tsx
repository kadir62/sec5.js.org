import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Logo: ReactNode = (
  <h1 className="flex flex-row items-center justify-center gap-x-3 text-2xl font-bold">
    <Image
      src="https://i.imgur.com/c5LbtzP.png"
      width={35}
      height={35}
      alt="Sec5 Logo"
      priority
    />
    Sec5
  </h1>
)

const BetaWarning: ReactNode = (
  <p className="flex flex-row gap-x-4 w-full items-center justify-center">
    Sec5 is currently in BETA.
    <a
      href=""
      className="text-primary flex flex-row gap-x-1 hover:gap-x-2 transition-all"
    >
      Learn more <i>→</i>
    </a>
  </p>
)

const Footer: ReactNode = (
  <a href="https://github.com/kadir62/sec5/blob/master/LICENSE">
    MIT {new Date().getFullYear()} © Sec5.js
  </a>
)

const config = {
  project: {
    link: 'https://github.com/kadir62/sec5'
  },
  logo: Logo,
  useNextSeoProps() {
    const route = useRouter().asPath
    if (route !== '/') {
      return {
        titleTemplate: 'Sec5 - %s'
      }
    }
    return {
      titleTemplate:
        'Sec5 - Make your workspace secure and safe without having problems'
    }
  },
  primaryHue: 209,
  banner: {
    key: 'beta-warning',
    text: BetaWarning
  },
  docsRepositoryBase: 'https://github.com/kadir62/sec5.js.org/blob/master',
  footer: {
    text: Footer
  }
}

export default config
