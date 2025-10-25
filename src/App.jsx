// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home/Home';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

function App() {

  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })

      .then((data) => {
        if (!isMounted) return;
      
        if (Array.isArray(data?.meals)) {
          const normalizedMenu = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            category: 'Seafood',
            thumb: meal.strMealThumb,
            price: (Math.random() * 20 + 10).toFixed(2)
          }));
      
          setMenu(normalizedMenu);
        } else {
          setMenu([]);
        }
      })

      .catch((err) => {
        if (!isMounted) return;
        setError(err || 'Error al cargar el menú');
      })

      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  return (
    <div className="App" style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
      {isLoading ? <p>Cargando menú...</p> : <Home menu={menu} />}
      {error && <p style={{ color: 'red' }}>Error al cargar el menú: {error}</p>}
    </div>
  );
}

export default App;
