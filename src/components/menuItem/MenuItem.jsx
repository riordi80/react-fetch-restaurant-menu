// src/components/menuItem/MenuItem.jsx
import './MenuItem.css';

function MenuItem({ name, category, thumb, price }) {
  return (
    <div className="menu-item">
      <img src={thumb} alt={name} className="menu-item__image" />

      <div className="menu-item__info">
        <h2 className="menu-item__name">{name}</h2>
        <p className="menu-item__category">{category}</p>
        <p className="menu-item__price">{price} €</p>
      </div>
    </div>
  );
}

export default MenuItem;
