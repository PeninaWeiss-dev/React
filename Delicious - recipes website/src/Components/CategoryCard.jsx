import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const CategoryCard = (props) => {
  const recipesByCategory = useSelector(state => state.recipes.recipesByCategory);
  const [categories, setCategory] = useState([]);
  const { category } = props

  useEffect(() => {
    setCategory(recipesByCategory.map(category => {
      return {
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        categoryImage: category.categoryImage
      };
    }));
  }, [recipesByCategory]);
  
  return (
    <>
      <Grid item xs={12} sm={6} md={2.8} marginTop={4}>
        <Link to={`/CategoriesList/${category.categoryId}`} style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={category.categoryImage}
                alt={category.categoryName}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div"   >
                  {category.categoryName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </>
  );
}
export default CategoryCard;