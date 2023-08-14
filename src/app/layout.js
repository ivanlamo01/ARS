
import Nav from '../../components/nav';
import '../styles/globals.css'
import { Inter } from 'next/font/google';
import AuthProvider from "../../Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../../components/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alistamiento de buques mercantes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </head>
      
      <body className={inter.className} >
        
        <AuthProvider>
        <Nav />
          {children}  
        <Footer />
        </AuthProvider>
        
      
      </body>
    </html>
  )
}
