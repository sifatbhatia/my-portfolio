import type { NextPage } from 'next'
import Headr from '../components/headr'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

      </Head>

      <Headr />
     


    </div>
  )
}

export default Home
