import '../styles/global.scss'

import { Header } from '../header'
import { Player } from '../Player'


import styles from '../styles/app.module.scss'
import React from 'react'
import { PlayerContextProvider } from '../Contexts/PlayerContext'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
