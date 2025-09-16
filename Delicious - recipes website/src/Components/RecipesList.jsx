import * as React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Profile from "./Profile";
import { Box, Grid } from "@mui/material";
import Fab from '@mui/material/Fab';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ToggleFavorite from "./ToggleFavorite";
import useTitle from '../Hooks/useTitle';



const RecipesList = () => {

    const { categoryId } = useParams();
    const categoryIndex = useSelector(state => state.recipes.recipesByCategory.findIndex(category => category.categoryId == categoryId));
    const recipes = useSelector(state => state.recipes.recipesByCategory[categoryIndex].recipes);
    useTitle({ pageTitle: useSelector(state => state.recipes.recipesByCategory[categoryIndex].categoryName) })

    return (
        <Box sx={{ flexGrow: 10, p: 5 }}>
            <Grid container spacing={2} justifyContent="center">
                {recipes.map((recipe, index) => (
                    <Grid item xs={12} sm={6} md={2.95} key={index}>
                        <Card sx={{ maxWidth: 380 }}>
                            <CardHeader
                                avatar={recipe.user ?
                                    <Profile user={recipe.user} />
                                    : null
                                }
                                title={
                                    <Typography variant="h6" >
                                        {recipe.name}
                                    </Typography>
                                }
                            />
                            <Link to={`/CategoriesList/${categoryId}/${recipe.recipeId}`} index={index} style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    image={`${recipe.image}`}
                                    alt={recipe.alt}
                                    sx={{
                                        objectFit: 'cover'
                                    }}
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {`${recipe.preparationTime} preparation`}

                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ToggleFavorite categoryId={categoryId} recipeId={recipe.recipeId} />
                                <Link to={`/CategoriesList/${categoryId}/${recipe.recipeId}`} index={index} style={{ textDecoration: 'none', marginLeft: 'auto', }}>
                                    <Fab size="small" aria-label="more"
                                        sx={{

                                            '&:hover': {
                                                backgroundColor: 'rgb(141, 141, 141)',
                                            },
                                            border: "1px solid #436448",
                                        }}
                                    >
                                        <ReadMoreIcon />
                                    </Fab>
                                </Link>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>
            <Outlet />
        </Box>
    );
}
export default RecipesList;