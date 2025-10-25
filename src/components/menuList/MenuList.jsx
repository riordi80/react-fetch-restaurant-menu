//src/components/menuList/MenuList.jsx
import { Container } from '@mui/material';
import MenuItem from '../menuItem/MenuItem';
import './MenuList.css';

function MenuList({ menu }) {
    return (
        <Container maxWidth={false} sx={{ maxWidth: 1200, px: 2, py: 2 }}>
            <div className="menu-list">
                {menu.length === 0 && <p>No hay platos</p>}

                {menu.map((plato) => (
                    <MenuItem
                        key={plato.id}
                        name={plato.name}
                        category={plato.category}
                        thumb={plato.thumb}
                        price={plato.price}
                    />
                ))}
            </div>
        </Container>
    );
}

export default MenuList;
