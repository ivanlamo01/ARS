import Link from 'next/link'
import styles from './modules/Nav.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  }, 
  {
    label: 'Log In',
    route: '/logIn'
  },
  {
    label: 'Sign Up',
    route: '/signUp'
  }
]

export default function Nav() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                  {links.map(({ label, route }) => (
                    <li key={route}>
                      <Link href={route}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
            </nav>
      </header>
          
    )
  }
  