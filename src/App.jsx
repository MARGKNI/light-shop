import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Banner />
        <Categories />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App