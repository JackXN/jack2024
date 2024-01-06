import { Inter } from 'next/font/google'
import './globals.css';
import Nav from './components/Navigation/Nav';


// Custom Css
import './animista.css'

// Fonts
import '@fontsource-variable/hanken-grotesk';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jack Rigan',
  description: 'Full stack software developer',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
