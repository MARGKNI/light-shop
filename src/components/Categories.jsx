const Categories = () => {
  const categories = [
    { name: 'Люстры', icon: '💡' },
    { name: 'Бра', icon: '🛋️' },
    { name: 'Торшеры', icon: '🔦' },
    { name: 'Потолочные светильники', icon: '🏠' },
    { name: 'Настольные лампы', icon: '📚' },
    { name: 'Встраиваемые светильники', icon: '🔘' },
    { name: 'Уличные светильники', icon: '🌳' },
    { name: 'Лампочки', icon: '💡' }
  ]

  return (
    <section className="categories">
      <div className="container">
        <h2>Категории товаров</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories