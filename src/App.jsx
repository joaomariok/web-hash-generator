import { HashBox } from "./components/HashBox"

import styles from './App.module.scss'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <HashBox />
    </main>
  )
}