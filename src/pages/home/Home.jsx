// src/pages/home/Home.jsx
import './Home.css';
import { useState, useMemo } from 'react';
import FilterBar from '../../components/filterBar/FilterBar';
import MenuList from '../../components/menuList/MenuList';

function Home({ menu = [] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('none');

  const visibleItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = Array.isArray(menu) ? [...menu] : [];
    if (category !== 'all') list = list.filter(i => i.category === category);
    if (q) list = list.filter(i => i.name?.toLowerCase().includes(q));
    if (sort === 'price-asc') list.sort((a,b)=>Number(a.price)-Number(b.price));
    if (sort === 'price-desc') list.sort((a,b)=>Number(b.price)-Number(a.price));
    return list;
  }, [menu, search, category, sort]);

  return (
    <div className="home">
      <h1>Menú del restaurante</h1>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
        categories={['all','Seafood']}
      />

      <MenuList menu={visibleItems} />
    </div>
  );
}

export default Home;
