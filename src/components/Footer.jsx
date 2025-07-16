const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Интернет-магазин светильников LIGHT</h3>
            <p>Москва</p>
            <p>+7 (495) 128-11-38</p>
            <p>Ежедневно с 9:00 до 22:00</p>
          </div>
          
          <div className="footer-section">
            <h4>Каталог</h4>
            <ul>
              <li><a href="/">Люстры</a></li>
              <li><a href="/">Бра</a></li>
              <li><a href="/">Торшеры</a></li>
              <li><a href="/">Потолочные светильники</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Информация</h4>
            <ul>
              <li><a href="/">О компании</a></li>
              <li><a href="/">Доставка и оплата</a></li>
              <li><a href="/">Гарантия</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Интернет-магазин светильников LIGHT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer