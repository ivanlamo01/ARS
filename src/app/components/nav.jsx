import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'Log In',
    route: '/login'
  },
    {
      label: 'Sign Up',
      route: '/signUp'
    }
  ]

export default function Nav() {
    return (
        <header>
            <nav>
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
  