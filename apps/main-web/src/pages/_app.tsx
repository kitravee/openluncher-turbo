import '../../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp
