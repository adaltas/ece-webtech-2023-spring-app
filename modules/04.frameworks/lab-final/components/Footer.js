
import Adaltas from '/assets/adaltas.svg'
import styles from '../styles/Layout.module.css'

export default function Header(){
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.adaltas.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Adaltas alt="Adaltas Logo" height={20} />
        </span>
      </a>
    </footer>
  )
}
