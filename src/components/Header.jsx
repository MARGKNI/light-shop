import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Каталог товаров', link: '/catalog' },
    { name: 'Бренды', link: '/brands' },
    { name: 'Стили', link: '/styles' },
    { name: 'Распродажа', link: '/sale' }
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          <div className="logo">LIGHT</div>
          
          <div className="header-actions">
            <button className="icon-button">
              <FiSearch size={20} />
            </button>
            <button className="icon-button">
              <FiUser size={20} />
            </button>
            <button className="icon-button">
              <FiShoppingCart size={20} />
            </button>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header