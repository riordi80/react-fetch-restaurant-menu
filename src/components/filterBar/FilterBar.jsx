// src/components/filterBar/FilterBar.jsx
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function FilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  categories = ['all', 'Seafood'],
}) {
  return (
    <Box component="section" sx={{ width: '100%', py: 1 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          fullWidth
          label="Buscar por nombre"
          placeholder="Ej: salmon..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            label="Categoría"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c === 'all' ? 'Todas las categorías' : c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="sort-label">Orden</InputLabel>
          <Select
            labelId="sort-label"
            label="Orden"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <MenuItem value="none">Sin orden</MenuItem>
            <MenuItem value="price-asc">Más económicos</MenuItem>
            <MenuItem value="price-desc">Menos económicos</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default FilterBar;
