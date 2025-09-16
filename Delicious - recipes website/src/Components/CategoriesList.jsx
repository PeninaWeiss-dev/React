import {React ,useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import useTitle from '../Hooks/useTitle';

const CategoriesList = () => {
  useTitle({pageTitle:"Categories"})
  const recipesByCategory = useSelector(state => state.recipes.recipesByCategory);
  const [categories,setCategory] = useState([]);

  useEffect(() => {
    setCategory(recipesByCategory.map(category => {
      return {
        categoryId:category.categoryId,
        categoryName: category.categoryName,
        categoryImage: category.categoryImage
      };
    }));
  }, [recipesByCategory]);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <CategoryCard category={category}/>
        ))}
      </Grid>
    </Box>
  );
}

export default CategoriesList;
