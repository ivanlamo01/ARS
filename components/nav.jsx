"use client"
import Link from 'next/link'
import styles from "./modules/nav.module.css"
import {useAuthContext} from '../Context/AuthContext'
import logo from '../public/bandera.svg'

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
  const {login,handleLogout,user} = useAuthContext()

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                  <img src={logo} alt="" />
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
  