import { useRouter } from 'next/router'
import Logo from './theme/Logo'

const config = {
  project: {
    link: 'https://github.com/kadir62/sec5'
  },
  useNextSeoProps() {
    const route = useRouter().asPath
    if (route !== '/') {
      return {
        titleTemplate: 'Sec5 - %s'
      }
    }
    return {
      titleTemplate: 'Sec5 - Secure. Manageable. Code.'
    }
  },
  logo: <Logo />,
  primaryHue: 209,
  docsRepositoryBase: 'https://github.com/kadir62/sec5.js.org/blob/master'
}

export default config
