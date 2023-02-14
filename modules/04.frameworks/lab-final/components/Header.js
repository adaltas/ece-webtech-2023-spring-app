
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Adaltas from '/assets/adaltas.svg'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={`/`}>
          <a>
            <Adaltas
              style={{
                height: '24px',
              }}
            />
            <span>
              Web technologies
            </span>
          </a>
        </Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
      </ul>
    </header>
  )
}
