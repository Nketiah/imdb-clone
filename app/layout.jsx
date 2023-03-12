import Header from '@/app/components/Header'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import './globals.css'
import Providers from './Providers'

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the imdb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox  />
          {children}
        </Providers>
      </body>
    </html>
  )
}
