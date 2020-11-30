import Head from 'next/head'
import '../styles/globals.css'
import GlobalStyle from '../styles/global-styled'

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <link key="font-gstatic" rel="preconnect" href="https://fonts.gstatic.com" />
        <link key="font-roboto" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
