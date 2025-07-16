import { useState } from 'react'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('new')

  const products = {
    new: [
      { id: 1, name: 'Люстра Modern', price: '12 990 ₽', image: '/placeholder-light1.jpg' },
      { id: 2, name: 'Бра Classic', price: '5 490 ₽', image: '/placeholder-light2.jpg' }
    ],
    sale: [
      { id: 3, name: 'Торшер Vintage', price: '8 990 ₽', oldPrice: '12 990 ₽', image: '/placeholder-light3.jpg' },
      { id: 4, name: 'Лампа Minimal', price: '3 290 ₽', oldPrice: '4 990 ₽', image: '/placeholder-light4.jpg' }
    ]
  }

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-tabs">
          <button 
            className={activeTab === 'new' ? 'active' : ''}
            onClick={() => setActiveTab('new')}
          >
            Новинки
          </button>
          <button 
            className={activeTab === 'sale' ? 'active' : ''}
            onClick={() => setActiveTab('sale')}
          >
            Распродажа
          </button>
        </div>
        
        <div className="products-grid">
          {products[activeTab].map(product => (
            <div className="product-card" key={product.id}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
              <h3>{product.name}</h3>
              <div className="product-price">
                {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                <span>{product.price}</span>
              </div>
              <button className="btn-secondary">В корзину</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery