"use client"
import Link from 'next/link'
import styles from "../modules/nav.module.css"
import {useAuthContext} from '../Context/AuthContext';


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
                <img src="http://www.astillero.gba.gov.ar/imagenes/logo70.png" alt="" className={styles.img}/>
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
  